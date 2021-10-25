/* Add your JavaScript to this file */
windows.onload = funtion() 
{
  let btn = document.getElementsByClassName("button")[0];
  btn.addEventListener("click", function(e){
     e.preventDefault();
  var email = document.getElementById("email");
  var message = document.getElementsByClassName("message");
  
  var email =newemail.value;

  if (email=='email'){
      alert("Thank you! Your email address ${newemail} had been added to our mailing list!")
      return false;
    }    
  else
  {
      alert("Please enter a valid email address.")
  }


     } 
 )}
