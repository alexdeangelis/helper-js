//https://www.youtube.com/watch?v=e57ReoUn6kM

var numOne = document.getElementById('num-one');

var numTwo = document.getElementById('num-two');

var addSum = document.getElementById('add-sum');

//numOne.addEventListener("click",function() {
//    alert('hi');
//})

//numOne.addEventListener("mouseenter",function() {
//    alert('hi');
//})

//numOne.addEventListener("mouseleave",function() {
//    alert('hi');
//})

//numOne.addEventListener("focus",function() {
//    alert('hi');
//})

//numOne.addEventListener("blur",function() {
//    alert('hi');
//})

////input event looks for anything changing in the value of an input
//numOne.addEventListener("input",add);
//numTwo.addEventListener("input",add);
//
//function add() {
//    //Anything that comes from an input is a string.
//    //parseFloat() turns the string into a number
//    //The || is OR. If the first value doesn't create a number, use 0 instead
//    var one = parseFloat(numOne.value) || 0; 
//    var two = parseFloat(numTwo.value) || 0;
//    //console.log(one,two);
//    //var sum = one + two;
//    addSum.innerHTML = "your sum is: " + (one+two);
//}

var simon = document.getElementById('simon');
var bruce = document.getElementById('bruce');
var ben = document.getElementById('ben');

simon.addEventListener('click', picLink)
bruce.addEventListener('click', picLink)
ben.addEventListener('click', picLink)


function picLink() {
    
    //console.log(this); 
    //this shows the element that has been clicked with this function
    var picID = this.attributes['data-img'].value;
    //this gets the data-img property from the element clicked
    //.value gets the value of the specific property
    //console.log(picID); 
    var pic = document.getElementById(picID);
    //this gets the element that has an id that matches the value of the data-img property
    console.log(pic);
    
    /*if(pic.className == 'hide') {
        hideAll();
        pic.className = '';
    } else {
        hideAll();
    }*/
    
}
/*
function hideAll() {
    //var allImages = document.querySelectorAll('img');
    var allImages = document.getElementsByTagName('img');
    //this gets all the images on the page
    console.log(allImages);
    //give all images the class of hide, before anything else happens
    for(var i = 0; i < allImages.length; i++) {
        allImages[i].className = 'hide';
    }
}*/





