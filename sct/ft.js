function footer() {
	const element = document.getElementById("footer");
	element.innerHTML = '© 2024-2025 Chloe-Jane "Monochrome" - Site Version 3.1<br>| <b><a class="link" href="index.html">Home</a></b> | <b><a class="link" href="mailto:monochloe@proton.me">Contact</a></b> | Last update: 26|10|25 '
}

function embedd() {
	const element = document.getElementById("embedd");
	element.innerHTML = `<meta property="og:image" content="" />
										 <meta property="og:image:width" content="1053" />
										 <meta property="og:image:height" content="984" />
										 <meta property="og:site_name" content="chloechrome.github.io" />
										 <meta property="og:type" content="object" />
										 <meta property="og:title" content="MonochromeHD music & stuff" />
										 <meta property="og:url" content="https://chloechrome.github.io" />
										 <meta property="og:description" content="boobada" />`
}

document.addEventListener("DOMContentLoaded", function() {
    footer();
	embedd();
});