import { Sparkles } from 'lucide-react';
import { getElementName, getModalityName } from '../utils/signs';

export default function SignCard({ sign }) {
  if (!sign) return null;

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-500">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500" />
      <div className="text-7xl mb-4 animate-float">{sign.symbol}</div>
      <h2 className="text-3xl font-bold text-slate-50 mb-2">{sign.name}</h2>
      <p className="text-slate-400 mb-4">
        {sign.dateRange.start[0]}/{sign.dateRange.start[1]} — {sign.dateRange.end[0]}/{sign.dateRange.end[1]}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
          {getElementName(sign.element)}
        </span>
        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
          {getModalityName(sign.modality)}
        </span>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">
          {sign.planet}
        </span>
      </div>
    </div>
  );
}