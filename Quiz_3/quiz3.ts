class ReverseEncoder {
  private swapCharacters(word: string): string {
    const swappedChars = word.split("").map((char) => {
      let currChar = char.charCodeAt(0) - "a".charCodeAt(0);
      let convertedChar = ((25 - currChar) % 26) + "a".charCodeAt(0);
      return String.fromCharCode(convertedChar);
    });
    return swappedChars.join("");
  }

  public encode(text: string): void {
    // prepare text
    text = text.toLowerCase();
    const words = text.split(" ");

    const swappedWords = words.map((word) => this.swapCharacters(word));
    const encodedText = swappedWords.reverse().join(" ");

    console.log(encodedText);
  }

  public decode(text: string): void {
    // prepare text
    const words = text.split(" ");

    const swappedWords = words.map((word) => this.swapCharacters(word));
    let decodedText = swappedWords.reverse().join(" ");

    // change the first character to upper case
    decodedText = decodedText[0].toUpperCase() + decodedText.slice(1);

    console.log(decodedText);
  }
}

export default ReverseEncoder;
