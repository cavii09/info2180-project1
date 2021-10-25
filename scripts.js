/* Add your JavaScript to this file */
windows.onload = funtion() 
{
  let btn = document.getElementsByClassName("button")[0];
  btn.addEventListener("click", function(e){
     e.preventDefault();
  var email = document.getElementById("email");
  var message = document.getElementsByClassName("message");

  if (email.value != ""){
      message.textContent = "Thank you! Your email address ${newemail} had been added to our mailing list!"
  }    
  else
  {
      message.textContent = "Please enter a valid email address."
  }

     } 
 )}
