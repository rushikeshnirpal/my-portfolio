import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}

export default ParticlesBg;