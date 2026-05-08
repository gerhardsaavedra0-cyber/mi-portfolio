const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 text-white py-24 px-6 scroll-mt-24">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill) => (

            <div
              key={skill}
              className="bg-slate-950 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
            >

              <p className="font-semibold text-lg">
                {skill}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills