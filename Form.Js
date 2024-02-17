<script>
function validateSigninform() {
    var username = document.getElementById("signinUsername").value;
    var password = document.getElementById("signinPassword").value;
    if (username === "" || password === "") {
        alert("Ops! Both Username and Password required.");
        return false;
    } else {
        alert("Signin successful!");
        return true;
    }
}
function validateSignupform() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var email = document.getElementById("signupEmail").value;
    var age = document.getElementById("signupAge").value;
    var fullName = document.getElementById("signupFullName").value;
    var address = document.getElementById("signupAddress").value;
    var city = document.getElementById("signupCity").value;

    if (username === "" || password === "" || email === "" || age === "" || fullName === "" || address === "" || city === "")   {
        alert("Ops! All fields required");
        return false;
    }
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
        alert("For the password to be strong, it must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long");
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (isNaN(age) || age < 18 || age > 100) {
        alert("Age must be a number between 18 and 100");
        return false;
    }

    alert("Signup successful!");
    return true;
}
document.getElementById("signinform").addEventListener("submit", function(event) {
    if (!validateSigninform()) {
        event.preventDefault();
    }
});
document.getElementById("signupform").addEventListener("submit", function(event) {
    if (!validateSignupform()) {
        event.preventDefault();
    }
});
</script>