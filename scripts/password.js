function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (password === 'mono') {
		window.location.href = 'main.html';
	} 
	else {
		message.textContent = 'Incorrect password. Please try again.';
    }
}