import { GraduationCap, FileCheck, Briefcase } from "lucide-react";

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            ¿Cómo funciona?
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Tu primer empleo comienza aquí
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñamos un proceso simple para que puedas desarrollar tus habilidades,
            encontrar oportunidades y crecer profesionalmente.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Paso 1 */}

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto text-2xl font-bold">
              1
            </div>

            <GraduationCap
              className="mx-auto mt-6 text-blue-700"
              size={52}
            />

            <h3 className="text-2xl font-bold mt-6">
              Capacitate
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              Participá en talleres y desarrollá las competencias que buscan las empresas.
            </p>

          </div>

          {/* Paso 2 */}

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto text-2xl font-bold">
              2
            </div>

            <FileCheck
              className="mx-auto mt-6 text-blue-700"
              size={52}
            />

            <h3 className="text-2xl font-bold mt-6">
              Postulate
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              Completá tu perfil y participá en búsquedas laborales adaptadas a tu potencial.
            </p>

          </div>

          {/* Paso 3 */}

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto text-2xl font-bold">
              3
            </div>

            <Briefcase
              className="mx-auto mt-6 text-blue-700"
              size={52}
            />

            <h3 className="text-2xl font-bold mt-6">
              Crecé
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              Ingresá a tu primer empleo con acompañamiento durante los primeros meses.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;