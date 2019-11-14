//alert("This is a test!")
/*function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}*/


// testing below

/*const name = document.getElementById("email")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    let messages = []
    if (email.value === "" || name.value == null)
   
    e.preventDefault()
})*/

function ValidateEmail(inputText) //passing paramenter to be input text.
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailFormat))
    {
        alert("You have entered a valid email address!"); //The pop up alert for a valid email address
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("Please enter a valid email"); //also show the red explamation icon with a highlighted red imput box
        document.form1.text.focus();
        return false;
    }
 
}


