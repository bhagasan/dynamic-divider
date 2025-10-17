'use client';

import Container from '@/components/Container';
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

  const renderLineUp = () => {
    const elm: any[] = [];
    DATA.forEach((d: any, idx: number) =>
      elm.push(
        <Item
          key={d}
          ref={(el) => {
            if (el) itemsRef.current[idx] = el;
          }}
          label={d}
        />,
      ),
    );
    return elm;
  };
  return (
    <main>
      <Container>
        <div className='flex justify-center gap-x-8 flex-wrap mt-32'>{renderLineUp()}</div>
      </Container>
    </main>
  );
}
