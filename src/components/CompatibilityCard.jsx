import { useState } from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { getCompatibilityScore, getCompatibilityDescription } from '../utils/signs';

export default function CompatibilityCard({ sign, allSigns }) {
  const [compareSign, setCompareSign] = useState('');

  if (!sign) return null;

  const score = compareSign ? getCompatibilityScore(sign.id, compareSign) : null;
  const compareSignData = allSigns?.find(s => s.id === compareSign);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-pink-400" />
        Compatibilidade
      </h3>
      <div className="relative">
        <select
          value={compareSign}
          onChange={(e) => setCompareSign(e.target.value)}
          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-slate-50 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          aria-label="Selecione um signo para comparar"
        >
          <option value="">Selecione um signo para comparar...</option>
          {allSigns?.filter(s => s.id !== sign.id).map(s => (
            <option key={s.id} value={s.id}>
              {s.symbol} {s.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      </div>

      {compareSign && score !== null && (
        <div className="mt-6 animate-slide-up">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300">
              {sign.name} + {compareSignData?.name}
            </span>
            <span className={`font-bold text-lg ${
              score >= 75 ? 'text-emerald-400' :
              score >= 60 ? 'text-amber-400' : 'text-rose-400'
            }`}>
              {score}%
            </span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                score >= 75 ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' :
                score >= 60 ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                'bg-gradient-to-r from-rose-500 to-rose-400'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="mt-4 text-slate-400 text-sm">
            {getCompatibilityDescription(score)}
          </p>
        </div>
      )}
    </div>
  );
}