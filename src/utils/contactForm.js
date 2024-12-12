const form = document.getElementById("form");
const successMessage = document.createElement("p");
successMessage.id = "successMessage";
successMessage.className = "success-message";
successMessage.style.display = "none";
form.appendChild(successMessage);

const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    message: document.getElementById("messageError"),
};

// Utility functions for displaying and hiding error messages
function errorMessage(element, message, inputField) {
    element.textContent = message;
    element.style.display = "block";
    inputField.classList.add("error-border");
    inputField.classList.remove("accepted");
}

function hideError(element, inputField) {
    element.textContent = "";
    element.style.display = "none";
    inputField.classList.remove("error-border");
    inputField.classList.add("accepted");
}

// Event listener for the form submission
form.addEventListener("submit", (event) => {
    let isValid = true;

    // Reset all error messages and success messages
    for (const key in errors) {
        const errorElement = errors[key];
        const inputField = document.getElementById(key);
        hideError(errorElement, inputField);
    }
    successMessage.style.display = "none";

    // Validation patterns
    const namePattern = /^[a-zA-Z]{3,}(?:\s[a-zA-Z].?|\s[a-zA-Z]+)*$/;
    const emailPattern = /^[a-zA-Z0-9._-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Updated pattern
    const messagePattern = /^.{10,}$/;

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (!namePattern.test(name)) {
        errorMessage(errors.name, "Please enter a valid name.", document.getElementById("name"));
        isValid = false;
    }

    // Validate email
    if (!emailPattern.test(email) || email.split('@')[0].length < 5) {
        errorMessage(errors.email, "Please enter a valid email.", document.getElementById("email"));
        isValid = false;
    }

    // Validate message
    if (!messagePattern.test(message)) {
        errorMessage(errors.message, "Message must be at least 10 characters.", document.getElementById("message"));
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        // Create a new form data object
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("_captcha", "false");

        // Send the form data to the server
        fetch("https://formspree.io/f/xpwzeovp", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.display = "block";

            // Clear the form fields and reset styles
            form.reset();

            for (const key in errors) {
                const inputField = document.getElementById(key);
                inputField.classList.remove("accepted");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    } else {
        // Prevent form submission if validation fails
        event.preventDefault();
    }
});