'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { LocalStorageOptions } from '@/types/storage';

const CUSTOM_STORAGE_EVENT = 'geotour-storage-update';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener(CUSTOM_STORAGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CUSTOM_STORAGE_EVENT, callback);
  };
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options: LocalStorageOptions<T> = {}
): [T, (value: T | ((val: T) => T)) => void, () => void, { isReady: boolean; isFallback: boolean }] {
  const {
    serializer = JSON.stringify,
    deserializer = JSON.parse,
    onError = (err) => console.error(`[useLocalStorage] Error on key "${key}":`, err),
  } = options;

  const resolveInitialValue = useCallback((): T => {
    return typeof initialValue === 'function'
      ? (initialValue as () => T)()
      : initialValue;
  }, [initialValue]);

  const getSnapshot = useCallback(() => {
    try {
      if (typeof window === 'undefined') return serializer(resolveInitialValue());
      const item = window.localStorage.getItem(key);
      return item !== null ? item : serializer(resolveInitialValue());
    } catch (err) {
      onError(err);
      return serializer(resolveInitialValue());
    }
  }, [key, serializer, resolveInitialValue, onError]);

  const getServerSnapshot = useCallback(() => {
    return serializer(resolveInitialValue());
  }, [serializer, resolveInitialValue]);

  const rawSnapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  let value: T;
  try {
    value = deserializer(rawSnapshot);
  } catch (err) {
    onError(err);
    value = resolveInitialValue();
  }

  const setValue = useCallback(
    (val: T | ((prev: T) => T)) => {
      try {
        const currentItem = window.localStorage.getItem(key);
        const currentVal: T = currentItem !== null ? deserializer(currentItem) : resolveInitialValue();
        const nextVal = typeof val === 'function' ? (val as (prev: T) => T)(currentVal) : val;

        window.localStorage.setItem(key, serializer(nextVal));
        window.dispatchEvent(
          new CustomEvent(CUSTOM_STORAGE_EVENT, { detail: { key, value: nextVal } })
        );
      } catch (err) {
        onError(err);
      }
    },
    [key, serializer, deserializer, resolveInitialValue, onError]
  );

  const removeValue = useCallback(() => {
    try {
      const initVal = resolveInitialValue();
      window.localStorage.removeItem(key);
      window.dispatchEvent(
        new CustomEvent(CUSTOM_STORAGE_EVENT, { detail: { key, value: initVal } })
      );
    } catch (err) {
      onError(err);
    }
  }, [key, resolveInitialValue, onError]);

  return [value, setValue, removeValue, { isReady: true, isFallback: false }];
}
