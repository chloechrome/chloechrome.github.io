var q= ['<i>You were righteous. You couldnt be swayed.</i> - Es, Alter Ego (SE)',
			"<i>First, I'll deal with that fucking Façade.</i> - Es, Alter Ego (ID)",
			"<i>See, there's more than one ending to the story.</i> - Es. Alter Ego (AE)",

			'<i>Living another day in disguise.</i> - Avenged Sevenfold, MIA (City of Evil)',
			
			"<i>Don't try to undertsand... knowing you, I'm probably wrong.</i> - Megadeth, In My Darkest Hour (So far, So good...So what!)",
			
			"<i>From the halls of the Vatican to the Runways of Truth, we are there. At the place called Climax, and the time called NOW. When it's done, let the gods sort it out!</i> - Postal Dude, POSTAL (Airforce Base)",
			
			"<i>Come on, help me with these iron wings/We're gonna fly so high we hear the angels sing.</i> - The Devil Makes Three, Bangor Mash (Longjohns, Boots and a Belt)",
			
			'<i>Try to get a better understanding of things before you make your judgement.</i> - Khan, Metro 2033',
			'<i>You reap what you sow, Artyom. Force answers force, war breeds war, and death only brings death. To break this vicious circle one must do more than just act without any thought or doubt.</i> - Khan, Metro 2033',
			"<i>It appears that the devastation we brought upon ourselves was complete; Heaven, Hell and Purgatory were atomized as well. So when a soul leaves the body it has nowhere to go, and must remain here, in the Metro. A harsh, but not undeserved atonement for our sins, wouldn't you agree?</i> - Khan, Metro 2033",

			"<i>We don't have the luxury of your elevated morals anymore!</i> - Deraker, Chrysalis (13)",
			"<i>Reparations can't suffice. The Xunvirians murdered my people, so it's only fair I do the same to them.</i> - Terran, Chrysalis (13)",
			"<i>Having been a god I couldn't but welcome this new, simpler existence</i> - Terran, Chrysalis (16)",
			
			"<i>Leaving this world is not as scary as it sounds.</i> - Richard, Hotline Miami 2",
			"<i>You'll never get the big picture, and it's all your own fault.</i> - Richard, Hotline Miami",
			"<i>Do you see this? ... Can you see my face? This is my true nature! You see, don't you? This is who I am! This is who we all are. We're animals! ... There's no denying it! A bunch of goddamn animals!</i> - The Colonel, Hotline Miami 2"];

const quoteselect = q[Math.floor(Math.random() * q.length)];

function quoteReel() {
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerHTML = `${quoteselect}`;
}

quoteReel();
setInterval(quoteReel, 24 * 60 * 60 * 1000); // 24 hours in milliseconds