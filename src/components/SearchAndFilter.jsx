import React from 'react';
import { Search, Filter, Users, Calendar } from 'lucide-react';

export default function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
}) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar roles por título ou descrição"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="pl-12 pr-8 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer min-w-[150px]"
            >
              <option value="">Todas as categorias</option>
              <option value="adventure">🚴‍♀️ Aventura</option>
              <option value="social">🎭 Social</option>
              <option value="creative">🎨 Criativa</option>
              <option value="competitive">🏆 Competitiva</option>
            </select>
          </div>

          <div className="relative">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={selectedDifficulty}
              onChange={(e) => onDifficultyChange(e.target.value)}
              className="pl-12 pr-8 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer min-w-[140px]"
            >
              <option value="">Todas as dificuldades</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediário">Intermediário</option>
              <option value="avançado">Avançado</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
