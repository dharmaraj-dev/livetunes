import React from "react";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useState } from "react";
import usePreventBodyScroll from "./bodyscroll";

import { SlideView } from "./Card";

// const elemPrefix = "test";
// const getId = (index) => `${elemPrefix}${index}`;
const getId = (index) => `${index}`;

const getItems = () =>
  Array(9)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollPrev();
  } else if (ev.deltaY > 0) {
    apiObj.scrollNext();
  }
}

const Home = () => {
  const [items] = useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            // LeftArrow={LeftArrow}
            // RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <SlideView title={id} itemId={id} key={id} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
};
export default Home;
