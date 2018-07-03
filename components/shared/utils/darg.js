
const mousePosition = (e) => {
  e = e || window.event;
  const xPos = e.pageX
    ? e.pageX
    : e.clientX + document.body.scrollLeft - document.body.clientLeft;
  const yPos = e.pageY
    ? e.pageY
    : e.clientY + document.body.scrollTop - document.body.clientTop;
  return {
    x: xPos,
    y: yPos
  };
};

const disableMouseDown = (e) => {
  const event = e || window.event;
  event.preventDefault();
  event.stopPropagation();
};

const getStandardAbsolutePosition = (position, minPosition, maxPosition) =>
  Math.min(
    maxPosition,
    Math.max(
      position,
      minPosition
    )
  );

export default {
  mousePosition,
  disableMouseDown,
  getStandardAbsolutePosition
};
