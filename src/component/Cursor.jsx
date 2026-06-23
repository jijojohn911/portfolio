import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
   <div
  className="fixed w-10 h-10 pointer-events-none z-50
  bg-white/1 border border-white/30
  backdrop-blur-xs
  rounded-full"
  
  style={{
    left: position.x,
    top: position.y,
    transform: "translate(-50%, -50%)",
  }}
>
 
  </div>
  );
};

export default Cursor;