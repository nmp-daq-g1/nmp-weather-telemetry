import React from 'react';

const Home: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4237 11.7027L15.6112 1.41556C14.975 0.861481 14.025 0.86148 13.3888 1.41556L1.57627 11.7027C1.21006 12.0217 1 12.4824 1 12.9667V27.3205C1 28.248 1.75552 29 2.6875 29H9.4375C10.3695 29 11.125 28.248 11.125 27.3205V20.6023C11.125 19.6747 11.8805 18.9228 12.8125 18.9228H16.1875C17.1195 18.9228 17.875 19.6747 17.875 20.6023V27.3205C17.875 28.248 18.6305 29 19.5625 29H26.3125C27.2445 29 28 28.248 28 27.3205V12.9667C28 12.4824 27.7899 12.0217 27.4237 11.7027Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={!isDarkMode ? 'black' : 'white'}
      />
    </svg>
  );
};

export default Home;
