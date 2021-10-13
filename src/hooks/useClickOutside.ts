import React, { useRef, useEffect } from 'react';

interface useClickOutsideProps {
  hamburgerRef: React.RefObject<HTMLDivElement>;
  callBack: any;
  open: boolean;
}

export const useClickOutside = ({
  hamburgerRef,
  callBack,
  open,
}: useClickOutsideProps): React.RefObject<HTMLDivElement> => {
  const domNode = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let eventHandler = (event: MouseEvent) => {
      if (
        open &&
        !hamburgerRef.current?.contains(event.target as Node) &&
        !domNode.current?.contains(event.target as Node)
      ) {
        callBack();
      }
    };

    document.addEventListener('mousedown', eventHandler);

    return () => {
      document.removeEventListener('mousedown', eventHandler);
    };
  }, [open, callBack]);

  return domNode;
};
