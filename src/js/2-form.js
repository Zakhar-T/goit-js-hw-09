const formData = {
    email: "",
    message: "",
};
const formEl = document.querySelector(".feedback-form");
let emailEl = formEl.elements.email;
let messageEl = formEl.elements.message;

const storageData = JSON.parse(localStorage.getItem("feedback-form-state")) || formData;
emailEl.value = storageData.email;
messageEl.value = storageData.message;

formEl.addEventListener("input", handleInput);

function handleInput(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value;
    }
    if (event.target.name === "message") {
        formData.message = event.target.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (emailEl.value === "" || messageEl.value === "") {
        alert("Please, fill all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formEl.reset();
});