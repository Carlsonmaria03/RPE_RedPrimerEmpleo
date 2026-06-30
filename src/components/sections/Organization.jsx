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
            Nuestro Equipo
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo multidisciplinario comprometido con acompañar a los jóvenes
            en su desarrollo profesional y conectar talento con oportunidades.
          </p>

        </div>

        {/* Dirección */}

        <div className="flex justify-center mb-16">

          <div className="bg-blue-700 text-white rounded-3xl shadow-xl p-8 w-full max-w-md text-center">

            <Crown size={50} className="mx-auto mb-5" />

            <h3 className="text-3xl font-bold">
              Dirección General
            </h3>

            <p className="mt-3 text-lg">
              Yamila Aquino
            </p>

          </div>

        </div>

        {/* Áreas */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <Megaphone className="text-blue-700 mb-5" size={42}/>
            <h3 className="text-2xl font-bold">Marketing y Comunicación</h3>
            <p className="mt-2 font-semibold text-blue-700">Yamila Aquino</p>
            <p className="mt-5 text-gray-600">
              Community Manager
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <Users className="text-blue-700 mb-5" size={42}/>
            <h3 className="text-2xl font-bold">Reclutamiento y Selección</h3>
            <p className="mt-2 font-semibold text-blue-700">Brian Cruz</p>
            <p className="mt-5 text-gray-600">
              Analista de reclutamiento y selección
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <GraduationCap className="text-blue-700 mb-5" size={42}/>
            <h3 className="text-2xl font-bold">Capacitación y Desarrollo</h3>
            <p className="mt-2 font-semibold text-blue-700">Yasmín Jarmonicolas</p>
            <p className="mt-5 text-gray-600">
              Orientador/a
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
            <Briefcase className="text-blue-700 mb-5" size={42}/>
            <h3 className="text-2xl font-bold">Seguimiento e Inserción Laboral</h3>
            <p className="mt-2 font-semibold text-blue-700">Carolina Mansilla</p>
            <p className="mt-5 text-gray-600">
              Analista de seguimiento <br />
              Responsable de red de egresados
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <Wallet className="text-blue-700 mb-5" size={42}/>
            <h3 className="text-2xl font-bold">Administración y Finanzas</h3>
            <p className="mt-2 font-semibold text-blue-700">María Cecilia Carlson</p>
            <p className="mt-5 text-gray-600">
              Administrativo/a Contable
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Organization;