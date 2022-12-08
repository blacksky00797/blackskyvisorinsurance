let updateSection = document.querySelector("#update-contact");
let updateContactSection = document.querySelector("#update-contact .update-contact-wrapper");
let successUpdateSection = document.querySelector("#update-contact .success-update-wrapper");
let updateContactButton = document.querySelector(".user-info-wrapper .update-button");
let updateButton = document.querySelector("#update-contact .update-contact-wrapper .right-items-wrapper .button-wrapper .update-button")
let cancelButton = document.querySelector("#update-contact .update-contact-wrapper .right-items-wrapper .button-wrapper .cancel-button");
let okButton = document.querySelector("#update-contact .success-update-wrapper .ok-button-wrapper");

updateContactButton.addEventListener("click",e => {
    updateSection.setAttribute("style","display: flex");
});

cancelButton.addEventListener("click", e => {
    updateSection.setAttribute("style","display: none");
});

updateButton.addEventListener("click",e => {
    updateContactSection.setAttribute("style","display: none");
    successUpdateSection.setAttribute("style","display: flex");
});

okButton.addEventListener("click",e => {
    updateSection.setAttribute("style","display: none");
    successUpdateSection.setAttribute("style","display: none");
});