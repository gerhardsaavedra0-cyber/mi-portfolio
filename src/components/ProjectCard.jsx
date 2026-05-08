function ProjectCard({ project }) {
  return (
    <article className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition">
      <img
        src={project.image}
        alt={project.title}
        className="h-40 w-full object-cover rounded-xl mb-6"
      />

      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

      <p className="text-slate-300 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href="#"
          className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold"
        >
          Live Demo
        </a>

        <a
          href="#"
          className="border border-white/20 px-4 py-2 rounded-lg font-semibold"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard