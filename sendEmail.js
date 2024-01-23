const form = document.querySelector('form');
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("phonenumber");
const mess = document.getElementById("message");

function sendEmail() {
    //string Template to display the sender details
    const bodyMessage = `
    Full Name: ${fullName.value} <br>
    Email: ${email.value} <br>
    Phone Number: ${phone.value} <br>
    Subject: ${subject.value}<br>
    Message: ${mess.value}<br>`;

    Email.send({
        secureToken:"9ba76b2c-969e-453f-86fb-0002d3319971",
        Host : "smtp.elasticemail.com",
        Username : "chadeyamorgan203@gmail.com",
        Password : "1BD25E7C05EB7CB218BE56EB2A31CD983859",
        To : 'chadeyamorgan203@gmail.com',
        From : 'chadeyamorgan203@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "message sent succesfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    );
}
//check user inputs
function checkInputs(){
    const inputs = document.querySelectorAll(".input")

        for(const input of inputs){
            if(inputs.value == ""){
                input.classlist.add("error");
                input.parentElement.classlist.add("error");
            }

            if(inputs [1].value = ""){
                checkEmail();
            }
            inputs[1].addEventListener("keyup", () => checkEmail())

            input.addEventListener("keyup", () => {
                if(input.value !==""){
                    input.classlist.remove("error");
                    input.parentElement.classlist.remove("error");
                }
                else{
                    input.classlist.add("error");
                    input.parentElement.classlist.add("error");
                }
            });
        }
}
//validate email format
function checkEmail(){
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

        if(!email.value.match(emailRegex)){
            input.classlist.add("error");
            input.parentElement.classlist.add("error");

            if(email.value !=""){
                errorTxtEmail.innerText ="Enter a valid email address";
            }
            else{
                errorTxtEmail.innerText ="Email address can't be blank";
            }
        }
        else{
            input.classlist.remove("error");
            input.parentElement.classlist.remove("error");
        }
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();
    if(!fullName.classList.contains("error") && !email.classList.contains("error") &&
    !subject.classList.contains("error") && !phone.classList.contains("error") &&
    !mess.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
});