import React from 'react';

const Compass: React.FC = () => {
  const darkMode = localStorage.getItem('colorMode') === 'dark';
  return (
    <svg
      width="60%"
      height="60%"
      viewBox="0 0 208 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_238_591)">
        <circle
          cx="104"
          cy="100"
          r="95"
          stroke="url(#paint0_linear_238_591)"
          strokeWidth="10"
          shapeRendering="crispEdges"
        />
      </g>
      <rect
        x="97"
        width="10"
        height="30"
        rx="5"
        fill="url(#paint1_linear_238_591)"
      />
      <rect
        x="169.746"
        y="24.2947"
        width="10"
        height="25"
        rx="5"
        transform="rotate(45 169.746 24.2947)"
        fill="url(#paint2_linear_238_591)"
      />
      <rect
        x="47.1421"
        y="155"
        width="10"
        height="20"
        rx="5"
        transform="rotate(45 47.1421 155)"
        fill="url(#paint3_linear_238_591)"
      />
      <rect
        x="53.2134"
        y="38.1421"
        width="10"
        height="20"
        rx="5"
        transform="rotate(135 53.2134 38.1421)"
        fill="url(#paint4_linear_238_591)"
      />
      <rect
        x="179.213"
        y="166.142"
        width="10"
        height="20"
        rx="5"
        transform="rotate(135 179.213 166.142)"
        fill="url(#paint5_linear_238_591)"
      />
      <rect
        x="97"
        y="170"
        width="10"
        height="30"
        rx="5"
        fill="url(#paint6_linear_238_591)"
      />
      <rect
        x="204"
        y="93"
        width="10"
        height="30"
        rx="5"
        transform="rotate(90 204 93)"
        fill="#E85C42"
      />
      <rect
        x="34"
        y="93"
        width="10"
        height="30"
        rx="5"
        transform="rotate(90 34 93)"
        fill="url(#paint7_linear_238_591)"
      />
      <path
        d="M106.625 38.625V50H104.281L99.7109 42.375V50H97.3672V38.625H99.7109L104.289 46.2578V38.625H106.625Z"
        fill={!darkMode ? 'black' : 'white'}
      />
      <path
        d="M104.008 158.023C104.008 157.82 103.977 157.638 103.914 157.477C103.857 157.31 103.747 157.159 103.586 157.023C103.424 156.883 103.198 156.745 102.906 156.609C102.615 156.474 102.237 156.333 101.773 156.188C101.258 156.021 100.768 155.833 100.305 155.625C99.8464 155.417 99.4401 155.174 99.0859 154.898C98.737 154.617 98.4609 154.292 98.2578 153.922C98.0599 153.552 97.9609 153.122 97.9609 152.633C97.9609 152.159 98.0651 151.729 98.2734 151.344C98.4818 150.953 98.7734 150.62 99.1484 150.344C99.5234 150.062 99.9661 149.846 100.477 149.695C100.992 149.544 101.557 149.469 102.172 149.469C103.01 149.469 103.742 149.62 104.367 149.922C104.992 150.224 105.477 150.638 105.82 151.164C106.169 151.69 106.344 152.292 106.344 152.969H104.016C104.016 152.635 103.945 152.344 103.805 152.094C103.669 151.839 103.461 151.638 103.18 151.492C102.904 151.346 102.555 151.273 102.133 151.273C101.727 151.273 101.388 151.336 101.117 151.461C100.846 151.581 100.643 151.745 100.508 151.953C100.372 152.156 100.305 152.385 100.305 152.641C100.305 152.833 100.352 153.008 100.445 153.164C100.544 153.32 100.69 153.466 100.883 153.602C101.076 153.737 101.312 153.865 101.594 153.984C101.875 154.104 102.201 154.221 102.57 154.336C103.19 154.523 103.734 154.734 104.203 154.969C104.677 155.203 105.073 155.466 105.391 155.758C105.708 156.049 105.948 156.38 106.109 156.75C106.271 157.12 106.352 157.539 106.352 158.008C106.352 158.503 106.255 158.945 106.062 159.336C105.87 159.727 105.591 160.057 105.227 160.328C104.862 160.599 104.427 160.805 103.922 160.945C103.417 161.086 102.852 161.156 102.227 161.156C101.664 161.156 101.109 161.083 100.562 160.938C100.016 160.786 99.5182 160.56 99.0703 160.258C98.6276 159.956 98.2734 159.57 98.0078 159.102C97.7422 158.633 97.6094 158.078 97.6094 157.438H99.9609C99.9609 157.792 100.016 158.091 100.125 158.336C100.234 158.581 100.388 158.779 100.586 158.93C100.789 159.081 101.029 159.19 101.305 159.258C101.586 159.326 101.893 159.359 102.227 159.359C102.633 159.359 102.966 159.302 103.227 159.188C103.492 159.073 103.688 158.914 103.812 158.711C103.943 158.508 104.008 158.279 104.008 158.023Z"
        fill={!darkMode ? 'black' : 'white'}
      />
      <path
        d="M168.648 102.172V104H162.594V102.172H168.648ZM163.359 92.625V104H161.016V92.625H163.359ZM167.859 97.2578V99.0391H162.594V97.2578H167.859ZM168.641 92.625V94.4609H162.594V92.625H168.641Z"
        fill={!darkMode ? 'black' : 'white'}
      />
      <path
        d="M42.7578 102.195L45.0234 92.625H46.2891L46.5781 94.2188L44.1641 104H42.8047L42.7578 102.195ZM41.5938 92.625L43.4688 102.195L43.3125 104H41.7969L39.2734 92.625H41.5938ZM48.5703 102.156L50.4219 92.625H52.7422L50.2266 104H48.7109L48.5703 102.156ZM47 92.625L49.2812 102.234L49.2188 104H47.8594L45.4297 94.2109L45.7422 92.625H47Z"
        fill={!darkMode ? 'black' : 'white'}
      />
      <g filter="url(#filter1_d_238_591)">
        <path
          d="M75.1349 71.8991L103.411 94.8816L98.2172 100.228L75.1349 71.8991Z"
          fill="url(#paint8_linear_238_591)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_238_591"
          x="0"
          y="0"
          width="208"
          height="208"
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
            result="effect1_dropShadow_238_591"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_238_591"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_238_591"
          x="71.1348"
          y="71.8992"
          width="36.2764"
          height="36.3284"
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
            result="effect1_dropShadow_238_591"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_238_591"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_238_591"
          x="94.998"
          y="95.885"
          width="36.2764"
          height="36.3284"
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
            result="effect1_dropShadow_238_591"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_238_591"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_238_591"
          x1="104"
          y1="0"
          x2="104"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7323E" />
          <stop offset="1" stopColor="#E88F45" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_238_591"
          x1="102"
          y1="0"
          x2="102"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7363F" />
          <stop offset="1" stopColor="#E84540" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_238_591"
          x1="174.746"
          y1="24.2947"
          x2="174.746"
          y2="49.2947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7363F" />
          <stop offset="1" stopColor="#E84540" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_238_591"
          x1="52.1421"
          y1="155"
          x2="52.1421"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E88344" />
          <stop offset="1" stopColor="#E88545" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_238_591"
          x1="58.2134"
          y1="38.1421"
          x2="58.2134"
          y2="58.1421"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E83E3F" />
          <stop offset="1" stopColor="#E84740" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_238_591"
          x1="184.213"
          y1="166.142"
          x2="184.213"
          y2="186.142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E87E44" />
          <stop offset="1" stopColor="#E87E44" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_238_591"
          x1="102"
          y1="170"
          x2="102"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E87744" />
          <stop offset="1" stopColor="#E88E45" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_238_591"
          x1="34"
          y1="107.667"
          x2="44"
          y2="107.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E85D42" />
          <stop offset="1" stopColor="#E86242" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Compass;
