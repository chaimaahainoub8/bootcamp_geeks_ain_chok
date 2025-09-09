let sentence = "This movie is not that bad, I really like it !";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
    const firstPart = sentence.slice(0, wordNot);
    const lastPart = sentence.slice(wordBad + 3);
    let result = firstPart + "good" + lastPart;
    console.log(result);
}
else {
    console.log(sentence);
}
