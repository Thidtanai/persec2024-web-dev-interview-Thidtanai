const regex = /^([a-zA-Z]{2})([1-9][0-9]?)(\w*)$/;

let arrSort = (arr: Array<string>): Array<string> => {
  return arr.sort((x, y) => {
    // regex format: ZZ00X, ZZ, 00, X..
    const xRegex = regex.exec(x);
    const yRegex = regex.exec(y);

    if (xRegex && yRegex) {
      // compare header
      const xHead = xRegex[1];
      const yHead = yRegex[1];
      if (xHead === yHead) {
        // compare number
        const xNum = parseInt(xRegex[2]);
        const yNum = parseInt(yRegex[2]);
        if (xNum === yNum) {
          // compare other word for special case
          const xBody = xRegex[3];
          const yBody = yRegex[3];
          return xBody.localeCompare(yBody);
        }
        return xNum - yNum;
      }
      return xHead.localeCompare(yHead);
    }
    return x.localeCompare(y);
  });
};

export default arrSort;
