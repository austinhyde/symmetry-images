export default function copy(node: HTMLElement) {
  node.parentElement.contentEditable = true;
  select(node);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  node.parentElement.contentEditable = false;
}

function select(node) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}