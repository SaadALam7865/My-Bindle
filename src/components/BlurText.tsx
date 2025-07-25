"use client";

import { motion, TargetAndTransition } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

// Define a stricter Keyframe type for Framer Motion properties
type Keyframe = {
  filter?: string;
  opacity?: number;
  y?: number;
  [key: string]: string | number | undefined; // Allow other properties but prefer specific ones
};

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "chars";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Keyframe;
  animationTo?: Keyframe[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

// Define type for keyframes compatible with Framer Motion
type MotionKeyframes = {
  [key: string]: (string | number)[];
};

const buildKeyframes = (from: Keyframe, steps: Keyframe[]): MotionKeyframes => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: MotionKeyframes = {};

  keys.forEach((k) => {
    const values = [
      from[k] ?? (k === "filter" ? "blur(0px)" : 0),
      ...steps.map((s) => s[k] ?? from[k] ?? (k === "filter" ? "blur(0px)" : 0)),
    ].filter((v): v is string | number => v !== undefined); // Exclude undefined
    keyframes[k] = values.length > 0 ? values : [k === "filter" ? "blur(0px)" : 0];
  });

  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo<Keyframe>(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo<Keyframe[]>(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p
      ref={ref}
      className={`blur-text ${className} flex flex-wrap justify-center text-center`}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        // Ensure initial is typed as TargetAndTransition
        const initial: TargetAndTransition = {
          filter: fromSnapshot.filter ?? "blur(0px)",
          opacity: fromSnapshot.opacity ?? 0,
          y: fromSnapshot.y ?? 0,
        };

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={initial}
            animate={inView ? (animateKeyframes as TargetAndTransition) : initial}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;