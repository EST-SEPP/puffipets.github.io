const formOpenBtb = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector(".form_container"),
formCloseBtb = document.querySelector(".form_close"),
signupBtb = document.querySelector("#signup"),
loginBtb = document.querySelector("#login"),
pwShowHuden = document.querySelectorAll(".pw_hide");

formOpenBtb.addEventListener("click", () => home.classList.add("show"));
formCloseBtb.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }else {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
});
});

signupBtb.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtb.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});