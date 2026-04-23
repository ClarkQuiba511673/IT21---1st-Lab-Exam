document.addEventListener('DOMContentLoaded', () => {

    const fullNameInput = document.getElementById('fullName');
    const yearLevelInput = document.getElementById('yearLevel');
    const courseInput = document.getElementById('course');
    const keyNInput = document.getElementById('keyN');

    const combinedPlaintextDisplay = document.getElementById('combinedPlaintext');
    const resultOutput = document.getElementById('resultOutput');

    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const clearBtn = document.getElementById('clearBtn');

    function getIdentityString() {
        const name = fullNameInput.value.trim();
        const year = yearLevelInput.value.trim();
        const course = courseInput.value.trim();
        
        if (!name || !year || !course) {
            alert("Error: All fields (Name, Year, Course) must be filled.");
            return null;
        }
        return `${name} | ${year} | ${course}`;
    }

    function runCipher(text, shift) {
        return text.split('').map(char => {

            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const isUpperCase = (code >= 65 && code <= 90);
                const base = isUpperCase ? 65 : 97;
               
                let processedCode = ((code - base + shift) % 26 + 26) % 26 + base;
                
                return String.fromCharCode(processedCode);
            }
          
            return char;
        }).join('');
    }

    encryptBtn.addEventListener('click', () => {
        const identity = getIdentityString();
        const n = parseInt(keyNInput.value);

        if (identity && validateKey(n)) {
            combinedPlaintextDisplay.value = identity; 
            resultOutput.value = runCipher(identity, n); 
        }
    });

    decryptBtn.addEventListener('click', () => {
        const identity = getIdentityString();
        const n = parseInt(keyNInput.value);

        if (identity && validateKey(n)) {
            combinedPlaintextDisplay.value = identity; 
            
            const encrypted = runCipher(identity, n);

            const decrypted = runCipher(encrypted, -n);
            
            resultOutput.value = decrypted;
        }
    });

    clearBtn.addEventListener('click', () => {
        fullNameInput.value = "";
        yearLevelInput.value = "";
        courseInput.value = "";
        keyNInput.value = "3";
        combinedPlaintextDisplay.value = "";
        resultOutput.value = "";
    });

    function validateKey(n) {
        if (isNaN(n) || n < 1 || n > 25) {
            alert("Error: Key (N) must be a number between 1 and 25.");
            return false;
        }
        return true;
    }
});