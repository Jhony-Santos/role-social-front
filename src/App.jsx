import React, { useState } from 'react';
import { Plus, Dice6, Users, Sparkles } from 'lucide-react';
import RoleCard from './components/RoleCard';
import CreateRoleModal from './components/CreateRoleModal';
import SearchAndFilter from './components/SearchAndFilter';

const initialRoles = [
  {
    id: '1',
    title: 'Churrasco no Parque',
    description:
      'Uma tarde relaxante com amigos, boa comida e muito papo! Traga seu personagem favorito e vamos criar histórias incríveis ao ar livre.',
    category: 'social',
    participants: 3,
    maxParticipants: 8,
    date: '2025-01-20',
    location: 'Parque da Cidade',
    duration: '4 horas',
    rating: 4.8,
    difficulty: 'iniciante',
  },
  {
    id: '2',
    title: 'Noite do Karaokê',
    description:
      'Mostre seu talento vocal enquanto interpreta seu personagem! Uma noite única onde música e interpretação se encontram.',
    category: 'creative',
    participants: 5,
    maxParticipants: 12,
    date: '2025-01-22',
    location: 'Karaokê Galaxy',
    duration: '3 horas',
    rating: 4.9,
    difficulty: 'intermediário',
  },
  {
    id: '3',
    title: 'Pedal Noturno',
    description:
      'Encontro na praça às 20h e pedalada leve pelas ciclovias da cidade. Rolezinho de bike com paradas estratégicas pra trocar ideia e tomar algo.',
    category: 'adventure',
    participants: 2,
    maxParticipants: 6,
    date: '2025-01-25',
    location: 'Discord - Sala Privada',
    duration: '5 horas',
    rating: 5.0,
    difficulty: 'avançado',
  },
  {
    id: '4',
    title: 'Torneio de Uno',
    description:
      'Teste sua sorte (e estratégia) com um clássico dos jogos de carta. Reúna seus amigos, dispute partidas acirradas e descubra quem é o verdadeiro mestre do +4!',
    category: 'competitive',
    participants: 8,
    maxParticipants: 16,
    date: '2025-01-28',
    location: 'Centro de Convenções',
    duration: '6 horas',
    rating: 4.7,
    difficulty: 'intermediário',
  },
];

function App() {
  const [roles, setRoles] = useState(initialRoles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleCreateRole = (roleData) => {
    setRoles([...roles, roleData]);
  };

  const filteredRoles = roles.filter((role) => {
    const matchesSearch =
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || role.category === selectedCategory;
    const matchesDifficulty =
      !selectedDifficulty || role.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-xl shadow-lg">
                    <Dice6 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">
                      Lista de Roles
                    </h1>
                    <p className="text-gray-400">
                      Descubra aventuras épicas e crie memórias inesquecíveis
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">
                      {roles.reduce((acc, role) => acc + role.participants, 0)}{' '}
                      Jogadores Ativos
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm">
                      {roles.length} Roles Disponíveis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} {...role} />
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-8 max-w-md mx-auto">
                <Dice6 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhuma role encontrada
                </h3>
                <p className="text-gray-400 mb-6">
                  Não encontramos roles que correspondam aos seus critérios de
                  busca.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedDifficulty('');
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
                >
                  Limpar Filtros
                </button>
              </div>
            </div>
          )}
        </main>

        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 hover:scale-110 transition-all duration-200 z-40 group"
        >
          <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        <CreateRoleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateRole}
        />
      </div>
    </div>
  );
}

export default App;
