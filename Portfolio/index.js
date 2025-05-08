const form=document.querySelector('form');
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const mobile=document.getElementById("mobile");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");


function sendEmail(){
    const bodyMessage=`Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Number:${mobile.value}<br> Message:${mess.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "m.tanya.manu@gmail.com",
        Password : "AD83B6DEF6D876E6071E7859A7FAAA414EEB",
        To : 'm.tanya.manu@gmail.com',
        From : "m.tanya.manu@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
    
}

form.addEventListener("submit",(e) => { 
    e.preventDefault();

    sendEmail();
});