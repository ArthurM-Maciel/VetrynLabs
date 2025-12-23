export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLS45LTItMi0ySDI2Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      {/* 3D Geometric Shapes - Minimalist Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Floating Cube 1 */}
        <div className="absolute top-20 left-10 md:left-20 w-16 h-16 md:w-24 md:h-24 opacity-20" style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}>
          <div className="relative w-full h-full" style={{
            transformStyle: "preserve-3d",
            animation: "float3d 20s ease-in-out infinite",
            willChange: "transform",
          }}>
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm" style={{
              transform: "rotateY(45deg) rotateX(45deg) translateZ(0px)",
            }}></div>
          </div>
        </div>

        {/* Floating Cube 2 */}
        <div className="absolute bottom-32 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 opacity-15" style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}>
          <div className="relative w-full h-full" style={{
            transformStyle: "preserve-3d",
            animation: "float3d 25s ease-in-out infinite reverse",
            willChange: "transform",
          }}>
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm" style={{
              transform: "rotateY(-45deg) rotateX(-45deg) translateZ(0px)",
            }}></div>
          </div>
        </div>

        {/* Floating Cube 3 - Center Right */}
        <div className="absolute top-1/2 right-10 md:right-32 w-12 h-12 md:w-20 md:h-20 opacity-10" style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}>
          <div className="relative w-full h-full" style={{
            transformStyle: "preserve-3d",
            animation: "float3d 30s ease-in-out infinite",
            willChange: "transform",
          }}>
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm" style={{
              transform: "rotateY(60deg) rotateX(30deg) translateZ(0px)",
            }}></div>
          </div>
        </div>

        {/* Floating Cube 4 - Center Left */}
        <div className="absolute top-1/2 left-10 md:left-32 w-14 h-14 md:w-22 md:h-22 opacity-12" style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}>
          <div className="relative w-full h-full" style={{
            transformStyle: "preserve-3d",
            animation: "float3d 18s ease-in-out infinite reverse",
            willChange: "transform",
          }}>
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm" style={{
              transform: "rotateY(-60deg) rotateX(-30deg) translateZ(0px)",
            }}></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8 pb-12 w-full">
        <div className="flex flex-col items-center justify-center min-h-[95vh] relative w-full">
          {/* Content - Centered */}
          <div className="text-center max-w-5xl mx-auto relative z-30 w-full">
            {/* Boas Vindas */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                Vetryn Labs
              </h1>
              <div className="h-1 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-primary-content via-primary-content to-transparent rounded-full mx-auto"></div>
            </div>

            {/* Subtítulo Principal */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-content mb-6 sm:mb-8 font-light leading-relaxed px-2 sm:px-4">
              Transformando ideias em soluções digitais de alto impacto
            </p>

            {/* Descrição */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-4">
              Somos uma software house especializada em criar produtos digitais que impulsionam o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
