const formData = {
    email: "",
    message: "",
};
const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);

setFormValues();

function handleInput(event) {
    formData.email = event.currentTarget.email.value;
    formData.message = event.currentTarget.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Please, fill all fields");
        return;
    };
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    formEl.reset();
}

function setFormValues() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    formEl.elements.email.value = storageData.email || "";
    formEl.elements.message.value = storageData.message || "";
}