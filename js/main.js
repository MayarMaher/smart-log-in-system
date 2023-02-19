//log in

 var email = document.querySelector('#signinEmail');
 var pass=  document.querySelector('#signinPassword');
 var incorrect=document.querySelector('#incorrect');
 var btn1=document.querySelector('.btn1');
 var hello=document.querySelector('.hello');




 function login(){

   if(   email.value==''|| pass.value==''){
        incorrect.innerHTML=('all inputs are required')
   }
   
   else if(isExistUser() == false){

    incorrect.innerHTML=('incorrect email or password')
    
   }
   else{
     btn1.href=('welcome.html');
    
   }
    
   }
   
    
    function isExistUser (){
        for(var i=0; i<allUsers.length;i++){
           if( email.value==allUsers[i].email && pass.value==allUsers[i].pass){
            localStorage.setItem('currentUser',JSON.stringify(allUsers[i].name))
            return true;
           }
        }
          return false;
    }
    if(btn1!=null){
        btn1.addEventListener('click',login);
    }
   

    if( hello!=null){
        hello.innerHTML= `welcome  ${JSON.parse(localStorage.getItem('currentUser'))}`
    }


// sign up

var signupEmail= document.querySelector('#signupEmail');
var signupName= document.querySelector('#signupName');
var signupPassword= document.querySelector('#signupPassword');
var exist=document.querySelector('#exist');
var button = document.querySelector('.signUp');

 var allUsers=[];

 if(localStorage.getItem('Users')!=null)
 {
    allUsers =JSON.parse(localStorage.getItem('Users'));
 }

 function signUp(){

    var User={
        name:signupName.value,
        pass:signupPassword.value,
        email:signupEmail.value,

    }
    if( signupEmail.value==''||signupName.value==''||signupPassword.value==''){
      exist.innerHTML='All inputs is required'
    }else if(existEmail()){
        exist.innerHTML='Email already exists'
    }
    
    else{
        allUsers.push(User)
        localStorage.setItem('Users',JSON.stringify(allUsers))
        exist.innerHTML ='Success'
    }

 }

if(button!=null){

    button.addEventListener('click',signUp);
}


function existEmail(){
    for(var i=0;i<allUsers.length;i++){

        if(signupEmail.value==allUsers[i].email){
            return true;
        }
    }

    return false ;
}








