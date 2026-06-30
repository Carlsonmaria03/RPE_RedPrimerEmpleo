import { Users, Building2, CheckCircle } from "lucide-react";

function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            ¿Por qué elegir RPE?
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Conectamos oportunidades
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Generamos valor tanto para quienes buscan su primer empleo
            como para las empresas que necesitan incorporar talento.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Jóvenes */}

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">

            <Users className="text-blue-700 mb-6" size={48}/>

            <h3 className="text-3xl font-bold mb-8">
              Para Jóvenes
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Capacitación gratuita
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Mentorías personalizadas
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Bolsa de empleo
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Seguimiento profesional
              </div>

            </div>

          </div>

          {/* Empresas */}

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <Building2 className="text-blue-700 mb-6" size={48}/>

            <h3 className="text-3xl font-bold mb-8">
              Para Empresas
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Talento previamente evaluado
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Reducción de rotación
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Optimización del reclutamiento
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600"/>
                Acompañamiento continuo
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Benefits;