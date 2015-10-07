
function palindrome() {
	var userInput = prompt("Type in a palindrome... or not");

    var string = userInput.replace(/[^A-Za-z0-9]/ig, "").toLowerCase();
  
    var check = string.split('').reverse().join('');
    
    if(string != check) {
      alert('Not a palindrome');
    } else {
      alert('Yup a palindrome');
    } 
}

var btn = document.getElementById('btn');

btn.addEventListener('click', palindrome)
