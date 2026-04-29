import { useState } from 'react';
import { Star, Calendar } from 'lucide-react';

export default function HoroscopeTabs({ horoscope, weeklyForecast }) {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
      <div className="flex border-b border-slate-700/50">
        <button
          onClick={() => setActiveTab('daily')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${
            activeTab === 'daily'
              ? 'bg-indigo-500/20 text-indigo-300 border-b-2 border-indigo-500'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Diário
          </div>
        </button>
        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${
            activeTab === 'weekly'
              ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-500'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Semanal
          </div>
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'daily' && horoscope && (
          <div className="space-y-4 animate-fade-in">
            <HoroscopeCategory label="Amor" value={horoscope.love} color="pink" icon="Heart" />
            <HoroscopeCategory label="Carreira" value={horoscope.career} color="indigo" icon="Briefcase" />
            <HoroscopeCategory label="Saúde" value={horoscope.health} color="green" icon="Activity" />
            <HoroscopeCategory label="Finanças" value={horoscope.finances} color="amber" icon="TrendingUp" />
          </div>
        )}

        {activeTab === 'weekly' && weeklyForecast && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Tema da Semana</p>
                <p className="text-xl font-bold text-slate-100">{weeklyForecast.theme}</p>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
              <p className="text-slate-300 leading-relaxed">{weeklyForecast.advice}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 mb-2">Focos da semana:</p>
              <div className="flex flex-wrap gap-2">
                {weeklyForecast.focus.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-indigo-300 rounded-lg text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function HoroscopeCategory({ label, value, color, icon: Icon }) {
  const icons = {
    Heart: '💜',
    Briefcase: '💼',
    Activity: '💚',
    TrendingUp: '💰'
  };

  const colors = {
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400' },
    indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
    green: { bg: 'bg-green-500/20', text: 'text-green-400' },
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' }
  };

  const colorStyle = colors[color] || colors.indigo;

  return (
    <div className="flex gap-3">
      <div className={`w-8 h-8 ${colorStyle.bg} rounded-lg flex items-center justify-center shrink-0`}>
        <span className={colorStyle.text}>{icons[Icon]}</span>
      </div>
      <div>
        <p className="text-sm text-slate-400 mb-1">{label}</p>
        <p className="text-slate-200">{value}</p>
      </div>
    </div>
  );
}