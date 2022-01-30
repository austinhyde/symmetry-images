

export default function draw(node: HTMLCanvasElement, cb: (ctx: CanvasRenderingContext2D, node: HTMLCanvasElement) => void) {
  const ctx = node.getContext('2d');
  cb(ctx, node);

  return {
    destroy() {
    },
    update(cb) {
      ctx.clearRect(0, 0, node.width, node.height);
      cb(ctx, node);
    }
  };
}