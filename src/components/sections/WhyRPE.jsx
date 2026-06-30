import { Lightbulb, Handshake, TrendingUp } from "lucide-react";

function WhyRPE() {
  return (
    <section id="por-que-rpe" className="py-24 bg-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-200 font-semibold">
            ¿Por qué nace Red Primer Empleo?
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Conectamos talento con oportunidades
          </h2>

          <p className="mt-8 text-xl text-blue-100 max-w-4xl mx-auto leading-9">
            En Argentina, miles de jóvenes encuentran dificultades para acceder a su
            primer empleo debido a la falta de experiencia laboral. Al mismo tiempo,
            muchas organizaciones necesitan incorporar personas con potencial,
            compromiso y ganas de desarrollarse.
          </p>

          <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto leading-9">
            Red Primer Empleo nace para reducir esa brecha, articulando capacitación,
            orientación y vinculación entre jóvenes, empresas e instituciones,
            generando oportunidades que beneficien a toda la comunidad.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">

            <Lightbulb size={46} className="mb-6"/>

            <h3 className="text-2xl font-bold mb-4">
              Detectamos una necesidad
            </h3>

            <p className="text-blue-100 leading-8">
              Muchos jóvenes cuentan con talento y motivación,
              pero no logran acceder a oportunidades laborales
              por falta de experiencia previa.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">

            <Handshake size={46} className="mb-6"/>

            <h3 className="text-2xl font-bold mb-4">
              Creamos conexiones
            </h3>

            <p className="text-blue-100 leading-8">
              Vinculamos jóvenes, empresas e instituciones
              educativas para facilitar procesos de inserción
              laboral sostenibles.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">

            <TrendingUp size={46} className="mb-6"/>

            <h3 className="text-2xl font-bold mb-4">
              Generamos desarrollo
            </h3>

            <p className="text-blue-100 leading-8">
              Apostamos al crecimiento profesional de los jóvenes
              y al fortalecimiento del capital humano de las organizaciones.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyRPE;