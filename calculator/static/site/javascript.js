function filterState() {
    // Declare variables
    var state_select, table, tr, td, i, txtValue;
    state_select = document.getElementById("select-state").value;
    console.log(state_select);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (state_select == "ALL") {
                tr[i].style.display = "";
            } else if (txtValue.toUpperCase().indexOf(state_select) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


var computation = "";
function buttonPress(num) {
    computation += num;
    document.getElementById('display').value = computation;
}
function enter() {
    var string_number = "";
    var num1 = 0;
    var operator = "";
    computation = computation.replace(/\s/g,'');
    computation = computation.replace(/,/g, '');
    var num2 = 0;
    for(i=0; i<computation.length; i++) {
        if(Number.isInteger(parseInt(computation[i]))) {
            string_number += computation[i];
        }
        else if (computation[i].includes('x') || computation[i].includes('*')) {
            operator = computation[i]
            num1 = parseInt(string_number);
            string_number = "";
        }
        else if (computation[i].includes('+')) {
            operator = computation[i]
            num1 = parseInt(string_number);
            string_number = "";
        }
        else if (computation[i].includes('-')) {
            operator = computation[i]
            num1 = parseInt(string_number);
            string_number = "";
        }
        else if (computation[i].includes('/')) {
            operator = computation[i]
            num1 = parseInt(string_number);
            string_number = "";
        }
        else {
            num1 = parseInt(string_number);
            string_number = "";
        }
    }
    num2 = parseInt(string_number);
    console.log(num1);
    console.log(operator);
    console.log(num2);
    var output = 0;
    switch(operator) {
        case '+':
            output = num1+num2;
            break;
        case '-':
            output = num1-num2;
            break;
        case 'x':
            output = num1*num2;
            break;
        case '*':
            output = num1*num2;
            break;
        case '/':
            output = num1/num2;
            break;
    }
    console.log(output);
    document.getElementById('display').value = output;
}
function populateDisplay() {
    computation = document.getElementById("display").value;
    document.getElementById('display').value = computation;
}
document.getElementById('display').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("EnterButton").click();
    }
})
function removeText() {
    var current_text = document.getElementById('display').value;
    if(current_text == 'Enter your shit') {
        document.getElementById('display').value = '';
    }
};