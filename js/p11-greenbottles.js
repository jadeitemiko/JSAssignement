//Räkna ner gröna flaskor

const startBottle = 19;
const sentenceStart = startBottle + " green bottles hanging on the wall! " + startBottle + " green bottles hanging on the wall!";
const sentence2 = " green bottles hanging on the wall.";
const sentence3 = "And if one green bottle should accidentally fall, there will be ";

console.log(sentenceStart);
for (let flaskor = startBottle-1; flaskor >= 0; flaskor--) {
  console.log(sentence3 + flaskor + sentence2);
}





