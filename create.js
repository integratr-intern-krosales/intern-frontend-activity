function validateform(){  
    let firstname=document.myform.firstname.value;  
    let lastname=document.myform.lastname.value;  
    let username=document.myform.username.value;     
  
    if (firstname==null || firstname==""){  
      alert("Firstname can't be blank");  
      return false;   
      }  

    if (lastname==null || lastname==""){  
        alert("Lastname can't be blank");  
        return false;   
        } 
    
    if (username==null || username==""){  
            alert("Username can't be blank");  
        return false;   
    }

    
}


function passwordValidation() {
    let password=document.myform.password.value; 
    let confirmpassword=document.myform.confirmpassword.value; 
    const minNumber = 5;
    const re  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const reUppercase = /^(?=.*[A-Z]).*$/;
    const reLowercase = /^(?=.*[a-z]).*$/;
    const reNumber = /^(?=.*[0-9]).*$/;
    const reSymbol =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
 
    if (password==null || password==""){  
        alert("Password can't be blank");  
        return false; 
    }
 
    if (password.length < minNumber ) {  
        alert("Error: Password length must be at least 12 characters and must not be less than 5");
        return false;  
        }  

    if(!reUppercase.test(password)){
        alert("Error: Password must contain Uppercase character.");
        return false;
        }

    if(!reLowercase.test(password)){
        alert("Error: Password must contain Lowercase character.");
        return false;
        }

    if(!reNumber.test(password)){
        alert("Error: Password must contain Number.");
        return false;
        }

     if(!reSymbol.test(password)){
         alert("Error: Password must contain symbols @343 ");
         return false;
    }

    else if (password != confirmpassword){
        alert("Passwords not match! Please try again.")
        return false;
    }   

    else {
        alert ('You are now Registered!');
    }
}

    const submit = document.querySelector('submit');
    addEventListener('myFunction()', event => {
    event.preventDefault();
    });
