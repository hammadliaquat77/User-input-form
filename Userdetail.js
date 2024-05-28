
// function drone(){
//     var Name = document.getElementById('name').value
//     var fatherName = document.getElementById('Fathername').value
//     var Email = document.getElementById('email').value
//     var UserName = document.getElementById('userName').value
//     var password = document.getElementById('password').value
//     var cnic = document.getElementById('Cnic').value
//     var adress = document.getElementById('Adress').value
//     var city = document.getElementById('City').value
//     var Qualification = document.getElementById('qualification').value
//     var contact = document.getElementById('Contact').value

//     // console.log(`name: ${Name}  userName: ${userName} email: ${Email} adress: ${dress} 
//     // city: ${city} cnic: ${cnic} qualification: ${Qualification} password: ${password}
//     //  contact: ${contact} Fathername: ${fatherName}`);

//     console.log("name ===>"+ Name);
//     console.log("Fathername ===>"+ fatherName);
//     console.log("username ===>"+ UserName);
//     console.log("email ===>"+ Email);
//     console.log("Adress ===>"+ adress);
//     console.log("City ===>"+ city);
//     console.log("Cnic ===>"+ cnic);
//     console.log("Qualification ===>"+ Qualification);
//     console.log("Password ===>"+ password);
//     console.log("Contact ===>"+ contact);

// }




















function data(){
    var userName = document.getElementById('userName').value
    var user = document.getElementById('name').value
    var email = document.getElementById('email').value
    var passw = document.getElementById('password').value
    var num =  document.getElementById('Num').value
  
            console.log("User ===>  " + user);
            console.log("UserName ===>  " + userName);
            console.log("Email ===>  " + email);
            console.log("MObile Number ===>  " + num);
            console.log("Password ===>  " + passw);
            
            document.getElementById('userName').value =""
            document.getElementById('name').value =""
            document.getElementById('email').value =""
            document.getElementById('password').value =""
            document.getElementById('Num').value =""
        


        }    

    function pass() {
    
 let passw = document.getElementById('password');
 let image = document.getElementById('img');
    
if (passw.type == 'password') {
    passw.type = 'text'
    image.src = 'img/1.png'

}else{
    passw.type = 'password'
    image.src = 'img/2.png'
}

}


document.addEventListener('keypress' , function(e){

    if(e.key === 'Enter'){
    data()
    }
})



