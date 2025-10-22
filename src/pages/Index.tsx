import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import lahPhoto from "@/assets/lah-photo.png";

const Index = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const handleYes = () => {
    setCelebrate(true);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <AnimatedBackground />
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        {!celebrate ? (
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Photo with hover effects */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setShowQuestion(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50 group-hover:opacity-100" />
              <img
                src={lahPhoto}
                alt="Lah"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-primary/50 shadow-2xl group-hover:scale-105 group-hover:border-primary transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(244,114,182,0.6)]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Initial message */}
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
                Hey Lah, I made this little space just for you…
              </p>
              <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
                Because since we met, you're all I think about 💫
              </p>
            </div>

            {/* Question appears on hover */}
            <div 
              className={`space-y-6 transition-all duration-700 ${
                showQuestion 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10 pointer-events-none"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary animate-glow">
                Will you be my girlfriend?
              </h1>

              {/* Buttons */}
              <div className="flex gap-6 justify-center mt-8">
                <Button
                  onClick={handleYes}
                  className="px-12 py-6 text-xl font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_0_30px_rgba(244,114,182,0.5)] hover:shadow-[0_0_50px_rgba(244,114,182,0.8)] transition-all duration-300 hover:scale-110"
                >
                  YES! 💕
                </Button>
                <Button
                  disabled
                  className="px-12 py-6 text-xl font-semibold bg-muted/20 text-muted-foreground/40 rounded-full cursor-not-allowed opacity-50"
                >
                  No
                </Button>
              </div>
            </div>

            {/* Audio player */}
            <div className="mt-8 w-full max-w-3xl">
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 border border-primary/30 shadow-[0_0_50px_rgba(244,114,182,0.2)]">
                <p className="text-lg text-foreground/90 mb-4 text-center font-light">A song for you, Lah 🎵</p>
                <div className="bg-black rounded-2xl overflow-hidden">
                  <iframe
                    className="w-full"
                    height="200"
                    src="https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1&mute=0&controls=1&modestbranding=1&loop=1&playlist=2Vv-BfVoq4g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Celebration screen
          <div className="flex flex-col items-center space-y-8 text-center animate-fade-in-up">
            <div className="text-8xl animate-float">
              🎉
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary animate-glow">
              You made me the happiest, Lah! 💕
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90">
              I can't wait to create more memories with you ✨
            </p>
            <div className="flex gap-4 text-6xl animate-float-slow">
              <span>❤️</span>
              <span>💫</span>
              <span>🌟</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
