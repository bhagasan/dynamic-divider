import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='relative mx-auto w-[1024px] lg:px-0 px-4 max-w-full'>{children}</div>;
};

export default Container;
