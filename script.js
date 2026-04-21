const display = document.querySelector(".small-box");

    // Sab buttons select karo
    const buttons = document.querySelectorAll(".main-container button");

    // Function to safely calculate expression
    function calculateExpression(exp) {
      try {
        exp = exp.replace(/%/g, "/100"); // % ko divide by 100 me convert karo
        return eval(exp); // ⚠️ demo ke liye eval use kiya
      } catch {
        return "Error";
      }
    }

    // Button click event
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        let value = btn.textContent.trim();

        if (value === "AC") {
          display.textContent = ""; // sab clear
        } 
        else if (value === "DEL") {
          display.textContent = display.textContent.slice(0, -1); // last char delete
        } 
        else if (value === "=") {
          display.textContent = calculateExpression(display.textContent); // calculate
        } 
        else if (value === "()") {
          // smart bracket handling
          let open = (display.textContent.match(/\(/g) || []).length;
          let close = (display.textContent.match(/\)/g) || []).length;
          if (open === close) {
            display.textContent += "(";
          } else {
            display.textContent += ")";
          }
        } 
        else {
          display.textContent += value; // number ya operator add karo
        }
      });
    });