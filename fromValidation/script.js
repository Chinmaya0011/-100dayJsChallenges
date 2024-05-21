document.getElementById("submitBtn").addEventListener("click", () => {
    const formName = document.getElementById("name").value;
    const formEmail = document.getElementById("email").value;
    const formMobile = document.getElementById("mobile").value;
    const formAddress = document.getElementById("address").value;

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/; // Allows only alphabets and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const mobileRegex = /^\d{10}$/; // Validates 10 digit phone number
    // You can adjust the address regex according to your requirements

    // Test each field against its respective regex
    const isNameValid = nameRegex.test(formName);
    const isEmailValid = emailRegex.test(formEmail);
    const isMobileValid = mobileRegex.test(formMobile);
    // You can add validation for the address field similarly

    // Alert if any field is invalid
    if (!isNameValid) {
        alert("Please enter a valid name.");
        return;
    }
    if (!isEmailValid) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!isMobileValid) {
        alert("Please enter a valid mobile number.");
        return;
    }
    // You can add similar checks for other fields here

    // If all fields are valid, proceed with form submission or further actions
    alert("Form submitted successfully!");
});
