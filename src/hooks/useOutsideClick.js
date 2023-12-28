import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapture);

      // clean up after this effect
      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture]
  );
  return ref;
}

export default useOutsideClick;
