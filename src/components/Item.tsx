import React, { forwardRef } from 'react';

const Dot = () => (
  <div className='dot absolute top-1/2 -translate-y-1/2 -right-5'>
    <div className='w-[8px] bg-[#FF0017] rounded-full'>
      <div className='pt-[100%]'></div>
    </div>
  </div>
);

const Item = forwardRef<HTMLDivElement, { label: string }>(({ label }, ref) => (
  <div ref={ref} className='relative inlineflex items-center flex-shrink-0'>
    <div className={`font-semibold cursor-default text-2xl tracking-wider`}>{label}</div>
    <Dot />
  </div>
));

Item.displayName = 'Item';
export default Item;
