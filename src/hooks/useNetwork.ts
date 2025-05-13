import { useEffect, useState } from 'react';

/**
 * A hook that returns the current network status
 * @returns {boolean} true if online, false if offline
 * @example
 * const isOnline = useNetwork();
 * console.log(isOnline);
 */
export function useNetwork(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
} 