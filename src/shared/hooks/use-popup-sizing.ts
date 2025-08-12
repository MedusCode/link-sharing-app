import { RefObject, useLayoutEffect, useState } from "react";

type Placement = "bottom" | "top";

interface DropdownSizing {
  maxHeight: number;
  placement: Placement;
}

const usePopupSizing = <T extends HTMLElement>(
  triggerRef: RefObject<T>,
  gap: number = 8,
  minSpaceForBottom: number = 200
): DropdownSizing => {
  const [ state, setState ] = useState<DropdownSizing>({
    maxHeight: minSpaceForBottom,
    placement: "bottom",
  });

  useLayoutEffect(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement) return;

    const visualViewportRef = window.visualViewport;

    const recalculate = () => {
      const rect = triggerElement.getBoundingClientRect();
      const viewportHeight = visualViewportRef?.height ?? window.innerHeight;
      const viewportOffsetTop = visualViewportRef?.offsetTop ?? 0;

      const spaceBelow = viewportHeight + viewportOffsetTop - rect.bottom - gap;
      const spaceAbove = rect.top - viewportOffsetTop - gap;

      const placement: Placement =
        spaceBelow >= minSpaceForBottom || spaceBelow >= spaceAbove
          ? "bottom"
          : "top";
      const available = placement === "bottom" ? spaceBelow : spaceAbove;

      setState({
        placement,
        maxHeight: Math.max(0, Math.floor(available)),
      });
    };

    const resizeObserver = new ResizeObserver(recalculate);
    resizeObserver.observe(triggerElement);

    const cleanupViewportListeners = () => {
      visualViewportRef?.removeEventListener("resize", recalculate);
      visualViewportRef?.removeEventListener("scroll", recalculate);
    };

    recalculate();
    window.addEventListener("resize", recalculate, { passive: true });
    window.addEventListener("scroll", recalculate, { passive: true });
    visualViewportRef?.addEventListener("resize", recalculate);
    visualViewportRef?.addEventListener("scroll", recalculate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalculate);
      window.removeEventListener("scroll", recalculate);
      cleanupViewportListeners();
    };
  }, [ triggerRef, gap, minSpaceForBottom ]);

  return state;
}

export default usePopupSizing;
