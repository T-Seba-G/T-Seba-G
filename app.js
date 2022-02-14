// const markMass=78;
// const markHeight=1.69;
// const johnMass=92;
// const johnHeight=1.95;

// const marksMass= 95;
// const marksHeight= 1.88;
// const johnsMass=85;
// const johnsHeight=1.76;
// const BMIMark=markMass / markHeight **2;
// const BMIJohn=johnMass / (johnHeight* johnHeight);
// const markHigherBMI=BMIMark >BMIJohn;
// const BMIMarks=marksMass/marksHeight ** 2;
// const BMIJohns=johnsMass/johnsHeight ** 2;
// const johnsHigherBMI= BMIJohns>BMIMarks;

// if (BMIMark > BMIJohn){
//     console.log (markHigherBMI);
// }
// else if (BMIMark < BMIJohn){
//     console.log (false)
// }
// else if(BMIJohns>BMIMarks){
//     console.log(johnsHigherBMI);
// }

// else{
//     console.log ("These fat fucks eat too much!")
// };

// const koalasAverage=(88+91+110) / 3;
// const dolphinsAverage=(96+108+89) / 3;

// if (koalasAverage > dolphinsAverage){
//     console.log ("The winners are the Koalas");
// }
// else if (dolphinsAverage > koalasAverage){
//     console.log ("The winners are the Dolphins");
// }

// else if ( koalasAverage= dolphinsAverage){
//     console.log("It\'s a DRAW!!")
// }

// const calcAge3= birthYear =>2037 - birthYear;
// const age3=calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirment = (birthYear,firstName) => {
//     const age=2037-birthYear;
//     const retirement = 65 - age;
//     // return retirment;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirment(1991,'Jonas'));
// console.log(yearsUntilRetirment(1991,'Jonas'));

// const cutFruitPieces=function (fruit){
//     return fruit * 4;
// }

// const fruitProcessor=function (apples,oranges){
//     const applePieces=cutFruitPieces(apples);
//     const orangePieces =cutFruitPieces(oranges);


//     const juice=`Juice with ${applePieces} pieces of apples and ${orangePieces}
//     pieces of oranges. `;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


// Average score calculator
// const calcAverage = (a ,b,c ) =>  (a+b+c) / 3;


// const scoreDolphins=calcAverage(44,23,71);
// const scoreKoalasa=calcAverage(65,54,49);

// // Calculating the winning team
// const checkWinner=(avgDolphins,avgKoalas)=>{
//     if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalasa win (${avgKoalas} vs ${avgDolphins})`)
//     }
//     else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     }
//     else {
//         console.log("No team wins!")
//     }
// }
// checkWinner(scoreDolphins,scoreKoalasa);

// const calcAge=function (birthYear){
//     return 2037-birthYear;
// }

// const years=[1990,1967,2002,2010,2018];

// console.log(calcAge(years[0]));

// const calcTip=bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills =[125,555,44];
// const tips =[calcTip(bills[0]),calcTip(bills[1],calcTip(bills[2]))];
// const totals=[bills[0]+tips[0]]
// console.log(bills,tips,totals);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear:1991,
//     job:'teacher',
//     friends:['Michael','Peter', 'Steven'],
//     hasDriversLicense:true,
    
//     calcAge: function(birthYear){
//         return 2037 - birthYear;
//     }

//     calcAge: function (){
//         console.log(this);
//         return 2037 - this.birthYear
//     }
//     calcAge: function (){
//         this.age=2037 - this.birthYear;
//         return this.age; 
//     },
//     showSummary: function(){
//     return `${this.firstName} `+ `is a ${this.calcAge()}-year old ${this.job}, ` + `and he 
//     has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;

//     }
// };
// console.log(jonas.calcAge());
// console.log(jonas.showSummary());

// const mark={
//     fullName:"Mark Miller",
//     mass: 78,
//     height:1.69,
//     calcBMI: function () {
//      this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//     }
// }
// const john={
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI:function () {
//         this.bmi=this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// john.calcBMI();

// mark.calcBMI();
// console.log(mark.bmi,john.bmi);

// if (mark.bmi < john.bmi){
//     console.log(`${john.fullName}'s BMI `+ `(${john.bmi}) ` + `is higher
//     than ` + `${mark.fullName}'s ` + `(${mark.bmi})`);
// }
// else if (mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI `+ `(${Math.floor(mark.bmi)}) ` + `is higher
//     than ` + `${john.fullName}'s ` + `(${Math.floor(john.bmi)})`)
// }
// else {
//     console.log('Their BMI is equal')
// }

// for (let rep=1;rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonasArray =[
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter','Steven'],
//     true
// ];

// const types=[];

// for (let i = 0;i < jonasArray.length; i++){
//     console.log(jonasArray[i],typeof jonasArray[i]);

//     // types[i]=typeof jonasArray[i];

//     types.push(typeof jonasArray[i]);
// };
// console.log(types);

// const years=[1991,2007,1969,2020];
// const ages=[];

// for (let i=0;i < years.length;i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break 
// for (let i = 0;i < jonasArray.length; i++){
//     if(typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i],typeof jonasArray[i]);

// };

// for (let i = 0;i < jonasArray.length; i++){
//     if(typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i],typeof jonasArray[i]);

// };
// const jonasArray =[
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter','Steven'],
//     true
// ];

// for (let i=jonasArray.length - 1; i >= 0; i--){
//     console.log(jonasArray[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++){
// console.log(`------Strating exercise ${exercise}`);

// for (let rep=1; rep < 6 ; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }
// }
// for (let rep=1;rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// };
// let rep=1;
// while (rep <=10){
//     // console.log(`WHILE :Lifting weights repetition ${rep}`);
//     rep++;
// };
// let dice = Math.floor(Math.random()*6)+1;

// while (dice !== 6){
//    console.log (`You rolled a ${dice}`);
//     dice = Math.floor(Math.random()*6)+1;
//     if(dice === 6)console.log('Loop is about to end...');
// }

// const calcTip=function (bill) {  
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills=[22,295,176,440,37,105,10,1100,86,52]
// const tips=[];
// const totals=[];

// for (let i=0; i < bills.length;i++){
//    const tip=calcTip(bills[i]);
//    tips.push(tip);
//    totals.push(tip+bills[i]);
// };
// console.log(tips);
// console.log(totals);

// const calcAverage=function(arr){
//     let sum = 0;
//     for (let i=0; i < arr.length; i++){
//         // sum = sum + arr[i]
//         sum += arr[i];
//     }
//    return sum / arr.length;
// }
// console.log(calcAverage([2,3,7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

const numArr=[1,2,3,4,5,6,7,8,9,10]

const evenNum=function(num){
    for (let i=0;i < num.length;i++){
        if (num % 2 == 0){
            return num;
         }//else {
        //     return " ";
        // }
    }
};
console.log(evenNum(numArr));
