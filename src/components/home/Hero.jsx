import heroImage from "../../assets/images/Hero.png";
function Hero() {
  return (
    <section
    id="inicio" 
    className="bg-gradient-to-br from-white via-blue-50 to-cyan-100">
      <div className="max-w-7xl mx-auto px-6 py-20 flex items-center">

        {/* Columna izquierda */}
        <div className="w-3/5 pr-10">

          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
            Transformando
            <br />
            <span className="text-blue-700"> 
            potencial</span> en
            <br />
            oportunidades
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
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
        <div className="w-2/5 flex justify-center">

         <img 
         src={heroImage}
         alt="Jóvenes iniciando su carrera profesional" 
         className="w-full max-w-lg"
         />

        </div>

      </div>
    </section>
  );
}

export default Hero;