// get reference to form elements
const form = document.getElementById("RegistrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const nameSuccess = document.getElementById("nameSuccess");
const emailSuccess = document.getElementById("emailSuccess");
const submissionSuccess = document.getElementById("submissionSuccess");

// Regular Expression pattern for email validation
// Checks for: Characters@characters domain
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Function to validate the name field
function validateName() {
    const nameValue = nameInput.value.trim(); // Remove whitespace

    // Check if the name is at least 2 characters long
    if(nameValue.length < 2) {
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
        nameError.style.display = "block";
        nameSuccess.style.display = "none";
        return false;
    } else {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
    nameError.style.display = "none";
    nameSuccess.style.display = "block";
    return true;
}
} 

// Function to validate the email field
function validateEmail() {
    const emailValue = emailInput.value.trim(); // Remove whitespace

    // Test the email against the regex pattern 
    if(!emailPattern.test(emailValue)) {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
        emailError.style.display = "block";
        emailSuccess.style.display = "none";
        return false;
    } else {
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
        emailError.style.display = "none";
        emailSuccess.style.display = "block";
        return true;
    }
}

// Add real time validation as user types in the name field
nameInput.addEventListener("input", validateName);

// Add real time validation as user types in the email field
emailInput.addEventListener("input", validateEmail);

// Handle form submission
form.addEventListener("submit", function(e){
    e.preventDefault(); // Prevent default form sumission

    // Validate both fields 
    const isNameValidte = validateName();
    const isEmailValidate = validateEmail();

    // If both fields are valid, show success message
    if (isNameValidte && isEmailValidate) {
        submissionSuccess.style.display = "block";

        // Optional: Reset the form after 2 seconds
        setTimeout(() => {
            form.reset();
            nameInput.classList.remove("valid");
            emailInput.classList.remove("valid");
            nameSuccess.style.display = "none";
            emailSuccess.style.display = "none";
            submissionSuccess.style.display = "none";
        }, 2000);   
    } 
});


