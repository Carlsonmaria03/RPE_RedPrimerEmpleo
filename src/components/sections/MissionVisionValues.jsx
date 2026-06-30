import { Target, Globe, HeartHandshake } from "lucide-react";

function MissionVisionValues() {
  return (
    <section id="nosotros" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            Nuestra esencia
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Creemos que el talento no depende
            <br />
            de la experiencia.
          </h2>

          <h3 className="text-4xl font-bold text-blue-700 mt-4">
            Depende de las oportunidades.
          </h3>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Red Primer Empleo acompaña a jóvenes y empresas construyendo
            oportunidades reales de inserción laboral mediante capacitación,
            orientación y seguimiento personalizado.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* MISIÓN */}

          <div className="bg-blue-50 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

            <Target className="text-blue-700 mb-6" size={42} />

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Misión
            </h3>

            <p className="text-gray-600 leading-8">
              Impulsar el potencial de los jóvenes mediante el desarrollo
              de habilidades, el acompañamiento y la generación de
              oportunidades para su inserción y crecimiento en el mundo laboral.
            </p>

          </div>

          {/* VISIÓN */}

          <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <Globe className="text-blue-700 mb-6" size={42} />

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Visión
            </h3>

            <p className="text-gray-600 leading-8">
              Contribuir a una sociedad donde el acceso a empleos de calidad
              y el desarrollo profesional juvenil sean la norma y no la excepción.
            </p>

          </div>

          {/* VALORES */}

          <div className="bg-blue-50 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

            <HeartHandshake className="text-blue-700 mb-6" size={42} />

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Valores
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-white px-4 py-2 rounded-full shadow text-blue-700 font-medium">
                Inclusión
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-blue-700 font-medium">
                Compromiso
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-blue-700 font-medium">
                Desarrollo
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-blue-700 font-medium">
                Impacto Real
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow text-blue-700 font-medium">
                Oportunidad
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVisionValues;