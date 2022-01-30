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

  let last = null;

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

  function getNodeRelative(p: point): point {
    const bounds = node.getBoundingClientRect();
    return {
      x: p.x - bounds.x,
      y: p.y - bounds.y,
    };
  }
  function getDelta(p: point): delta {
    return {
      dx: p.x - last.x,
      dy: p.y - last.y,
    };
  }

  function onStart(e: MouseEvent|TouchEvent) {
    e.preventDefault();
    e.stopPropagation();

    last = getClient(e);
    if (handlers.onStart) handlers.onStart(getNodeRelative(last));

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);
  }
  function onMove(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    e.stopPropagation();

    const point = getClient(e);
    const delta = getDelta(point);
    last = point;

    if (handlers.onDrag) handlers.onDrag(delta);
  }
  function onEnd(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    e.stopPropagation();

    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('touchmove', onMove);
    window.removeEventListener('mouseup', onEnd);
    window.removeEventListener('touchend', onEnd);
  }

  node.addEventListener('touchstart', onStart);
  node.addEventListener('mousedown', onStart);

  return {
    destroy() {
      node.removeEventListener('touchstart', onStart);
      node.removeEventListener('mousedown', onStart);
    }
  }
}