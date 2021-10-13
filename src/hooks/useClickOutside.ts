import { useRef, useEffect, FC } from 'react';

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
    let eventHandler = (event: any) => {
      if (open && !domNode.current?.contains(event.target)) {
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
