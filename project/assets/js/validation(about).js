function validateForm(){
	var name = document.forms["inquiry"]["name"].value;
	var email = document.forms["inquiry"]["email"].value;


	if (name.length<1) {
        alert("Name must be filled out");
        return false;
    }
    if (email.length<1) {
        alert("Email must be filled out");
        return false;

    }          
    if(name.length<1 || email.length<1){
       	return false;
    }            
}