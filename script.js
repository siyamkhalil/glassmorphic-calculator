// Reference the display element
const display = document.getElementById("display");

// Append numbers or operators to the screen expression
function appendValue(value) {
  // Prevent starting with mathematical operators improperly
  if (display.value === "" && ["+", "*", "/"].includes(value)) {
    return;
  }
  display.value += value;
}

// Clear the entire screen view back to neutral
function clearDisplay() {
  display.value = "";
}

// Backspace functionality (deletes the last character typed)
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the string expression safely
function calculateResult() {
  try {
    // If the screen is empty, do nothing
    if (display.value.trim() === "") return;

    // Evaluate mathematical string arithmetic expression
    let result = eval(display.value);

    // Handle instances where users divide numbers by zero infinity
    if (result === Infinity || result === -Infinity) {
      display.value = "Error";
    } else {
      // Fix complex decimals float rounding issues nicely
      display.value = Number(result.toFixed(4));
    }
  } catch (error) {
    // Fallback catch if code structure evaluation breaks
    display.value = "Error";
  }
}
