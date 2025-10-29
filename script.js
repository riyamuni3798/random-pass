const passwordEl = document.getElementById("password");
    const copyBtn = document.getElementById("copyBtn");
    const generateBtn = document.getElementById("generateBtn");
    const lengthRange = document.getElementById("lengthRange");
    const lengthValue = document.getElementById("lengthValue");
    const uppercaseEl = document.getElementById("uppercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}<>?/|";

    lengthRange.addEventListener("input", () => {
      lengthValue.textContent = lengthRange.value;
    });

    generateBtn.addEventListener("click", () => {
      const length = parseInt(lengthRange.value);
      const includeUpper = uppercaseEl.checked;
      const includeNum = numbersEl.checked;
      const includeSym = symbolsEl.checked;

      passwordEl.value = generatePassword(length, includeUpper, includeNum, includeSym);
    });

    copyBtn.addEventListener("click", () => {
      if (passwordEl.value) {
        navigator.clipboard.writeText(passwordEl.value);
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
      }
    });

    function generatePassword(length, upper, number, symbol) {
      let chars = lowercaseChars;
      if (upper) chars += uppercaseChars;
      if (number) chars += numberChars;
      if (symbol) chars += symbolChars;

      let password = "";
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
    }