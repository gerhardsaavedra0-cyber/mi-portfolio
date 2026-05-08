import ProjectCard from "./ProjectCard.jsx"


const projects = [
  {
    title: "Task Manager App (En proceso)",
    description: "Aplicación fullstack para crear, editar y eliminar tareas.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-commerce Básico (En proceso)",
    description: "Tienda online simple con productos, carrito y diseño responsive.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Blog FullStack (En proceso)",
    description: "Blog con publicaciones, rutas dinámicas y estructura backend.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Express", "PostgreSQL"],
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects