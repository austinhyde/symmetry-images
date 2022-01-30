type point = {
  x: number,
  y: number,
};
type delta = {
  dx: number,
  dy: number,
};

type changeHandler = (delta:delta) => void;

type handlers = {
  onStart?: (point) => void,
  onDrag?: changeHandler,
  onEnd?: changeHandler,
}

// type predicate for TS
function isTouch(e: MouseEvent|TouchEvent): e is TouchEvent {
  return e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend';
}

export default function drag(node: HTMLElement, param?: handlers|changeHandler) {
  let handlers = {} as handlers;
  if (typeof param === 'function') {
    handlers = {onDrag: param};
  } else if (typeof param === 'object') {
    handlers = param;
  }

  let start = null;

  function getClient(e: MouseEvent|TouchEvent): point {
    if (isTouch(e)) {
      return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientX,
      };
    }
    return {
      x: e.clientX,
      y: e.clientY,
    }
  }

  function getPoint(e: MouseEvent | TouchEvent): point {
    const bounds = node.getBoundingClientRect();
    const client = getClient(e);
    return {
      x: client.x - bounds.x,
      y: client.y - bounds.y,
    };
  }
  function getDelta(p: point): delta {
    return {
      dx: p.x - start.x,
      dy: p.y - start.y,
    };
  }

  function onStart(e: MouseEvent|TouchEvent) {
    e.preventDefault();
    e.stopPropagation();
    start = getPoint(e);
    if (handlers.onStart) handlers.onStart(start);
  }
  function onEnd(e: MouseEvent | TouchEvent) {
    if (!start) return;
    e.preventDefault();
    e.stopPropagation();
    if (handlers.onEnd) handlers.onEnd(getDelta(getPoint(e)));
    start = null;
  }
  function onMove(e: MouseEvent | TouchEvent) {
    if (!start) return;
    e.preventDefault();
    e.stopPropagation();
    if (handlers.onDrag) handlers.onDrag(getDelta(getPoint(e)));
  }

  node.addEventListener('touchstart', onStart);
  node.addEventListener('touchmove', onMove);
  node.addEventListener('touchend', onEnd);
  node.addEventListener('mousedown', onStart);
  node.addEventListener('mousemove', onMove);
  node.addEventListener('mouseup', onEnd);
  // node.addEventListener('mouseleave', onEnd);

  return {
    destroy() {
      node.removeEventListener('touchstart', onStart);
      node.removeEventListener('touchmove', onMove);
      node.removeEventListener('touchend', onEnd);
      node.removeEventListener('mousedown', onStart);
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseup', onEnd);
      // node.removeEventListener('mouseleave', onEnd);
    }
  }
}