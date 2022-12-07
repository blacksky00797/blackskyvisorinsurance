let updateSection = document.querySelector("#update-contact");
let updateButton = document.querySelector(".user-info-wrapper .update-button");
let cancelButton = document.querySelector("#update-contact .update-contact-wrapper .right-items-wrapper .button-wrapper .cancel-button");

updateButton.addEventListener("click",e => {
    updateSection.setAttribute("style","display: flex");
});

cancelButton.addEventListener("click", e => {
    updateSection.setAttribute("style","display: none");
});