import React, { forwardRef } from 'react';

const Dot = () => (
  <div className='dot absolute top-1/2 -translate-y-1/2 md:-right-5 -right-3'>
    <div className='md:w-2 w-[5px] bg-[#FF0017] rounded-full'>
      <div className='pt-[100%]'></div>
    </div>
  </div>
);

const Label = ({ value }: { value: string }) => (
  <div className={`font-semibold cursor-default lg:text-2xl md:text-xl text-lg tracking-wider`}>{value}</div>
);

const Item = forwardRef<HTMLDivElement, { label: string }>(({ label }, ref) => (
  <div ref={ref} className='relative inlineflex items-center '>
    <Label value={label} />
    <Dot />
  </div>
));

Item.displayName = 'Item';
export default Item;
