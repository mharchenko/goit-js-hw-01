// --------Element width----------//
function getElementWidth(content, padding, border) {
  let contentElementWidth = parseFloat(content);
  let paddingElementWidth = parseFloat(padding) * 2;
  let borderElementWidth = parseFloat(border) * 2;
  return contentElementWidth + paddingElementWidth + borderElementWidth;
}

getElementWidth('50px', '8px', '4px');
getElementWidth('60px', '12px', '8.5px');
getElementWidth('200px', '0px', '0px');
