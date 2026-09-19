'use client';

import React, { useMemo } from 'react';
import { GeoPoint } from '@/types/geo';
import { cn } from '@/lib/utils';
import { Star, MapPin, Compass, Navigation } from 'lucide-react';
import { getMapDataForContext } from '@/data/vectorMaps';

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
  // Determine vector map dataset and map projection type
  const { mapData, mapType } = useMemo(
    () => getMapDataForContext(category, continentId, countryId),
    [category, continentId, countryId]
  );

  return (
    <div
      className={cn(
        'relative w-full aspect-[16/10] max-h-[500px] rounded-3xl overflow-hidden',
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

          {/* Landmass Shading Gradient */}
          <linearGradient id="land-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Target Country Glow Filter */}
          <filter id="glow-target" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#ocean-depth)" />
        <rect width="100%" height="100%" fill="url(#carto-graticule)" />
      </svg>

      {/* Dynamic Realistic Vector Map Rendering */}
      <svg
        viewBox={mapData.viewBox}
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Ocean Halo / Shoreline Contour Effect */}
        {mapData.features.map((feature) => (
          <path
            key={`halo-${feature.id}`}
            d={feature.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-emerald-500/10 pointer-events-none"
          />
        ))}

        {/* Decorative Hydrography & River Accents */}
        {mapData.decorativePaths?.map((pathD, idx) => (
          <path
            key={`dec-${idx}`}
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2.5 2.5"
            strokeLinecap="round"
            className="text-sky-400/40 pointer-events-none transition-opacity duration-300"
          />
        ))}

        {/* Realistic Geographic Landmass Features */}
        {mapData.features.map((feature) => {
          const isTarget =
            targetId === feature.id ||
            (targetName && feature.name.toLowerCase().includes(targetName.toLowerCase()));

          return (
            <g key={feature.id} className="transition-all duration-300 group">
              <path
                d={feature.d}
                filter={isTarget ? 'url(#glow-target)' : undefined}
                className={cn(
                  'transition-all duration-300 cursor-default stroke-linejoin-round',
                  isTarget
                    ? 'fill-emerald-500/35 stroke-emerald-400 stroke-[2] drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]'
                    : 'fill-slate-800/90 hover:fill-slate-700/90 stroke-slate-600/70 hover:stroke-emerald-500/60 stroke-[1.2]'
                )}
              />
            </g>
          );
        })}
      </svg>

      {/* Target Crosshair Pulse Indicator */}
      {targetCoords && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-all duration-500"
          style={{ left: `${targetCoords.x}%`, top: `${targetCoords.y}%` }}
        >
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-7 w-7 bg-emerald-500/25 border-2 border-emerald-400 items-center justify-center shadow-lg shadow-emerald-500/50">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </span>
          </span>
        </div>
      )}

      {/* Cartographic Compass Rose & Information Overlay */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
          <Compass className="h-4 w-4 text-emerald-400 animate-spin-slow" />
          <span>{highlightCountryName || mapData.name}</span>
        </div>
        <div className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
          {mapType === 'country' ? 'Vue Pays Réaliste' : mapType === 'continent' ? 'Vue Continentale' : 'Planisphère'}
        </div>
      </div>

      {/* North Indicator & Scale Widget */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-400 shadow-md">
          <Navigation className="h-3 w-3 text-emerald-400 -rotate-45" />
          <span className="font-bold text-emerald-400">N</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-400 shadow-md">
          <div className="w-8 h-1 bg-emerald-500/40 border border-emerald-400 rounded-sm" />
          <span>Échelle vectorielle</span>
        </div>
      </div>

      {/* Interactive Map Markers */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {markers.map((marker) => {
          const isTarget = activeMarkerId === marker.id;
          const isCorrect = marker.isCorrect === true;
          const isWrong = marker.isCorrect === false;

          return (
            <div
              key={marker.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group pointer-events-auto transition-all duration-500"
              style={{ left: `${marker.coords.x}%`, top: `${marker.coords.y}%` }}
            >
              <button
                type="button"
                onClick={() => onMarkerClick?.(marker.id)}
                className={cn(
                  'flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-full transition-all duration-300 focus:outline-none focus:scale-125',
                  isTarget && 'scale-125 z-30',
                  isCorrect && 'animate-bounce text-emerald-400 scale-125',
                  isWrong && 'animate-pulse text-rose-500 scale-125'
                )}
              >
                <div
                  className={cn(
                    'flex items-center justify-center rounded-full p-2 border shadow-lg transition-all duration-200',
                    marker.isCapital
                      ? 'bg-amber-500/25 border-amber-400 text-amber-400 shadow-amber-500/40'
                      : 'bg-emerald-500/25 border-emerald-400 text-emerald-400 shadow-emerald-500/30',
                    isTarget && 'bg-teal-500/35 border-teal-300 text-teal-200 shadow-teal-500/50 scale-110',
                    isCorrect && 'bg-emerald-500 border-white text-white shadow-emerald-500/80',
                    isWrong && 'bg-rose-600 border-white text-white shadow-rose-600/80'
                  )}
                >
                  {marker.isCapital ? (
                    <Star className="h-4 w-4 fill-amber-400 stroke-amber-200" />
                  ) : (
                    <MapPin className="h-4 w-4 stroke-[2.5]" />
                  )}
                </div>
              </button>

              {showLabels && (
                <div
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap backdrop-blur-md pointer-events-none transition-all duration-200 border shadow-md',
                    isTarget
                      ? 'bg-emerald-600 text-white border-emerald-400 opacity-100 scale-105 z-30'
                      : 'bg-slate-950/90 text-slate-200 border-slate-800 group-hover:opacity-100 group-hover:scale-105'
                  )}
                >
                  {marker.name}
                  {marker.isCapital && <span className="ml-1 text-amber-400 font-bold">★</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
