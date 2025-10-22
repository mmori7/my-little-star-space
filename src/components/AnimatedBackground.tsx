import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "heart" | "star";
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5,
        type: Math.random() > 0.5 ? "heart" : "star",
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(250,50%,8%)] via-[hsl(280,60%,15%)] to-[hsl(340,60%,20%)]" />
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-slow"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.type === "heart" ? (
            <div
              className="text-primary/20 animate-twinkle"
              style={{
                fontSize: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
              }}
            >
              ❤️
            </div>
          ) : (
            <div
              className="text-secondary/30 animate-twinkle"
              style={{
                fontSize: `${particle.size}px`,
                animationDelay: `${particle.delay + 1}s`,
              }}
            >
              ✨
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
