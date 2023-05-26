import React, { Component } from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useState } from "react";
import usePreventBodyScroll from "./bodyscroll";

import { SlideView } from "./Card";

const elemPrefix = "test";
// const getId = (index) => `${elemPrefix}${index}`;
const getId = (index) => `${index}`;

const getItems = () =>
  Array(8)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
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
