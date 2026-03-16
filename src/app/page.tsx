"use client";
import React, { useState, useEffect } from 'react';

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  categoria: string;
}

interface Gasto {
  id: number;
  monto: number;
  lugar: string;
  fecha: string;
  foto?: string;
}

export default function MiAlacena() {
  const [items, setItems] = useState<Producto[]>([]);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('Almacén');
  const [nuevoMonto, setNuevoMonto] = useState('');
  const [nuevoLugar, setNuevoLugar] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [fotoTicket, setFotoTicket] = useState<string | null>(null);

  useEffect(() => {
    const dAlacena = localStorage.getItem('alacena-pro');
    const dGastos = localStorage.getItem('alacena-gastos');
    const dTheme = localStorage.getItem('theme');
    if (dAlacena) setItems(JSON.parse(dAlacena));
    if (dGastos) setGastos(JSON.parse(dGastos));
    if (dTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('alacena-pro', JSON.stringify(items));
    localStorage.setItem('alacena-gastos', JSON.stringify(gastos));
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [items, gastos, darkMode]);

  const cargarMegaLista50 = () => {
    const megaLista: Producto[] = [
      { id: 1, nombre: 'Arroz', cantidad: 1, categoria: 'Almacén' },
      { id: 2, nombre: 'Fideos', cantidad: 1, categoria: 'Almacén' },
      { id: 3, nombre: 'Aceite', cantidad: 1, categoria: 'Almacén' },
      { id: 4, nombre: 'Harina', cantidad: 1, categoria: 'Almacén' },
      { id: 5, nombre: 'Azúcar', cantidad: 1, categoria: 'Almacén' },
      { id: 6, nombre: 'Sal', cantidad: 1, categoria: 'Almacén' },
      { id: 7, nombre: 'Puré de Tomate', cantidad: 1, categoria: 'Almacén' },
      { id: 8, nombre: 'Yerba', cantidad: 1, categoria: 'Almacén' },
      { id: 9, nombre: 'Café', cantidad: 1, categoria: 'Almacén' },
      { id: 10, nombre: 'Té / Mate Cocido', cantidad: 1, categoria: 'Almacén' },
      { id: 11, nombre: 'Lentejas', cantidad: 1, categoria: 'Almacén' },
      { id: 12, nombre: 'Atún', cantidad: 1, categoria: 'Almacén' },
      { id: 13, nombre: 'Mayonesa', cantidad: 1, categoria: 'Almacén' },
      { id: 14, nombre: 'Mermelada', cantidad: 1, categoria: 'Almacén' },
      { id: 15, nombre: 'Galletitas', cantidad: 1, categoria: 'Almacén' },
      { id: 16, nombre: 'Leche', cantidad: 1, categoria: 'Frescos' },
      { id: 17, nombre: 'Huevos', cantidad: 1, categoria: 'Frescos' },
      { id: 18, nombre: 'Queso Cremoso', cantidad: 1, categoria: 'Frescos' },
      { id: 19, nombre: 'Manteca', cantidad: 1, categoria: 'Frescos' },
      { id: 20, nombre: 'Yogur', cantidad: 1, categoria: 'Frescos' },
      { id: 21, nombre: 'Jamón Cocido', cantidad: 1, categoria: 'Frescos' },
      { id: 22, nombre: 'Queso en Fetas', cantidad: 1, categoria: 'Frescos' },
      { id: 23, nombre: 'Tapa de Tarta', cantidad: 1, categoria: 'Frescos' },
      { id: 24, nombre: 'Levadura', cantidad: 1, categoria: 'Frescos' },
      { id: 25, nombre: 'Crema de Leche', cantidad: 1, categoria: 'Frescos' },
      { id: 26, nombre: 'Pollo', cantidad: 1, categoria: 'Carnicería' },
      { id: 27, nombre: 'Carne Picada', cantidad: 1, categoria: 'Carnicería' },
      { id: 28, nombre: 'Milanesas', cantidad: 1, categoria: 'Carnicería' },
      { id: 29, nombre: 'Bifes de Carne', cantidad: 1, categoria: 'Carnicería' },
      { id: 30, nombre: 'Chorizo', cantidad: 1, categoria: 'Carnicería' },
      { id: 31, nombre: 'Papa', cantidad: 1, categoria: 'Verdulería' },
      { id: 32, nombre: 'Cebolla', cantidad: 1, categoria: 'Verdulería' },
      { id: 33, nombre: 'Tomate', cantidad: 1, categoria: 'Verdulería' },
      { id: 34, nombre: 'Lechuga', cantidad: 1, categoria: 'Verdulería' },
      { id: 35, nombre: 'Zanahoria', cantidad: 1, categoria: 'Verdulería' },
      { id: 36, nombre: 'Zapallo', cantidad: 1, categoria: 'Verdulería' },
      { id: 37, nombre: 'Manzana', cantidad: 1, categoria: 'Verdulería' },
      { id: 38, nombre: 'Banana', cantidad: 1, categoria: 'Verdulería' },
      { id: 39, nombre: 'Detergente', cantidad: 1, categoria: 'Limpieza' },
      { id: 40, nombre: 'Lavandina', cantidad: 1, categoria: 'Limpieza' },
      { id: 41, nombre: 'Jabón en Polvo', cantidad: 1, categoria: 'Limpieza' },
      { id: 42, nombre: 'Suavizante', cantidad: 1, categoria: 'Limpieza' },
      { id: 43, nombre: 'Desinfectante Pisos', cantidad: 1, categoria: 'Limpieza' },
      { id: 44, nombre: 'Bolsas Residuos', cantidad: 1, categoria: 'Limpieza' },
      { id: 45, nombre: 'Esponja', cantidad: 1, categoria: 'Limpieza' },
      { id: 46, nombre: 'Papel Higiénico', cantidad: 1, categoria: 'Higiene' },
      { id: 47, nombre: 'Rollos Cocina', cantidad: 1, categoria: 'Higiene' },
      { id: 48, nombre: 'Shampoo', cantidad: 1, categoria: 'Higiene' },
      { id: 49, nombre: 'Dentífrico', cantidad: 1, categoria: 'Higiene' },
      { id: 50, nombre: 'Jabón Tocador', cantidad: 1, categoria: 'Higiene' }
    ];
    setItems(megaLista);
  };

  const agregarProductoManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoNombre.trim()) return;
    const nuevoItem: Producto = { id: Date.now(), nombre: nuevoNombre, cantidad: 1, categoria: nuevaCategoria };
    setItems([nuevoItem, ...items]);
    setNuevoNombre('');
  };

  const manejarFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFotoTicket(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const registrarGastoYReponer = () => {
    if (!nuevoMonto || !nuevoLugar) return alert("Completá Lugar y Monto");
    const nuevoGasto: Gasto = { 
      id: Date.now(), 
      monto: parseFloat(nuevoMonto), 
      lugar: nuevoLugar, 
      fecha: new Date().toLocaleDateString('es-AR'), 
      foto: fotoTicket || undefined 
    };
    setGastos([nuevoGasto, ...gastos]);
    setItems(prev => prev.map(item => item.cantidad === 0 ? { ...item, cantidad: 1 } : item));
    setNuevoMonto(''); setNuevoLugar(''); setFotoTicket(null);
  };

  const totalMes = gastos.reduce((acc, g) => acc + g.monto, 0);

  return (
    <div className={`min-h-screen p-4 md:p-8 transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div className={`p-6 rounded-3xl shadow-xl flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-indigo-600 text-white'}`}>
          <h1 className="text-xl font-black">🏠 MI MEGA ALACENA</h1>
          <div className="flex gap-2">
            <button onClick={() => alert("👨‍🍳 Chef: ¡Hola! Te ayudaré con recetas pronto.")} className="w-10 h-10 bg-yellow-400 rounded-full text-xl flex items-center justify-center">🧑‍🍳</button>
            <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-10 bg-white/20 rounded-full text-xl flex items-center justify-center">{darkMode ? '☀️' : '🌙'}</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-2 rounded-3xl shadow-xl p-6 border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <button onClick={cargarMegaLista50} className="w-full py-4 bg-indigo-50 text-indigo-700 rounded-2xl font-black text-sm border-2 border-indigo-100 mb-6">🚀 CARGAR LOS 50 PRODUCTOS</button>

            <form onSubmit={agregarProductoManual} className="flex flex-col md:flex-row gap-2 mb-6">
              <input type="text" placeholder="Producto nuevo..." value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)}
                className={`flex-1 p-3 rounded-xl border ${darkMode ? 'bg-gray-700' : 'bg-white text-black'}`} />
              <select value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)} className={`p-3 rounded-xl border ${darkMode ? 'bg-gray-700' : 'bg-white text-black'}`}>
                <option value="Almacén">Almacén</option><option value="Frescos">Frescos</option><option value="Limpieza">Limpieza</option><option value="Carnicería">Carnicería</option><option value="Verdulería">Verdulería</option>
              </select>
              <button type="submit" className="bg-indigo-600 text-white px-6 rounded-xl font-bold">AGREGAR</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[400px] overflow-y-auto pr-2">
              {items.filter(i => i.cantidad > 0).map(item => (
                <div key={item.id} className={`flex justify-between items-center p-4 rounded-2xl border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white shadow-sm'}`}>
                  <div><p className="font-bold text-sm">{item.nombre}</p><p className="text-[10px] text-indigo-500 font-bold uppercase">{item.categoria}</p></div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setItems(items.map(i => i.id === item.id ? {...i, cantidad: Math.max(0, i.cantidad - 1)} : i))} className="w-8 h-8 bg-red-100 text-red-600 rounded-lg font-bold">-</button>
                    <span className="font-bold w-4 text-center">{item.cantidad}</span>
                    <button onClick={() => setItems(items.map(i => i.id === item.id ? {...i, cantidad: i.cantidad + 1} : i))} className="w-8 h-8 bg-green-100 text-green-600 rounded-lg font-bold">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className={`rounded-3xl shadow-xl overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
               <div className="p-4 bg-emerald-600 text-white text-center">
                  <p className="text-[10px] font-bold uppercase opacity-80">Gasto del Mes</p>
                  <p className="text-3xl font-black">$ {totalMes.toLocaleString()}</p>
               </div>
               <div className="p-5 space-y-4">
                  <label className={`block border-2 border-dashed rounded-2xl p-4 cursor-pointer text-center ${darkMode ? 'bg-gray-700' : 'bg-emerald-50'}`}>
                    {fotoTicket ? <img src={fotoTicket} className="h-20 mx-auto rounded-lg" alt="Ticket" /> : <span className="text-[10px] font-black text-emerald-700 uppercase">📸 Cargar Ticket</span>}
                    <input type="file" accept="image/*" capture="environment" onChange={manejarFoto} className="hidden" />
                  </label>
                  <input type="text" placeholder="Lugar..." value={nuevoLugar} onChange={(e) => setNuevoLugar(e.target.value)} className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700' : 'bg-white text-black'}`} />
                  <input type="number" placeholder="Monto $..." value={nuevoMonto} onChange={(e) => setNuevoMonto(e.target.value)} className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700' : 'bg-white text-black'}`} />
                  <button onClick={registrarGastoYReponer} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-xs">✅ GUARDAR Y REPONER</button>
               </div>
            </div>
            
            <div className={`rounded-3xl shadow-xl p-4 border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-orange-50 border-orange-100'}`}>
               <h3 className="text-center font-black text-orange-600 text-[10px] uppercase mb-3">🛒 Faltantes</h3>
               <div className="max-h-[100px] overflow-y-auto space-y-1">
                  {items.filter(i => i.cantidad === 0).map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-white/50 p-2 rounded-lg text-xs font-bold">
                       <span>{item.nombre}</span><span className="text-orange-500">FALTA</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className={`rounded-3xl shadow-xl overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="p-4 bg-gray-800 text-white font-black text-[10px] uppercase text-center">📋 Historial de Compras</div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="text-[10px] text-gray-400 border-b"><th>Fecha</th><th>Lugar</th><th>Monto</th><th>Ticket</th></tr></thead>
              <tbody>
                {gastos.map(g => (
                  <tr key={g.id} className="border-b last:border-0"><td className="py-3 opacity-60">{g.fecha}</td><td className="font-bold">{g.lugar}</td><td className="font-black text-emerald-600">$ {g.monto.toLocaleString()}</td><td>{g.foto ? '🖼️' : '-'}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}