 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';
while(sentence.includes(' i ')){
		sentence=sentence.replace(' i ',' I ');
	}
//#1 complete

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';
var counter=0;
for (i=0;i<jsHistory.length;i++){
	if(jsHistory.charAt(i)==="a"|| jsHistory.charAt(i)==="A"){
		counter++;
		//console.log(jsHistory.substr(i-1,10));
		}
}
//#2 complete

//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';
while(text.includes('scream')){
	text=text.replace('scream','scream'.toUpperCase());
}
//#3 complete