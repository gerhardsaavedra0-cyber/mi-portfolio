function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>

        <p className="text-slate-300 text-center mb-12">
          Estoy abierto a oportunidades junior, prácticas y colaboraciones.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-6">Información</h3>

            <p className="text-slate-300 mb-3">
              Email: <span className="text-cyan-400">gerhard.saavedra0@gmail.com</span>
            </p>

            <p className="text-slate-300 mb-3">
                GitHub:
                <a
                    href="https://github.com/gerhardsaavedra0-cyber"
                    target="_blank"
                    className="text-cyan-400 ml-2 hover:underline"
                >
                    Ver perfil
                </a>
            </p>

            <p className="text-slate-300">
                LinkedIn:
                <a
                    href="https://www.linkedin.com/in/gerhard-ediver-saavedra-pretell-30aa60408"
                    target="_blank"
                    className="text-cyan-400 ml-2 hover:underline"
                >
                    Ver perfil
                </a>
            </p>
          </div>

          <form className="bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Tu email"
              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="5"
              placeholder="Tu mensaje"
              className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-cyan-300 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact