function validateExpression() {
    const selectedOption = document.getElementById("validationOption").value;
    let regexPattern;
    let validationMessage;

    switch (selectedOption) {
        case "Email":
            regexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            break;
        case "Phone Number":
            regexPattern = /^\d{11}$/;
            break;
        case "Post Code":
            regexPattern = /^\d{4}$/;
            break;
            
    }

    const userInput = prompt(`Enter a ${selectedOption}:`);

    if (regexPattern.test(userInput)) {
        validationMessage = `${selectedOption} is valid.`;
    } else {
        validationMessage = `${selectedOption} is invalid.`;
    }

    document.getElementById("validationResult").textContent = validationMessage;
}