import { useState, useEffect, useRef } from 'react';

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const [isFucos, setIsFucos] = useState(false);
  const ref = useRef();

  const handleHideDropdown = event => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (
      (ref.current && !ref.current.contains(event.target)) ||
      isFucos === false
    ) {
      setIsComponentVisible(false);
      setIsFucos(false);
    } else {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {
    ref,

    setIsFucos,
    isComponentVisible,
    setIsComponentVisible
  };
}

export default useComponentVisible;
