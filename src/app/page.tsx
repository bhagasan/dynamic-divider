'use client';

import Item from '@/components/Item';
import { useEffect, useRef } from 'react';
import DATA from '@/data/lineup.json';

export default function Home() {
  const itemsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      itemsRef.current.forEach((d: any) => {
        const elm = d.getBoundingClientRect();
        const nextElm = d.nextElementSibling as HTMLElement | null;
        if (!nextElm) {
          d.classList.add('hide-dot');
        } else if (elm.y < nextElm.getBoundingClientRect().y) {
          d.classList.add('hide-dot');
        } else {
          d.classList.remove('hide-dot');
        }
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLineUp = () =>
    DATA.map((d: any, idx: number) => (
      <Item
        key={d}
        ref={(el) => {
          if (el) itemsRef.current[idx] = el;
        }}
        label={d}
      />
    ));

  return (
    <main>
      <div className='relative mx-auto w-[1024px] lg:px-0 px-4 max-w-full'>
        <div className='flex justify-center md:gap-x-8 gap-x-5 flex-wrap mt-16'>{renderLineUp()}</div>
      </div>
    </main>
  );
}
