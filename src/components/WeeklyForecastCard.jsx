import { Gem } from 'lucide-react';

export default function WeeklyForecastCard({ forecast }) {
  if (!forecast) return null;

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
          <Gem className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-emerald-300">Previsão da Semana</h3>
            </div>
            <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">{forecast.weekLabel}</span>
          </div>
          <p className="text-xl font-medium text-slate-100 mt-1">{forecast.theme}</p>
          <p className="text-slate-400 text-sm mt-2">{forecast.advice}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {forecast.focus.map((item, idx) => (
              <span key={idx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}