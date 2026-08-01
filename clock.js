function update() {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}
setInterval(update, 1000);