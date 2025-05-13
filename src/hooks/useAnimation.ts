import { useCallback, useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  duration?: number;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

interface AnimationState {
  isAnimating: boolean;
  progress: number;
  value: number;
}

/**
 * A hook for handling animations
 * @param initialValue Initial value for the animation
 * @returns [startAnimation, state] A function to start the animation and the current animation state
 */
export function useAnimation(
  initialValue: number = 0,
  options: AnimationOptions = {}
): [(targetValue: number) => void, AnimationState] {
  const {
    duration = 1000,
    easing = (t: number) => t,
    onComplete
  } = options;

  const [state, setState] = useState<AnimationState>({
    isAnimating: false,
    progress: 0,
    value: initialValue
  });

  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const startValueRef = useRef<number>(initialValue);
  const targetValueRef = useRef<number>(initialValue);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);

    const currentValue = startValueRef.current + (targetValueRef.current - startValueRef.current) * easedProgress;

    setState({
      isAnimating: progress < 1,
      progress: easedProgress,
      value: currentValue
    });

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      onComplete?.();
    }
  }, [duration, easing, onComplete]);

  const startAnimation = useCallback((targetValue: number) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    startTimeRef.current = undefined;
    startValueRef.current = state.value;
    targetValueRef.current = targetValue;

    animationRef.current = requestAnimationFrame(animate);
  }, [animate, state.value]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return [startAnimation, state];
} 