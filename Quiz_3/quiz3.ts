class ReverseEncoder {
  encode(text: string): string {
    // prepare text
    text = text.toLowerCase();
    const words = text.split(" ");

    // encode words
    const encodeWords = words.map((word) => {
      let result: Array<string> = [];
      for (let i = 0; i < word.length; i++) {
        let currChar = word.charCodeAt(i) - "a".charCodeAt(0);
        let convertChar = ((25 - currChar) % 26) + "a".charCodeAt(0);
        result.push(String.fromCharCode(convertChar));
      }
      return result.join("");
    });

    // swap order
    return encodeWords.reverse().join(" ");
  }

  decode(text: string): string {
    // use encode to decode
    let result = this.encode(text);
    // change the first character to upper case
    result = result[0].toUpperCase() + result.slice(1);
    return result;
  }
}

export default ReverseEncoder;

