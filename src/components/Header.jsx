import { Sparkles, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center mb-10 sm:mb-14">
      <div className="inline-flex items-center justify-center gap-2 mb-4 animate-float">
        <Sparkles className="w-8 h-8 text-indigo-400" />
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
          Signos do Zodíaco
        </h1>
        <Sparkles className="w-8 h-8 text-purple-400" />
      </div>
      <p className="text-slate-400 text-lg">Descubra seu signo e as energias do universo</p>
    </header>
  );
}