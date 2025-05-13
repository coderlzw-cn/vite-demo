import { useCallback, useEffect, useState } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;
type KeyFilter = string | string[] | ((event: KeyboardEvent) => boolean);

interface KeyPressOptions {
  target?: Window | Document | HTMLElement;
  event?: 'keydown' | 'keyup' | 'keypress';
  exact?: boolean;
}

/**
 * A hook for handling keyboard press events
 * @param keyFilter The key(s) to listen for
 * @param callback The callback function to execute when the key is pressed
 * @param options Additional options for the key press handler
 */
export function useKeyPress(
  keyFilter: KeyFilter,
  callback: KeyHandler,
  options: KeyPressOptions = {}
): boolean {
  const {
    target = window,
    event = 'keydown',
    exact = false
  } = options;

  const [isPressed, setIsPressed] = useState(false);

  const isKeyMatch = useCallback((event: KeyboardEvent): boolean => {
    if (typeof keyFilter === 'function') {
      return keyFilter(event);
    }

    const keys = Array.isArray(keyFilter) ? keyFilter : [keyFilter];
    const key = event.key.toLowerCase();

    if (exact) {
      return keys.some(k => k.toLowerCase() === key);
    }

    return keys.some(k => key.includes(k.toLowerCase()));
  }, [keyFilter, exact]);

  useEffect(() => {
    const handleKeyEvent = (event: Event) => {
      if (isKeyMatch(event as KeyboardEvent)) {
        setIsPressed(true);
        callback(event as KeyboardEvent);
      } else {
        setIsPressed(false);
      }
    };

    const handleKeyUp = () => {
      setIsPressed(false);
    };

    target.addEventListener(event, handleKeyEvent);
    target.addEventListener('keyup', handleKeyUp);

    return () => {
      target.removeEventListener(event, handleKeyEvent);
      target.removeEventListener('keyup', handleKeyUp);
    };
  }, [target, event, callback, isKeyMatch]);

  return isPressed;
} 