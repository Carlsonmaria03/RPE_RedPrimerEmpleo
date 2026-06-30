import logo from "../../assets/logo/logo-rpe.png";
import { Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Red Primer Empleo"
              className="h-16 mb-4"
            />

            <p className="text-gray-400 leading-7">
              Red Primer Empleo conecta jóvenes con empresas mediante
              capacitación, orientación y acompañamiento para facilitar
              la inserción laboral.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Navegación
            </h3>

            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
              <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
              <li><a href="#organizacion" className="hover:text-white">Equipo</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Contacto
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-2">
                <MapPin size={18}/>
                Buenos Aires, Argentina
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18}/>
                Proyecto Académico
              </div>

            </div>
          </div>

          {/* Redes */}
        <div>
            <h3 className="text-white font-bold mb-4">
              Seguinos
            </h3>

        <div className="flex gap-6 text-white font-medium">
            <a href="#" className="hover:text-blue-400 transition">
                Instagram
            </a>
            <a href="#" className="hover:text-blue-400 transition">
                LinkedIn
            </a>
        </div>

            <p className="mt-6 text-gray-400">
              IFTS Nº20
            </p>

            <p className="text-gray-500 text-sm">
              Tecnicatura Superior en Recursos Humanos
            </p>

          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <div className="text-center text-sm text-gray-500">
          © 2026 Red Primer Empleo · Proyecto Académico
          <br />
          Integrantes: Yamila Aquino · Brian Cruz · Yasmín Jarmonicolas · Carolina Mansilla · María Cecilia Carlson
        </div>

      </div>
    </footer>
  );
}

export default Footer;