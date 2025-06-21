"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);
  let timeout;

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 1000); // Hide after 1 second idle
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-10 h-10 rounded-full bg-red-500 opacity-60 pointer-events-none mix-blend-difference z-[9999] transition-opacity duration-300 ${
        visible ? "opacity-60 scale-100" : "opacity-0 scale-90"
      }`}
    ></div>
  );
}
