import { Moon } from 'lucide-react';

export default function MoonPhaseCard({ moonPhase }) {
  if (!moonPhase) return null;

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400" />
      <div className="flex items-center gap-4">
        <div className="text-5xl animate-bounce-gentle">{moonPhase.emoji}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-amber-300">Fase da Lua</h3>
          </div>
          <p className="text-xl font-medium text-slate-100 mt-1">{moonPhase.name}</p>
          <p className="text-slate-400 text-sm mt-1">{moonPhase.description}</p>
        </div>
      </div>
    </div>
  );
}