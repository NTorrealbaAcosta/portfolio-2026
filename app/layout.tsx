import "./globals.css";
// 1. IMPORTAR: Traes la herramienta de la carpeta de componentes
import NavBar from "@/components/NavBar"; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {/* 2. INSTALAR: La pones justo aquí, ANTES de los children */}
        <NavBar /> 
        
        {/* Los 'children' son el resto de tus páginas (Home, Proyectos, etc.) */}
        {children} 
      </body>
    </html>
  );
}