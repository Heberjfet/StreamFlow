import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Header */}
      <header className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 flex items-center justify-between pointer-events-auto">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
          StreamFlow
        </div>
        <Link 
          href="/login"
          className="btn-secondary px-5 py-2 text-sm text-text-primary hover:text-white transition-colors glass-surface rounded-full"
        >
          Iniciar sesión
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white drop-shadow-lg">
          Historias Ilimitadas. <br/>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            A un clic de distancia.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl font-light">
          Disfruta de la mejor calidad. Sin límites.
          Series, películas y antologías de IA te esperan.
        </p>

        <Link 
          href="/login" 
          className="btn-primary text-white font-semibold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all flex items-center gap-2 group"
        >
          Comienza ahora
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </section>
    </main>
  );
}
