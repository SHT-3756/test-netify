import React from "react";
function InfinityScroll() {
  const toFitScroll = (cb) => {
    let tick = false;

    return function trigger() {
      if (tick) {
        return;
      }
      tick = true;
      return requestAnimationFrame(function task() {
        tick = false;
        return cb();
      });
    };
  };
  const onScroll = () => {
    console.log("dd");
  };
  window.addEventListener(
    "scroll",
    toFitScroll(onScroll, {
      // triggerCondition:
      // dismissCondition:
    }),
    { passive: true }
  );
  return (
    <>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
      <div>InfinityScroll</div>
    </>
  );
}

export default InfinityScroll;
