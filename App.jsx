import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ClipboardList, Edit3, Menu } from 'lucide-react';
import logo from './logo.webp';

const App = () => {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(true);

  const pages = {
    inicio: <h1 className="text-3xl font-bold text-purple-600 text-center mt-20">Mapa de Calor - Matriz de Riesgos Habi</h1>,
    riesgos: <h1 className="text-3xl font-bold text-purple-600 text-center mt-20">Riesgos y Controles (solo lectura)</h1>,
    lideres: <h1 className="text-3xl font-bold text-purple-600 text-center mt-20">Riesgos y Controles - Editar (Líderes)</h1>
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <motion.aside
        animate={{ width: open ? 220 : 80 }}
        className="bg-purple-700 text-white p-4 flex flex-col justify-between transition-all duration-300"
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <motion.img
              src={logo}
              alt="Habi Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-full"
            />
            <button onClick={() => setOpen(!open)} className="ml-2">
              <Menu />
            </button>
          </div>
          <nav className="space-y-3">
            {[
              { id: 'inicio', label: 'Inicio', icon: LayoutDashboard },
              { id: 'riesgos', label: 'Riesgos', icon: ClipboardList },
              { id: 'lideres', label: 'Líderes', icon: Edit3 },
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setActive(id)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center w-full text-left p-2 rounded-lg transition-colors ${
                  active === id ? 'bg-purple-900' : 'hover:bg-purple-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {open && <span>{label}</span>}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.aside>

      <motion.main
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 p-6 overflow-y-auto"
      >
        {pages[active]}
      </motion.main>
    </div>
  );
};

export default App;