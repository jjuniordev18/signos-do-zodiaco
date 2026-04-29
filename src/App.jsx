import { useState, useMemo } from 'react';
import { Star } from 'lucide-react';
import { signs as allSigns, getSignByDate, generateLuckyNumbers, getDailyHoroscope, getMoonPhase, getWeeklyForecast } from './utils/signs';
import {
  Header,
  BackgroundEffects,
  BirthDateForm,
  EmptyState,
  AppFooter,
  MoonPhaseCard,
  WeeklyForecastCard,
  SignCard,
  PlanetCard,
  LuckyNumbersCard,
  HoroscopeTabs,
  TraitsCard,
  CompatibilityCard
} from './components';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [showResults, setShowResults] = useState(false);

  const userSign = useMemo(() => {
    if (!birthDate) return null;
    return getSignByDate(new Date(birthDate));
  }, [birthDate]);

  const luckyNumbers = useMemo(() => {
    if (!birthDate || !userSign) return [];
    return generateLuckyNumbers(new Date(birthDate), userSign.id);
  }, [birthDate, userSign]);

  const horoscope = useMemo(() => {
    if (!userSign) return null;
    return getDailyHoroscope(userSign.id, new Date());
  }, [userSign]);

  const moonPhase = useMemo(() => getMoonPhase(new Date()), []);
  const weeklyForecast = useMemo(() => userSign ? getWeeklyForecast(userSign.id) : null, [userSign]);

  const handleSubmit = () => {
    if (birthDate) {
      setShowResults(true);
    }
  };

  const handleDateChange = (value) => {
    setBirthDate(value);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <Header />

        <BirthDateForm
          birthDate={birthDate}
          onChange={handleDateChange}
          onSubmit={handleSubmit}
        />

        {showResults && userSign && (
          <div className="space-y-6 animate-fade-in">
            <MoonPhaseCard moonPhase={moonPhase} />
            <WeeklyForecastCard forecast={weeklyForecast} />
            <SignCard sign={userSign} />
            <PlanetCard planet={userSign.planet} />
            <LuckyNumbersCard
              numbers={luckyNumbers}
              luckyDay={userSign.luckyDay}
              signName={userSign.name}
            />
            <HoroscopeTabs horoscope={horoscope} weeklyForecast={weeklyForecast} />
            <TraitsCard sign={userSign} />
            <CompatibilityCard sign={userSign} allSigns={allSigns} />
            <AppFooter />
          </div>
        )}

        {!showResults && (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default App;