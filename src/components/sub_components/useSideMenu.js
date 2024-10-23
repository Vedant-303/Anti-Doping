// useSideMenu.js
import { useState } from 'react';

const useSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleMenu };
};

export default useSideMenu;
