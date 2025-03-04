const password = document.getElementById("password");
const button = document.getElementById("submit");
button.onclick = () => {
    const userInput =password.value;
    if (userInput === "4456") {
        alert("you've escaped!");
    } else {
        alert("youre stuck forever!");
    }
}