const userDate = document.querySelector("#userDate");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector(".result")

function removeDash() {
    const modifiedDate = userDate.value.replaceAll("-","");
    return modifiedDate;
}

function palindromeChecker(){
    var dateToBeChecked = removeDash();
    var modifiedDatelength = (dateToBeChecked.length);

    for(var i=0; i<modifiedDatelength/2; i++) {
        if (dateToBeChecked[i] !== dateToBeChecked[modifiedDatelength - 1 - i]) {
            result.innerText = "Damn!!! Your Birthday is not palindrome \n 😒😢😒";
            break;          
        }
        else {
            result.innerText = "Woah!!! Your Birthday is palindrome \n 🥳🥳🥳";
            break;
        }
     }  
}

checkBtn.addEventListener("click",palindromeChecker);