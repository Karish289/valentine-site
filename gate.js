// ===== PASSWORD GATE =====
const PASSWORD = "love"; // change this

const entered = prompt("Enter the password 💌");

// If password is wrong → completely stop page
if (entered !== PASSWORD) {

    // Wipe the entire document before anything else runs
    document.documentElement.innerHTML = `
        <head>
            <title>Private</title>
            <style>
                body {
                    margin:0;
                    height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:#fff0f5;
                    font-family:sans-serif;
                    text-align:center;
                }
            </style>
        </head>
        <body>
            <div>
                <h1>❌ Wrong password</h1>
                <p>This page is only for someone special ❤️</p>
            </div>
        </body>
    `;

    // 🔴 THIS LINE STOPS ALL OTHER SCRIPTS (important!)
    throw new Error("Access denied");
}
