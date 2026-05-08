function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur border-b border-white/10 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-white font-bold text-lg sm:text-xl">
          Gerhard<span className="text-cyan-400">Dev</span>
        </a>

        <div className="flex gap-2 sm:gap-4 text-[10px] sm:text-sm items-center">
            <a href="#" className="text-white hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="text-white hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="text-white hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="text-white hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar