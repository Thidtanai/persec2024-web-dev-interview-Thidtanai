let autoComplete = (
  search: string,
  items: Array<string>,
  maxResult: number
): Array<string> => {
  search = search.toLowerCase();

  // priority array
  const resultHead: Array<string> = [];
  const resultMiddle: Array<string> = [];
  const resultTail: Array<string> = [];

  for (const item of items) {
    const lowerItem = item.toLowerCase();
    if (lowerItem.startsWith(search)) {
      resultHead.push(item);
    } else if (lowerItem.endsWith(search)) {
      resultTail.push(item);
    } else if (lowerItem.includes(search)) {
      resultMiddle.push(item);
    }
  }

  // combined result by priority
  const combinedResults = [...resultHead, ...resultMiddle, ...resultTail];
  return combinedResults.slice(0, maxResult);
};

export default autoComplete;
