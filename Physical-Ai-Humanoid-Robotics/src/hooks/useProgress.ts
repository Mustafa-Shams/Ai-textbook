import {useState, useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

const PROGRESS_KEY = 'docusaurus-progress';

function getInitialProgress() {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const item = window.localStorage.getItem(PROGRESS_KEY);
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(getInitialProgress);
  const location = useLocation();

  useEffect(() => {
    const newProgress = {...progress, [location.pathname]: true};
    setProgress(newProgress);
    try {
      window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
    } catch (error) {
      console.error(error);
    }
  }, [location.pathname]);

  return progress;
}
