'use client';

import React, { useMemo } from 'react';
import { GeoPoint } from '@/types/geo';
import { cn } from '@/lib/utils';
import { Star, MapPin, Compass, Navigation } from 'lucide-react';
import {
  generateSingleCountryMap,
  generateContinentMapPaths,
  generateWorldMapPaths,
} from '@/lib/d3GeoService';
import { CONTINENTS_DATA } from '@/data/geoDataset';

export interface MapMarker {
  id: string;
  name: string;
  coords: GeoPoint;
  isCapital?: boolean;
  isSelected?: boolean;
  isCorrect?: boolean | null; // true = correct, false = wrong, null = unselected
  label?: string;
  sublabel?: string;
}

export interface MinimalistMapProps {
  category?: string;
  continentId?: string;
  countryId?: string;
  targetId?: string;
  targetName?: string;
  markers?: MapMarker[];
  targetCoords?: GeoPoint;
  activeMarkerId?: string;
  onMarkerClick?: (markerId: string) => void;
  showLabels?: boolean;
  highlightCountryName?: string;
  className?: string;
}

const MAP_WIDTH = 800;
const MAP_HEIGHT = 500;

export const MinimalistMap: React.FC<MinimalistMapProps> = ({
  category,
  continentId,
  countryId,
  targetId,
  targetName,
  markers = [],
  targetCoords,
  activeMarkerId,
  onMarkerClick,
  showLabels = true,
  highlightCountryName,
  className,
}) => {
  // 1. Single Country Natural Earth Cartography
  const countryMap = useMemo(() => {
    if (!countryId) return null;
    return generateSingleCountryMap(countryId, MAP_WIDTH, MAP_HEIGHT, 45);
  }, [countryId]);

  // 2. Continent Natural Earth Cartography
  const continentMap = useMemo(() => {
    if (countryId || !continentId) return null;
    const continentObj = CONTINENTS_DATA.find((c) => c.id === continentId);
    const countryIds = continentObj ? continentObj.countries.map((c) => c.id) : [];
    return generateContinentMapPaths(countryIds, MAP_WIDTH, MAP_HEIGHT, 35);
  }, [countryId, continentId]);

  // 3. World Natural Earth Cartography (Default / Global)
  const worldMap = useMemo(() => {
    if (countryId || continentId) return null;
    return generateWorldMapPaths(MAP_WIDTH, MAP_HEIGHT);
  }, [countryId, continentId]);

  // Unified projector function
  const projectPoint = useMemo(() => {
    if (countryMap) return countryMap.project;
    if (continentMap) return continentMap.project;
    if (worldMap) return worldMap.project;
    return (lng: number, lat: number): [number, number] => [
      ((lng + 180) / 360) * MAP_WIDTH,
      ((90 - lat) / 180) * MAP_HEIGHT,
    ];
  }, [countryMap, continentMap, worldMap]);

  // Helper to get screen percentage coordinates for any marker
  const getMarkerPosition = (coords: GeoPoint): { left: string; top: string } => {
    if (coords.lat !== undefined && coords.lng !== undefined) {
      const [px, py] = projectPoint(coords.lng, coords.lat);
      return {
        left: `${(px / MAP_WIDTH) * 100}%`,
        top: `${(py / MAP_HEIGHT) * 100}%`,
      };
    }
    return {
      left: `${coords.x}%`,
      top: `${coords.y}%`,
    };
  };

  const currentTargetPos = targetCoords ? getMarkerPosition(targetCoords) : null;

  return (
    <div
      className={cn(
        'relative w-full aspect-16/10 max-h-125 rounded-3xl overflow-hidden',
        'bg-slate-950 border border-slate-800 shadow-2xl select-none',
        'transition-all duration-500',
        className
      )}
    >
      {/* Background Cartographic Oceanic Grid & Bathymetry */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Latitude & Longitude Graticule Pattern */}
          <pattern id="carto-graticule" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-slate-800/40"
            />
            <circle cx="0" cy="0" r="1" className="fill-slate-700/60" />
          </pattern>

          {/* Oceanic Depth Radial Glow */}
          <radialGradient id="ocean-depth" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#090d16" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </radialGradient>

          {/* Target Glow Filter */}
          <filter id="glow-target" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#ocean-depth)" />
        <rect width="100%" height="100%" fill="url(#carto-graticule)" />
      </svg>

      {/* 1. SINGLE COUNTRY NATURAL EARTH VIEW */}
      {countryMap && (
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Shoreline Halo */}
          <path
            d={countryMap.svgPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-emerald-500/20 pointer-events-none"
          />

          {/* Authentic Country Polygon */}
          <path
            d={countryMap.svgPath}
            filter="url(#glow-target)"
            className="fill-slate-850/95 stroke-emerald-400 stroke-2 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
          />
        </svg>
      )}

      {/* 2. CONTINENT NATURAL EARTH VIEW */}
      {continentMap && (
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Graticule Grid */}
          <path
            d={continentMap.graticulePath}
            fill="none"
            stroke="#334155"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            opacity="0.3"
          />

          {/* Continent Country Features */}
          {continentMap.countryPaths.map((c) => {
            const isTarget =
              targetId === c.id ||
              (targetName && c.name.toLowerCase().includes(targetName.toLowerCase()));

            return (
              <path
                key={c.id}
                d={c.d}
                className={cn(
                  'transition-all duration-300',
                  isTarget
                    ? 'fill-emerald-600/50 stroke-emerald-400 stroke-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : 'fill-slate-800/90 stroke-slate-700/80 stroke-1 hover:fill-slate-750'
                )}
              />
            );
          })}
        </svg>
      )}

      {/* 3. WORLD NATURAL EARTH 1 VIEW */}
      {worldMap && (
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Sphere Outline */}
          <path d={worldMap.spherePath} fill="none" stroke="#1e293b" strokeWidth="1.5" />

          {/* Graticule Lines */}
          <path
            d={worldMap.graticulePath}
            fill="none"
            stroke="#334155"
            strokeWidth="0.6"
            strokeDasharray="2 4"
            opacity="0.4"
          />

          {/* World Countries */}
          {worldMap.countryPaths.map((c) => (
            <path
              key={c.id}
              d={c.d}
              className="fill-slate-800/90 stroke-slate-700/70 stroke-0.8 hover:fill-slate-750 transition-colors"
            />
          ))}
        </svg>
      )}

      {/* Active Target Indicator Pulse Ring */}
      {currentTargetPos && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-all duration-500 ease-out"
          style={{ left: currentTargetPos.left, top: currentTargetPos.top }}
        >
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-linear-to-tr from-emerald-600 to-teal-400 border-2 border-white shadow-lg shadow-emerald-500/50" />
          </div>
        </div>
      )}

      {/* City & Location Markers */}
      <div className="absolute inset-0 pointer-events-auto">
        {markers.map((marker) => {
          const pos = getMarkerPosition(marker.coords);
          const isCapital = marker.isCapital;
          const isSelected = activeMarkerId === marker.id || marker.isSelected;
          const isCorrect = marker.isCorrect;

          let stateStyle = 'bg-slate-900 border-slate-400 text-slate-200';
          let iconColor = 'text-slate-300';

          if (isCapital) {
            stateStyle = 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-amber-500/20';
            iconColor = 'text-amber-400';
          }

          if (isSelected) {
            stateStyle =
              'bg-emerald-500 border-white text-white shadow-lg shadow-emerald-500/50 scale-125 z-20 ring-4 ring-emerald-500/30';
            iconColor = 'text-white';
          }

          if (isCorrect === true) {
            stateStyle = 'bg-emerald-600 border-emerald-300 text-white shadow-emerald-500/50 z-20';
            iconColor = 'text-white';
          } else if (isCorrect === false) {
            stateStyle = 'bg-rose-600 border-rose-300 text-white shadow-rose-500/50 z-20';
            iconColor = 'text-white';
          }

          return (
            <div
              key={marker.id}
              onClick={() => onMarkerClick && onMarkerClick(marker.id)}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group transition-all duration-300 ease-out',
                onMarkerClick ? 'hover:scale-125' : ''
              )}
              style={{ left: pos.left, top: pos.top }}
            >
              {/* Marker Pin Button */}
              <div
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-md transition-all duration-200 backdrop-blur-xs min-h-11 min-w-11 sm:w-8 sm:h-8',
                  stateStyle
                )}
              >
                {isCapital ? (
                  <Star className={cn('w-4 h-4 fill-current', iconColor)} />
                ) : (
                  <MapPin className={cn('w-4 h-4', iconColor)} />
                )}
              </div>

              {/* Marker Label Tooltip */}
              {showLabels && (
                <div
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2 py-0.5 rounded-md text-[11px] font-bold whitespace-nowrap shadow-md pointer-events-none transition-all duration-200',
                    isSelected || isCorrect !== undefined
                      ? 'opacity-100 scale-100 bg-slate-900/95 border border-slate-700 text-emerald-400'
                      : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 bg-slate-900/90 text-slate-200 border border-slate-800'
                  )}
                >
                  <div className="flex items-center gap-1">
                    {isCapital && <span className="text-amber-400">★</span>}
                    <span>{marker.name}</span>
                  </div>
                  {marker.sublabel && (
                    <span className="block text-[9px] text-slate-400 font-normal">
                      {marker.sublabel}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Cartographic Compass Rose & Watermark */}
      <div className="absolute top-4 right-4 flex items-center gap-2 p-2 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/60 text-slate-400 text-xs font-mono pointer-events-none shadow-lg">
        <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
        <span className="text-[10px] uppercase font-bold text-slate-300">Natural Earth WGS84</span>
      </div>

      {/* Country Name Badge Overlay */}
      {(highlightCountryName || countryId) && (
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-200 text-xs font-bold pointer-events-none shadow-lg">
          <Navigation className="w-3.5 h-3.5 text-emerald-400 fill-current" />
          <span>{highlightCountryName || countryId?.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};
