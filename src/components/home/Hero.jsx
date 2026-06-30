import heroImage from "../../assets/images/Hero.png";
function Hero() {
  return (
    <section
    id="inicio" 
    className="bg-gradient-to-br from-white via-blue-50 to-cyan-100">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center">

        {/* Columna izquierda */}
        <div className="w-full lg:w-3/5 lg:pr-10 text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Transformando
            <br />
            <span className="text-blue-700"> 
            potencial</span> en
            <br />
            oportunidades
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
            Conectamos jóvenes con empresas mediante capacitación,
            orientación y acompañamiento para construir trayectorias
            laborales exitosas.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition">
              Comenzar ahora
            </button>

            <button className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition">
              Soy Empresa
            </button>

          </div>

        </div>

        {/* Columna derecha */}
        <div className="w-full lg:w-2/5 flex justify-center mb-10 lg:mb-0">

         <img 
         src={heroImage}
         alt="Jóvenes iniciando su carrera profesional" 
         className="w-80 sm:w-96 lg:w-full max-w-lg"
         />

        </div>

      </div>
    </section>
  );
}

export default Hero;