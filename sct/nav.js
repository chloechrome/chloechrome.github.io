function nav() {
	const element = document.getElementById("navcolumn");
	element.innerHTML = `<div class='internav' id='nav'><b style='font-size:18;'>Navigation</b><br><br>
											<a class='link' href='index.html'>Homepage</a><br>
											<div hidden>Random Page</div>
											<a class='link' href=''>Updates</a><br>
										</div>
										<div class='internav' id='content'><b style='font-size:18;'>Content</b><br><br>
											<a class='link' href=''>Events</a><br>
											<a class='link' href=''>Locations</a><br>
											<a class='link' href=''>Themes</a><br>
											<a class='link' href=''>Units</a><br></div>
										<div class='internav' id=''><b style='font-size:18;'>Discord</b><br><br>
											<a class="link" href="https://discord.gg/9YnMcJz8Gm" target="_blank">The Achromatic Collective</a></div>`
}

document.addEventListener("DOMContentLoaded", function() {
    nav();
});