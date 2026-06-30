import {
  Crown,
  Megaphone,
  Users,
  GraduationCap,
  Briefcase,
  Wallet,
} from "lucide-react";

function Organization() {
  return (
    <section id="organizacion" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            Nuestro equipo
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Estructura Organizacional
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo multidisciplinario comprometido con acompañar a los jóvenes
            en su desarrollo profesional y conectar talento con oportunidades.
          </p>
        </div>

        {/* Dirección */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-700 text-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
            <Crown size={40} className="mx-auto mb-3" />

            <h3 className="text-2xl font-bold">
              Dirección General
            </h3>

            <p className="mt-2 text-base">
              Yamila Aquino
            </p>
          </div>
        </div>

        {/* Áreas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[220px]">
            <Megaphone className="text-blue-700 mb-4" size={34} />

            <h3 className="text-xl font-bold leading-7">
              Marketing y Comunicación
            </h3>

            <p className="mt-2 text-sm font-semibold text-blue-700">
              Yamila Aquino
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-6">
              Community Manager
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[220px]">
            <Users className="text-blue-700 mb-4" size={34} />

            <h3 className="text-xl font-bold leading-7">
              Reclutamiento y Selección
            </h3>

            <p className="mt-2 text-sm font-semibold text-blue-700">
              Brian Cruz
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-6">
              Analista de Reclutamiento y Selección
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[220px]">
            <GraduationCap className="text-blue-700 mb-4" size={34} />

            <h3 className="text-xl font-bold leading-7">
              Capacitación y Desarrollo
            </h3>

            <p className="mt-2 text-sm font-semibold text-blue-700">
              Yasmín Jarmonicolas
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-6">
              Orientador/a
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[220px]">
            <Briefcase className="text-blue-700 mb-4" size={34} />

            <h3 className="text-xl font-bold leading-7">
              Seguimiento e Inserción Laboral
            </h3>

            <p className="mt-2 text-sm font-semibold text-blue-700">
              Carolina Mansilla
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-6">
              Analista de seguimiento <br />
              Responsable de Red de Egresados
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[220px]">
            <Wallet className="text-blue-700 mb-4" size={34} />

            <h3 className="text-xl font-bold leading-7">
              Administración y Finanzas
            </h3>

            <p className="mt-2 text-sm font-semibold text-blue-700">
              María Cecilia Carlson
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-6">
              Administrativo Contable
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Organization;