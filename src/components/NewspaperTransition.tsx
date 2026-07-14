'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

interface NewspaperTransitionProps {
  children: React.ReactNode;
}

export default function NewspaperTransition({ children }: NewspaperTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState<React.ReactNode>(children);
  const [animationState, setAnimationState] = useState<'idle' | 'folding' | 'unfolding'>('idle');
  const prevPathname = useRef(pathname);

  useEffect(() => {
    let foldInTimer: NodeJS.Timeout;

    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      setAnimationState('folding');

      // Phase 1: Wait for page fold-out animation to complete, then change children and fold-in
      const foldOutTimer = setTimeout(() => {
        setDisplayChildren(children);
        setAnimationState('unfolding');

        // Phase 2: Wait for page fold-in animation to complete, then go back to idle
        foldInTimer = setTimeout(() => {
          setAnimationState('idle');
        }, 500); // matches the pageFoldInAnim duration in globals.css
      }, 500); // matches the pageFoldOutAnim duration in globals.css

      return () => {
        clearTimeout(foldOutTimer);
        if (foldInTimer) {
          clearTimeout(foldInTimer);
        }
      };
    } else {
      // If pathname did not change but children changed, update children directly
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  let animationClass = '';
  if (animationState === 'folding') {
    animationClass = 'page-fold-out';
  } else if (animationState === 'unfolding') {
    animationClass = 'page-fold-in';
  }

  return (
    <div className="newspaper-transition-container">
      <div className={animationClass}>
        {displayChildren}
      </div>
    </div>
  );
}
