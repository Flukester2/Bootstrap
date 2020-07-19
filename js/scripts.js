function checkForm() {

    var err = 0;

    if (document.getElementById("FormInput0").value == '') {

    document.getElementById("FormInput0").style.border = "1px solid #FF0000";
    document.getElementById("FormInput0_err").innerHTML = "Enter data";
    err = 1;

}

if (document.getElementById("FormInput2").value.length < 5) {

document.getElementById("FormInput2").style.border = "1px solid #FF0000";
document.getElementById("FormInput2").innerHTML = "length < 5";
err = 1;

}

var email = document.getElementById('FormInput1').value;
emailTest = "^[_.0-9a-z-]+@([0-9a-z][0-9a-z_-]+.)+[a-z]{2,4}$";
var regex = new RegExp(emailTest); 

if (!regex.test(email)) {

document.getElementById("FormInput1").style.border = "1px solid #FF0000";
document.getElementById("FormInput1_err").innerHTML = "invalid e-mail";
err = 1;

}

    if ( err == 1 ) {
       document.getElementById('ok').setAttribute("disabled","disabled");
    } else {
       document.getElementById('ok').removeAttribute("disabled");
    }
}

function setBorder(id) {

document.getElementById(id).style.border = "1px solid #C0C0C0";
document.getElementById(id+"_err").innerHTML = "";

}

document.getElementById('ok').addEventListener("mouseover", checkForm);