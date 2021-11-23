import React from 'react';
import * as Slider from "@radix-ui/react-slider";
// import s from './Slider.module.css';

const SliderDemo = () => (
  <Slider.Root className="relative flex items-center w-full h-6 select-none">
    <Slider.Track className="relative flex-grow h-1 bg-gray-900 rounded-full outline-none">
      <Slider.Range className="absolute h-full bg-green-500 rounded-full outline-none" />
    </Slider.Track>
    <Slider.Thumb className="z-50 block w-4 h-4 font-bold bg-green-500 rounded-full shadow-xl outline-none " data-tip="1.0" />
  </Slider.Root>
);

export default SliderDemo;