import React, { useRef, useEffect } from 'react';

interface useClickOutsideProps {
  callBack: any;
  open: boolean;
}

export const useClickOutside = ({
  callBack,
  open,
}: useClickOutsideProps): React.RefObject<HTMLDivElement> => {
  const domNode = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let eventHandler = (event: MouseEvent) => {
      if (open && !domNode.current?.contains(event.target as Node)) {
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
