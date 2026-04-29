import { Calendar } from 'lucide-react';

export default function BirthDateForm({ birthDate, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthDate) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-xl">
        <label className="block mb-4">
          <span className="text-slate-300 text-sm font-medium flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4" />
            Data de Nascimento
          </span>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-slate-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            max={new Date().toISOString().split('T')[0]}
            aria-label="Data de nascimento"
          />
        </label>
        <button
          type="submit"
          disabled={!birthDate}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 animate-glow"
        >
          <span>Descobrir Signo</span>
        </button>
      </div>
    </form>
  );
}