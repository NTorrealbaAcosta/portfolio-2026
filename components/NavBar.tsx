// src/components/NavBar.tsx
import Link from "next/link"; // El "Portal": sirve para viajar entre páginas sin recargar.

export default function NavBar() {
  return (
    // "fixed": Clavamos la barra a la pared superior, no se mueve al hacer scroll.
    // "backdrop-blur": Efecto de vidrio esmerilado, muy elegante.
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md px-10 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* EL LOGO: Tu firma de marca */}
        <Link href="/" className="group">
          <span className="text-xl font-black text-white tracking-tighter">
            NELSON <span className="text-amber-600 group-hover:text-white transition-colors">.</span>
          </span>
        </Link>

        {/* LOS LINKS: El mapa de la galería */}
        <div className="flex gap-8">
          <NavLink href="#skills" label="skills" />
          <NavLink href="#proyectos" label="proyectos" />
          <NavLink href="#contacto" label="Contacto" />
        </div>

      </div>
    </nav>
  );
}

// Un mini-componente interno para no repetir código (DRY: Don't Repeat Yourself)
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-amber-600 transition-colors"
    >
      {label}
    </Link>
  );
}