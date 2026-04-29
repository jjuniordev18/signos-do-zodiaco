import { planetInfo } from '../utils/signs';

export default function PlanetCard({ planet }) {
  const info = planetInfo[planet];
  if (!info) return null;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: info.color }}
        >
          <span className="text-xl">{info.symbol}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Planeta Regente</h3>
          <p className="text-amber-400 text-sm">{planet}</p>
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">{info.description}</p>
      <div className="mt-3 flex items-center gap-2 text-sm">
        <span className="w-4 h-4 rounded-full border-2 border-slate-600" style={{ backgroundColor: info.color }} />
        <span className="text-slate-400">Cor do planeta</span>
      </div>
    </div>
  );
}