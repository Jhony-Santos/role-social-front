import React from 'react';
import { Calendar, Users, MapPin, Clock, Star } from 'lucide-react';

const categoryStyles = {
  adventure: {
    gradient: 'from-emerald-600 to-teal-700',
    border: 'border-emerald-400/30',
    glow: 'shadow-emerald-500/20',
    icon: '⚔️',
  },
  social: {
    gradient: 'from-purple-600 to-pink-700',
    border: 'border-purple-400/30',
    glow: 'shadow-purple-500/20',
    icon: '🎭',
  },
  creative: {
    gradient: 'from-orange-600 to-red-700',
    border: 'border-orange-400/30',
    glow: 'shadow-orange-500/20',
    icon: '🎨',
  },
  competitive: {
    gradient: 'from-blue-600 to-indigo-700',
    border: 'border-blue-400/30',
    glow: 'shadow-blue-500/20',
    icon: '🏆',
  },
};

const difficultyColors = {
  iniciante: 'text-green-400',
  intermediário: 'text-yellow-400',
  avançado: 'text-red-400',
};

export default function RoleCard({
  title,
  description,
  category,
  participants,
  maxParticipants,
  date,
  location,
  duration,
  rating,
  difficulty,
}) {
  const style = categoryStyles[category];

  return (
    <div
      className={`
      group relative bg-gradient-to-br ${style.gradient} 
      rounded-xl border ${style.border} 
      shadow-xl ${style.glow} 
      hover:shadow-2xl hover:scale-[1.02] 
      transition-all duration-300 ease-out
      overflow-hidden
    `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{style.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-white/95 transition-colors">
                {title}
              </h3>
              <span
                className={`text-sm font-medium ${difficultyColors[difficulty]} capitalize`}
              >
                {difficulty}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-medium text-sm">
              {rating}
            </span>
          </div>
        </div>

        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-white/80">
            <Users className="w-4 h-4" />
            <span className="text-sm">
              {participants}/{maxParticipants} participantes
            </span>
          </div>
          <div className="flex items-center space-x-3 text-white/80">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center space-x-3 text-white/80">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center space-x-3 text-white/80">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <button
          className="
          w-full bg-white/20 hover:bg-white/30 
          text-white font-semibold py-3 px-6 
          rounded-lg border border-white/30 
          hover:border-white/50 hover:shadow-lg
          transition-all duration-200 
          backdrop-blur-sm
          group-hover:transform group-hover:translate-y-[-2px]
        "
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
