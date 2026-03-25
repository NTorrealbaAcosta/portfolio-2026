// src/components/ProjectCard.tsx

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectProps) {
  return (
    <div className="group p-8 border border-white/5 bg-[#0a0a0a] rounded-sm hover:border-amber-600/50 transition-all duration-500">
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono text-amber-600/70 border border-amber-600/20 px-2 py-1 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-amber-600 transition-colors uppercase tracking-tighter">
        {title}
      </h3>
      <p className="mt-4 text-zinc-500 font-light leading-relaxed text-sm">
        {description}
      </p>
      <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-zinc-700 group-hover:text-zinc-300 transition-colors uppercase tracking-[0.2em]">
        <span>Ver Detalles</span>
        <span className="w-8 h-[1px] bg-zinc-800 group-hover:bg-amber-600 transition-all"></span>
      </div>
    </div>
  );
}