"use client";
import React, { useEffect, useRef, useState } from "react";
import "./gameStyle.css";

export const BoardForDinosour = () => {
  const dinosaurRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [gameRunning, setGameRunning] = useState(true);

  const detectCollision = () => {
    const dinosaur = dinosaurRef.current;
    const block = blockRef.current;

    if (!dinosaur || !block) return false;

    const dinoRect = dinosaur.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();

    return (
      dinoRect.left < blockRect.left + blockRect.width &&
      dinoRect.left + dinoRect.width > blockRect.left &&
      dinoRect.top < blockRect.top + blockRect.height &&
      dinoRect.top + dinoRect.height > blockRect.top
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        const dinosaur = dinosaurRef.current;
        if (dinosaur) {
          dinosaur.classList.add("jump");
          setTimeout(() => {
            dinosaur.classList.remove("jump");
          }, 500);
        }
      }
    };

    const checkCollision = () => {
      if (detectCollision()) {
        setGameRunning(false);
        alert("Game Over - Collision detected!");
      } else {
        requestAnimationFrame(checkCollision);
      }
    };

    if (gameRunning) {
      window.addEventListener("keydown", handleKeyDown);
      requestAnimationFrame(checkCollision);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameRunning]);

  return (
    <div className="w-full h-[400px] border border-[#987] relative p-4">
      <div className="dinosour" ref={dinosaurRef}></div>
      <div className="block" ref={blockRef}></div>
    </div>
  );
};
