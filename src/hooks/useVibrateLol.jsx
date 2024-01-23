import { useEffect } from 'react';

function useVibration(pattern) {
  useEffect(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }, [pattern]);
}

export default useVibration;
