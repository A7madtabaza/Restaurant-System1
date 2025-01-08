const existingUsers = ["existingUser@example.com"]; // Example existing user emails

document
  .getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

  
    // Get field values
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    const birthday = document.getElementById("Birthday").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("Phone").value;

    // Validation flags
    let isValid = true;

    // Username Validation
    if (/\s/.test(username)) {
      document.getElementById("usernameError").textContent =
        "Username must not contain spaces.";
      isValid = false;
    } else {
      document.getElementById("usernameError").textContent = "";
    }

    // Password Validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters long, include one number, one uppercase letter, and one special character.";
      isValid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    // Birthday Validation
    const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdayRegex.test(birthday)) {
      document.getElementById("birthdayError").textContent =
        "Birthday must be in the format YYYY-MM-DD.";
      isValid = false;
    } else {
      document.getElementById("birthdayError").textContent = "";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      isValid = false;
    } else if (existingUsers.includes(email)) {
      document.getElementById("emailError").textContent =
        "This email is already registered.";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    // Phone Validation
    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Phone number must start with 07 and be exactly 10 digits.";
      isValid = false;
    } else {
      document.getElementById("phoneError").textContent = "";
    }

    // If all validations pass
    if (isValid) {
      alert("Registration successful!");
      // Optionally save the new user data
      existingUsers.push(email); // Add to existing users
      console.log("New user registered:", {
        username,
        password,
        birthday,
        email,
        phone,
      });
    }
  });
