Student Identity Cipher (Web Dev Lab Exam)

A web-based implementation of the Caesar Cipher designed to encrypt and decrypt
student identity information. This project was developed as a Laboratory Exam
requirement using pure HTML, CSS, and JavaScript.

🚀 Features

  - Identity Combination: Automatically formats inputs into a single string:
    FULL NAME | YEAR | COURSE.
  - Caesar Cipher Logic: Implements the mathematical formulas
    E = (X + N) \pmod{26} and D = (X - N) \pmod{26}.
  - Input Validation: Ensures the shift key (N) is between 1 and 25 and checks
    for empty fields.
  - Character Protection: Only letters (A-Z) are shifted; spaces, numbers, and
    symbols (like the | separator) remain unchanged.
  - Responsive Dark UI: A clean, modern interface inspired by professional
    developer tools.

🛠️ Technologies Used

  - HTML5: For semantic structure.
  - CSS3: For custom styling and dark-mode aesthetics.
  - Vanilla JavaScript (ES6+): For encryption logic and DOM manipulation (no
    frameworks used).

📖 How Encryption & Decryption Works

Encryption works by replacing each letter in the plaintext with a letter a fixed
number of positions (N) down the alphabet. For example, with a shift of 3, 'A'
becomes 'D'. Decryption is the inverse process, where the encrypted letter is
shifted back by the same value (N) to return to the original character. In this
app, the modulo 26 operator is used to ensure the alphabet "wraps around" (from
Z back to A), while non-alphabetic characters are ignored by the cipher to
maintain the readability of the identity format.

📸 Sample Preview

| Input   | Output (Shift N=3) |
| :------ | :----------------- |
| \`ALICE | 1                  |

📂 Project Structure

├── index.html   # Application structure and UI
├── styles.css   # Dark theme and layout styling
├── script.js    # Logic for cipher and input handling
└── README.md    # Documentation

⚙️ How to Run

1.  Clone this repository or download the files.
2.  Open index.html in any modern web browser (Chrome, Firefox, Edge).
3.  Enter your Full Name, Year Level, Course, and a Key (1–25).
4.  Click Encrypt to see the cipher text or Decrypt to return to the original
    plaintext.

⚖️ Rubric Compliance

- [x] Encryption: Letters shift and wrap (Z → A).
- [x] Decryption: Correctly returns original plaintext.
- [x] Identity-Based: Uses the FULL NAME | YEAR | COURSE format.
- [x] Validation: Handles empty fields and invalid keys.
- [x] Security: No eval() used; safe DOM manipulation.

Developed as part of Laboratory Exam 1.
