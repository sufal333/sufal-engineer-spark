export function DecorativeShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large yellow blob - top right */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 shape-blob animate-float"
        style={{ animationDelay: "0s" }}
      />
      
      {/* Purple circle - left */}
      <div 
        className="absolute top-1/4 -left-16 w-32 h-32 bg-purple/30 rounded-full animate-float-reverse"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Coral shape - bottom right */}
      <div 
        className="absolute bottom-20 right-1/4 w-24 h-24 bg-coral/25 rounded-2xl rotate-45 animate-pulse-scale"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Mint blob - center left */}
      <div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-mint/20 shape-blob animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      
      {/* Blue circle - bottom */}
      <div 
        className="absolute bottom-1/4 left-10 w-20 h-20 bg-blue/20 rounded-full animate-float-reverse"
        style={{ animationDelay: "0.5s" }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
