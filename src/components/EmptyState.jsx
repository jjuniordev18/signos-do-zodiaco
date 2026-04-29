import { Star } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 rounded-full mb-6">
        <Star className="w-10 h-10 text-slate-600 animate-float" />
      </div>
      <p className="text-slate-500">Insira sua data de nascimento para descobrir seu signo</p>
    </div>
  );
}