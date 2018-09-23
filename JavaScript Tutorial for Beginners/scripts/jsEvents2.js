//Get the ul with the ID of checklist

var checklist = document.getElementById('checklist');

// This gets all lis within checklist
var items = checklist.querySelectorAll("li"); 

// This gets all inputs within checklist
var inputs = checklist.querySelectorAll("input"); 

//Loop through each li item within the checklist 
for(i = 0; i < items.length; i++) {
    //get each item with items array
    items[i].addEventListener('click', editItem);
    //Adds an event listener when user clicks somewhere else
    inputs[i].addEventListener('blur', updateItem);
    inputs[i].addEventListener('keypress', itemKeypress);
}

function editItem() {
    //Add the class of edit to the element, which hides the span and shows the input
    this.className = 'edit';
    //Creates a variable of the input within the selected li
    var input = this.querySelector('input');
    input.focus();
    //console.log('my current value is... ', input.value.length);
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    //console.log('We blurred',this.value);
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className  = '';
}

function itemKeypress (event) {
    //console.log(event.which);
    if (event.which == 13) {
        updateItem.call(this);
    }
}