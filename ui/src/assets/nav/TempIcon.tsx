import React from 'react';

const TempIcon: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <svg
      width="24"
      height="46"
      viewBox="0 0 24 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2 25.3V6.9C19.2 3.082 15.984 0 12 0C8.016 0 4.8 3.082 4.8 6.9V25.3C1.896 27.393 0 30.751 0 34.5C0 40.848 5.376 46 12 46C18.624 46 24 40.848 24 34.5C24 30.751 22.104 27.393 19.2 25.3ZM9.6 20.7V6.9C9.6 5.635 10.68 4.6 12 4.6C13.32 4.6 14.4 5.635 14.4 6.9V9.2H12V11.5H14.4V16.1H12V18.4H14.4V20.7H9.6Z"
        fill={!isDarkMode ? 'black' : 'white'}
      />
    </svg>
  );
};

export default TempIcon;
