//https://www.youtube.com/watch?v=orAS-MBh5f4

//function go() {
//    alert('hi');
//}
//
//
//
//var myList = ['apples', 12, go];

//myList[3] = 'Pinapples';
//
//myList[0] = 'Watermelon';
//
//var myList = ['apples', 12, ['Will','Laura']];

//var myList = ['apples','oranges','bananas'];
//
//////Gives first element from an array & removes it from array
////myList.shift();
//
//////Gives last element from an array & removes it from array
////myList.pop();
//
//
////forEach doesn't work on some older browsers
//
//myList.forEach(function(value, index) {
//    //console.log(value, index);
//    alert('I have ' + value + ' in my shopping bag');
//});


////while loop
//
////as long as whatever is in a while loop is true, it wil execute
//
//var times = 0;
//while ( times < 11 ) {
//    console.log('tried it', times);
//    times++;
//}

//do while loop
//basically the same thing as the while loop in reverse
//do while loop will run at least one time, while the while loop checks first before running

//var times = 0;
//
//do {
//    console.log('tried it', times);
//    times++;
//} while (times < 10);

//for loop

//for(setup, comparrsion, change) {
//    
//}

//for (var i=0; i < 10; i++) {
//    console.log('i is',i);
//}

var myList = ['Apples','Oranges','Bananas'];

for (var i=0; i < myList.length; i++) {
    console.log('You have ' + myList[i] + ' in your basket!'); 
}