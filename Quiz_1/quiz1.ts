let hexToRgb = (hex: string): string | null => {
  // สำหรับแบบย่อ
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!regex) {
    return null;
  }

  // regex format: ffffff, ff, ff, ff
  const r = parseInt(regex[1], 16);
  const g = parseInt(regex[2], 16);
  const b = parseInt(regex[3], 16);
  return `r:${r}, g:${g}, b:${b}`;
};

export default hexToRgb;
