import { useEffect, useRef } from "react";

function SectionStack({
  current,
  next,
  hero,
  about,
  className = "",
}) {
  const stageRef = useRef(null);
  const nextRef = useRef(null);

  const currentContent = current ?? hero;
  const nextContent = next ?? about;

  useEffect(() => {
    const stage = stageRef.current;
    const nextSection = nextRef.current;

    if (!stage || !nextSection) return;

    const updateProgress = () => {
      const rect = stage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = -viewportHeight;
      const end = 0;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (rect.top - start) / (end - start)
        )
      );

      nextSection.style.setProperty(
        "--stack-progress",
        progress.toFixed(4)
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className={`hero-about-stack ${className}`}
      ref={stageRef}
    >
      <div className="hero-about-stack-hero">
        {currentContent}
      </div>

      <div
        className="hero-about-stack-about"
        ref={nextRef}
      >
        {nextContent}
      </div>
    </div>
  );
}

export default SectionStack;
