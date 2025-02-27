document.addEventListener("DOMContentLoaded", function () {
    let result = document.getElementById("result");

    // Handle button clicks
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.value;

            if (value === "=") {
                try {
                    // Check if the expression ends with a percentage symbol
                    if (result.value.includes("%")) {
                        let expression = result.value.replace("%", "");
                        result.value = eval(expression) / 10; // Calculate percentage
                    } else {
                        result.value = eval(result.value); // Evaluate the expression
                    }
                } catch (e) {
                    result.value = "Error"; // Handle invalid expressions
                }
            } else if (value.toLowerCase() === "c") {
                result.value = ""; // Clear the display
            } else if (value === "DEL") {
                result.value = result.value.slice(0, -1); // Delete last character
            } 
            //indicate togglre like positive or negative like +200 press +/- button output will be -200 same another positive to negative
            else if (value === "+/-") {
                if (result.value !== "") {
                    if (result.value.startsWith("-")) {
                        result.value = result.value.substring(1); // Remove the "-" sign (make positive)
                    } else {
                        result.value = "-" + result.value; // Add the "-" sign (make negative)
                    }
                }
            
            
            } //end positive and negative and start %
            
            //
            
            
            //
            else if (value === "%") {
                // Append "%" to the result value
                result.value += "%"; // Display % sign for the user
            } else {
                result.value += value; // Append number or operator
            }
            //
            
            
           
        });
    });
});
