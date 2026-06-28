



import React, { useEffect, useRef } from 'react';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const instanceRef = useRef(null);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      if (cancelledRef.current) return; // unmounted before load finished

      const instance = await tsParticles.load({
        id: "tsparticles-home",
        options: {
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            color: { value: "#00A86B" },
            number: { value: 35 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5 },
            links: { enable: true, color: "#50C878", distance: 150, opacity: 0.2 }
          },
          detectRetina: true,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
          }
        }
      });

      if (cancelledRef.current) {
        instance.destroy(); // load finished AFTER unmount — kill it immediately
      } else {
        instanceRef.current = instance;
      }
    };

    initParticles();

    return () => {
      cancelledRef.current = true;
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, []);

  return <div id="tsparticles-home" className="absolute inset-0 -z-10 pointer-events-none" />;
};

export default ParticleBackground;