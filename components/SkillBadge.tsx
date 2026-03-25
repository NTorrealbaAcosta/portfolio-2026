// src/components/SkillBadge.tsx

interface SkillProps {
  name: string;
  level: string; // Ejemplo: "Advanced", "Intermediate"
}

export default function SkillBadge({ name, level }: SkillProps) {
  return (
    <div className="flex flex-col p-4 border border-white/5 bg-[#080808] hover:border-amber-600/30 transition-all group">
      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1 group-hover:text-amber-600/50 transition-colors">
        {level}
      </span>
      <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-tighter">
        {name}
      </h4>
      <div className="mt-4 h-[2px] w-full bg-zinc-900 overflow-hidden">
        <div className="h-full w-1/3 bg-amber-600/20 group-hover:w-full group-hover:bg-amber-600 transition-all duration-700 ease-in-out"></div>
      </div>
    </div>
  );
}