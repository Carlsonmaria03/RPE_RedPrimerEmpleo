import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo/logo-rpe.png";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      {/* Barra principal */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-1">

        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Red Primer Empleo"
            className="h-16 transition-all duration-300"
          />
        </div>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-700 cursor-pointer transition-colors">
            Inicio
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition-colors">
            Jóvenes
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition-colors">
            Empresas
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition-colors">
            Capacitaciones
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition-colors">
            Nosotros
          </li>

          <li className="hover:text-blue-700 cursor-pointer transition-colors">
            Contacto
          </li>
        </ul>

        {/* Botón escritorio */}
        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors">
          Ingresar
        </button>

        {/* Botón menú móvil */}
        <button 
        className="md:hidden text-blue-700"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
        >
            {menuAbierto ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col px-6 py-5 gap-5 text-gray-700 font-medium">

            <li>
                <a 
                href="#inicio"
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => setMenuAbierto(false)}
                >
                    Inicio
                </a>
            </li>

            <li>
                <a
                href="#beneficios"
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => setMenuAbierto(false)}
                >
                    Jóvenes
                </a>
            </li>

            <li>
                <a 
                href="#por-que-rpe"
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => setMenuAbierto(false)}
                >
                    Empresas
                </a>
            </li>

            <li>
                <a 
                href="#como-funciona"
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => setMenuAbierto(false)}
                >
                ¿Cómo funciona?
                </a>
            </li>

            <li>
                <a href="#nosotros"
                className="cursor-pointer hover:text-blue-700 transition-colors" 
                onClick={() => setMenuAbierto(false)}
                >
                     Nosotros
                </a>
            </li>

            <li>
                <a 
                href="#contacto"
                className="cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => setMenuAbierto(false)}
                >
                    Contacto
                </a>
            </li>

            <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors">
              Ingresar
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;