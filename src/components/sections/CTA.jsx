function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          ¿Listo para dar el primer paso?
        </h2>

        <p className="mt-6 text-xl text-blue-100 leading-8">
          Sumate a Red Primer Empleo y ayudanos a construir un puente entre
          el talento joven y las empresas que apuestan por el futuro.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition">
            Soy un Joven
          </button>

          <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
            Soy una Empresa
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;