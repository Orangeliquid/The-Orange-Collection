import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = ({ endpoint, id }) => {
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsParticlesLoaded(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(() => {
    const background = endpoint === "/"
      ? {
          image: "url('/src/assets/LiquidBg.jpg')",
          size: "cover",
          repeat: "no-repeat",
          position: "center center",
        }
      : {
          color: {
            value: "#000000",
          size: "cover",
          repeat: "no-repeat",
          position: "center center",
          },
        };

    return {
      background,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "attract",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 1,
            size: 40,
          },
          push: {
            quantity: 1,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 400,
            duration: 1,
          },
          attract: {
            distance: 180,
            duration: 2,
          },
        },
      },
      particles: {
        number: {
          value: 40,
        },
        color: {
          value: [
            "#EF4444", // Equivalent to "text-red-500"
            "#FCD34D", // Equivalent to "text-yellow-400"
            "#34D399", // Equivalent to "text-green-400"
            "#3B82F6", // Equivalent to "text-blue-400"
            "#6366F1", // Equivalent to "text-indigo-400"
            "#8B5CF6", // Equivalent to "text-purple-400"
            "#FED7AA", // Equivalent to "text-orange-200"
            "#FDBA74", // Equivalent to "text-orange-300"
            "#FB923C", // Equivalent to "text-orange-400"
            "#F97316", // Equivalent to "text-orange-500"
            "#F97316", // Equivalent to "text-orange-600"
            "#EA580C", // Equivalent to "text-orange-700"
          ]
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.8,
        },
        size: {
          value: {
            randomize: true,
            min: 3,
            max: 12,
          },
        },
        collisions: {
          enable: true,
          mode: "bounce",
        },
        move: {
          enable: true,
          direction: "bottom",
          speed: 0.05, 
          outModes: {
            default: "out",
          },
          gravity: {
            enable: true,
            acceleration: 0.05,
          },
        },
      },
      detectRetina: true,
    };
  }, [endpoint]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9,
      }}
    >
      {isParticlesLoaded && (
        <Particles id={id} init={particlesLoaded} options={options} />
      )}
    </div>
  );
};

export default Background;
