const username = document.querySelector('.Username');
const email = document.querySelector('.email');
const password = document.querySelector('.pwd');
const form = document.querySelector('.form');

//to check for if contraints are satisfied
form.addEventListener('submit' , function(event){
    event.preventDefault();

    validation();
   
});

function validation(){
    //get the value of all the form fields.
    const usernameValue = username.value.trim();
    const emailValue  = email.value.trim();
    const passwordValue = password.value.trim();
    
    //Set conditions to define validity 




    if(emailValue === '') {
		setErrorMsg(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorMsg(email, 'Not a valid email');
	} else {
		setSuccessMsg(email ,'well done');
	}
	

  //for username
  if(usernameValue===""){
    setErrorMsg( username , 'This field cannot be empty ')  }else{
    return setSuccessMsg(username ,'well done')
 }

     //for password
    if( passwordValue ===""){ 
        setErrorMsg( password ,'Password  cannot be null ')
    } else{
       return setSuccessMsg(password ,'well done')
    }
}


//the function defines form's state when not valid
function setErrorMsg( input ,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className ='form-control error';
    small.innerText = message


}
//the function defines form's state when valid
function setSuccessMsg(input,message){
    const formControl =  input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className='form-control success';
    small.innerText = message

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

