function checkMessage() {
    let message = document.getElementById("messageInput").value.trim();
    if (message === "") {
        alert("Messages cannot be empty!");
    } else {
        alert("Messages sent!");
    }
}