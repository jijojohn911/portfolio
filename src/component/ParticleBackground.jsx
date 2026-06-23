

import React, { useEffect } from 'react';
import { tsParticles } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  useEffect(() => {
    let particlesInstance = null;

    const initParticles = async () => {

      await loadSlim(tsParticles);

      particlesInstance = await tsParticles.load({
        id: "tsparticles-fullscreen",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          background: { color: 'transparent' },
          particles: {
            color: { value: "#ffffff" },
            number: { value: 80 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5 },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.2
            }
          },
          interactivity: {
            detectsOn: "window", 
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 }
            }
          }
        }
      });
    };

    initParticles();

    return () => {
      if (particlesInstance) {
        particlesInstance.destroy();
      }
    };
  }, []);

  return null;
};

export default ParticleBackground;