const formData = {
    email: "",
    message: "",
};
const formEl = document.querySelector(".feedback-form");
let email = formEl.elements.email.value;
let message = formEl.elements.message.value;

email = JSON.parse(localStorage.getItem("feedback-form-state")).email ?? "";
message = JSON.parse(localStorage.getItem("feedback-form-state")).message ?? "";

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
    if (email === "" || message === "") {
        alert("Please, fill all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formEl.reset();
});