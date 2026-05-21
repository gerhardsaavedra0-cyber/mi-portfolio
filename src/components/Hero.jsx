function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Gerhard Ediver Saavedra Pretell
        </h1>

        <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">
          Junior FullStack Developer
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed">
          Aprendiendo React, Node.js y desarrollo web moderno para crear
          aplicaciones funcionales, limpias y responsive.
        </p>
        <div className="flex justify-center gap-4 mt-8">
  <a
    href="https://github.com/gerhardsaavedra0-cyber"
    className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/gerhard-ediver-saavedra-pretell-30aa60408/"
    className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
  >
    LinkedIn
  </a>
    </div>
        </div>
    </section>
  )
}

export default Hero