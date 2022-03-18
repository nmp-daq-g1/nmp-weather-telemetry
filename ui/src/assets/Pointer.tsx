import React, { useContext } from 'react';
import data from '../store/data-context';
import classes from './Pointer.module.css';

const Pointer: React.FC = () => {
  const ctx = useContext(data);
  const dir = ctx.realTimeData.wind_dir;

  return (
    <svg
      width="30%"
      height="20%"
      viewBox="0 0 80 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.pointer}
      style={{ transform: `rotate(${dir}deg)` }}
    >
      <g filter="url(#filter0_d_221_439)">
        <path
          d="M39.3586 4.12681L43.0117 40.3813L35.5588 40.4703L39.3586 4.12681Z"
          fill="url(#paint0_linear_221_439)"
        />
      </g>
      <g filter="url(#filter1_d_221_439)">
        <path
          d="M39.051 77.9862L35.398 41.7317L42.8509 41.6427L39.051 77.9862Z"
          fill="#C4C4C4"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_221_439"
          x="31.5586"
          y="4.12671"
          width="15.4531"
          height="44.3438"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_439"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_439"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_221_439"
          x="31.3979"
          y="41.6426"
          width="15.4531"
          height="44.3438"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_439"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_439"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_221_439"
          x1="39.3586"
          y1="4.12681"
          x2="39.9368"
          y2="52.5174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7333E" />
          <stop offset="1" stopColor="#E88F45" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Pointer;
