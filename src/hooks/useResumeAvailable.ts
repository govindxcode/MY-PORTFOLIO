import { useState, useEffect } from 'react';

export function useResumeAvailable() {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const checkResume = async () => {
      try {
        const response = await fetch('/resume.pdf', { method: 'HEAD' });
        const contentType = response.headers.get('content-type');
        if (response.ok && contentType?.includes('application/pdf')) {
          setIsAvailable(true);
        } else {
          setIsAvailable(false);
        }
      } catch (e) {
        setIsAvailable(false);
      }
    };

    checkResume();
  }, []);

  return isAvailable;
}
