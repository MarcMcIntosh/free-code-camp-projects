const doorOffset = require('./doorOffset');

function startFrom(str, w, h, x, y) {
  switch (str) {
    case 'right': return {
      x: x - w,
      y: (y - Math.floor(h / 2)) + doorOffset(h),
    };
    case 'left': return {
      x: x + 1,
      y: (y - Math.floor(h / 2)) + doorOffset(h),
    };
    case 'top': return {
      x: (x - Math.floor(w / 2)) + doorOffset(w),
      y: y + 1,
    };
    case 'bottom': return {
      x: (x - Math.floor(w / 2)) + doorOffset(w),
      y: y - h,
    };
    default: return undefined;
  }
}

module.exports = startFrom;
