import { Sparkles } from 'lucide-react';

export default function TraitsCard({ sign }) {
  if (!sign || !sign.traits) return null;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-purple-400" />
        Características do Signo
      </h3>
      <div className="mb-4">
        <p className="text-slate-300 leading-relaxed">{sign.traits.description}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-emerald-400 font-medium mb-2">Pontos Fortes</p>
          <div className="flex flex-wrap gap-2">
            {sign.traits.positive.map((trait, idx) => (
              <span key={idx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg text-sm">
                {trait}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-rose-400 font-medium mb-2">Desafios</p>
          <div className="flex flex-wrap gap-2">
            {sign.traits.challenges.map((trait, idx) => (
              <span key={idx} className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}