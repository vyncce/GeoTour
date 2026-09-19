'use client';

import React, { useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { UserPreferences, AppState } from '@/types/storage';
import { Download, Upload, RotateCcw, ShieldCheck } from 'lucide-react';

export interface SettingsPanelProps {
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: Partial<UserPreferences>) => void;
  appState: AppState;
  onImportState: (state: AppState) => void;
  onResetState: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  preferences,
  onUpdatePreferences,
  appState,
  onImportState,
  onResetState,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `geotour_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && Array.isArray(parsed.items)) {
            onImportState(parsed);
            alert('Données importées avec succès !');
          } else {
            alert('Format de fichier invalide.');
          }
        } catch {
          alert('Erreur lors de la lecture du fichier JSON.');
        }
      };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Paramètres &amp; Gestion Locale
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Préférences utilisateur et sauvegarde des données LocalStorage
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: User Preferences */}
        <Card title="Préférences Utilisateur" description="Options d'affichage et comportement">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Mode Compact
                </p>
                <p className="text-xs text-slate-500">Réduit l&apos;espacement pour les petits écrans</p>
              </div>
              <button
                onClick={() => onUpdatePreferences({ compactMode: !preferences.compactMode })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors min-h-11 px-1 ${
                  preferences.compactMode ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.compactMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Notifications Locales
                </p>
                <p className="text-xs text-slate-500">Afficher les popups d&apos;état</p>
              </div>
              <button
                onClick={() =>
                  onUpdatePreferences({ notificationsEnabled: !preferences.notificationsEnabled })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors min-h-11 px-1 ${
                  preferences.notificationsEnabled
                    ? 'bg-emerald-600'
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Card 2: Backup & Restore */}
        <Card title="Sauvegarde &amp; Export" description="Exportation et réinitialisation JSON">
          <div className="space-y-3">
            <Button variant="outline" onClick={handleExport} className="w-full justify-start">
              <Download className="h-4 w-4" />
              Exporter la base locale JSON
            </Button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImport}
              accept=".json"
              className="hidden"
            />
            <Button
              variant="secondary"
              onClick={() => fileInputRef.current?.click()}
              className="w-full justify-start"
            >
              <Upload className="h-4 w-4" />
              Importer une sauvegarde JSON
            </Button>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <Button
                variant="danger"
                onClick={() => {
                  if (confirm('Voulez-vous vraiment réinitialiser toutes les données locales ?')) {
                    onResetState();
                  }
                }}
                className="w-full justify-start"
              >
                <RotateCcw className="h-4 w-4" />
                Réinitialiser le LocalStorage
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Security & Privacy info */}
      <Card className="bg-emerald-500/5 border-emerald-500/20">
        <div className="flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Sécurité &amp; Confidentialité Mono-Utilisateur
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Vos données restent exclusivement stockées dans le navigateur de votre appareil. Aucun serveur distant, cookie d&apos;analyse ou tracker tiers n&apos;est utilisé.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
