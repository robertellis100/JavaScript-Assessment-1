//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var concantRes=num10+string8+one;
var sumNumRes=num10+one;
console.log("The sum of the datatypes cannot be presented, as one is a string; however, the concatenation per the given order would be: "+concantRes);
console.log("The sum of the number datatypes is: "+sumNumRes);
//#1 complete

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
// The instructions are interepretted as, write a for loop from 20 to 100 that only logs numbers divisible by 3 
var iInitial=20;
var iEnd=100;
var target=3;
var countLog=0;

for (var i=iInitial;i<=iEnd;i++){
	if(i%target===0){
		console.log(i);
		countLog++;
	}
}
console.log("There are "+countLog+" numbers from "+iInitial+" to "+iEnd+" that are divisible by "+target+".");
//#2 complete

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var sum=0;
var avg;
for(var i=0;i<scores.length;i++){
	sum+=scores[i];
}
avg=sum/scores.length;
console.log("The class average is: "+avg);
//#3 complete
