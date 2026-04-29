import { Sparkle } from 'lucide-react';

export default function LuckyNumbersCard({ numbers, luckyDay, signName }) {
  if (!numbers || numbers.length === 0) return null;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
      <div className="flex items-center gap-2 mb-4">
        <Sparkle className="w-5 h-5 text-amber-400" />
        <h3 className="text-lg font-semibold">Números da Sorte</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {numbers.map((num, idx) => (
          <div
            key={idx}
            className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg shadow-amber-500/25 animate-pop-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {num}
          </div>
        ))}
      </div>
      <p className="text-slate-400 text-sm mt-3">
        <span className="text-amber-400 font-medium">{luckyDay}</span> é seu dia de sorte!
      </p>
    </div>
  );
}