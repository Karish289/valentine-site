// Change this to your password
const correctPassword = "be-mine";

// Ask user for password
const enteredPassword = prompt("Enter the password 💌");

// If wrong → hide the site
if (enteredPassword !== correctPassword) {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:sans-serif;
            background:#fff0f5;
            text-align:center;
        ">
            <div>
                <h1>❌ Wrong password</h1>
                <p>This page is only for someone special ❤️</p>
            </div>
        </div>
    `;
}
