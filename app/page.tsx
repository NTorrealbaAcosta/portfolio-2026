import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-400 font-sans selection:bg-amber-500/30 pt-24">
      
      {/* 1. SECCIÓN HERO: El Impacto Visual */}
      <section id="inicio" className="h-[80vh] flex flex-col justify-center px-10 md:px-32">
        <div className="space-y-2">
          <span className="text-amber-600 font-mono text-xs tracking-[0.5em] uppercase">
            Software developer // Creative Mind
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
            NELSON <br /> <span className="text-zinc-900 stroke-text">DEV.</span>
          </h1>
        </div>
        <p className="mt-8 max-w-lg text-lg font-light leading-relaxed">
          Especializado en transformar lógica compleja en experiencias digitales elegantes. 
          Dominando el <span className="text-white italic">Chiaroscuro</span> del código.
        </p>
        <div className="mt-10">
  <a 
    href="#contacto" 
    className="px-8 py-4 border border-amber-600 text-amber-600 text-xs font-mono uppercase tracking-[0.3em] hover:bg-amber-600 hover:text-black transition-all duration-300"
  >
    Enviar Mensaje // Contact
  </a>
</div>
      </section>

      {/* 2. SECCIÓN SKILLS: Tu Panel Técnico */}
      <section id="skills" className="px-10 md:px-32 py-24 bg-[#080808] border-y border-white/5">
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.5em] mb-12 text-center">
          Technical_Stack // 2026
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillBadge name="TypeScript" level="Advanced Logic" />
          <SkillBadge name="Next.js" level="App Architecture" />
          <SkillBadge name="Tailwind CSS" level="Design Systems" />
          <SkillBadge name="Node.js" level="Backend Dev" />
        </div>
      </section>

      {/* 3. SECCIÓN SKILLS: Tu Vitrina */}
      <section id="proyectos" className="p-10 md:p-32 space-y-12">
        <h2 className="text-xs font-mono text-zinc-700 uppercase tracking-[0.5em] mb-12">
          Selected_Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard 
            title="Resource Optimizer"
            description="Algoritmo de gestión de agenda con lógica de fatiga y priorización VIP. Resolviendo problemas de logística con TypeScript."
            tags={["TS", "Logic"]}
          />
          <ProjectCard 
            title="Future Project"
            description="Espacio reservado para tu próximo gran desarrollo de IA agéntica."
            tags={["Python", "IA"]}
          />
        </div>
      </section>

      <footer className="p-10 text-center border-t border-white/5 text-[10px] font-mono tracking-[0.5em] text-zinc-800 uppercase">
        © 2026 // Chiaroscuro Tech
      </footer>
    </main>
  );
}