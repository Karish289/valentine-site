(function () {
    const correctPassword = "love";

    const entered = prompt("Enter the password 💌");

    if (entered !== correctPassword) {
        document.write(`
            <h1 style="text-align:center;margin-top:20%">
                ❌ Nope! This is private ❤️
            </h1>
        `);
        document.close();
    }
})();
