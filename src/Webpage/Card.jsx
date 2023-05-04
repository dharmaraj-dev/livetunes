import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ title, itemId }) {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete,
    isLastItemVisible,
    scrollNext,
  } = React.useContext(VisibilityContext);
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  // console.log({ isLastItemVisible });
  const [disabledNext, setDisabledNext] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabledNext(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "100vw",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "200px",
        }}
      >
        <button onClick={() => scrollPrev()}>CLICK PREVIOUS</button>
        <button onClick={() => scrollNext()}>CLICK NEXT</button>
      </div>
    </div>
  );
}
