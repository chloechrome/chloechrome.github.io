var q= ['<i>You were righteous. You couldnt be swayed.</i> - Es, Alter Ego (SE)',
			"<i>First, I'll deal with that fucking Façade.</i> - Es, Alter Ego (ID)",
			"<i>See, there's more than one ending to the story.</i> - Es. Alter Ego (AE)",

			'<i>Living another day in disguise.</i> - Avenged Sevenfold, MIA (City of Evil)',
			
			"<i>Don't try to understand... knowing you, I'm probably wrong.</i> - Megadeth, In My Darkest Hour (So far, So good...So what!)",
			"<i>Loneliness is not only felt by fools.</i> - Megadeth, In My Darkest Hour (So far, So good...So what!)",
			"<i>Time has a way of taking time.</i> - Megadeth, In My Darkest Hour (So far, So good...So what!)",
			
			"<i>This is not up to you.</i> - Sum 41, No Reason (Chuck)",
			
			"<i>From the halls of the Vatican to the Runways of Truth, we are there. At the place called Climax, and the time called NOW. When it's done, let the gods sort it out!</i> - Postal Dude, POSTAL (Airforce Base)",
			
			'<i>Try to get a better understanding of things before you make your judgement.</i> - Khan, Metro 2033',
			'<i>You reap what you sow, Artyom. Force answers force, war breeds war, and death only brings death. To break this vicious circle one must do more than just act without any thought or doubt.</i> - Khan, Metro 2033',

			"<i>We don't have the luxury of your elevated morals anymore!</i> - Deraker, Chrysalis (13)",
			"<i>Reparations can't suffice. The Xunvirians murdered my people, so it's only fair I do the same to them.</i> - Terran, Chrysalis (13)",
			
			"<i>Leaving this world is not as scary as it sounds.</i> - Richard, Hotline Miami 2",
			"<i>Do you see this? ... Can you see my face? This is my true nature! You see, don't you? This is who I am! This is who we all are. We're animals! ... There's no denying it! A bunch of goddamn animals!</i> - The Colonel, Hotline Miami 2",
			
			"<i>We'll cast some light and you'll be alright</i> - José González, Crosses (Veneer)",
			
			"<i>When a door closes, a window opens... Or, something like that.</i> - Max Caulfield, Life is Strange",
			"<i>I wish I could stay in this moment forever. (...) But then it wouldn't be a moment.</i> - Max Caulfield, Life is Strange",
			"<i>I'd like to drop a bomb on Arcadia Bay and turn it to fucking glass.</i> - Chloe Price, Life is Strange",
			"<i> I'm in a nightmare and I can't wake up... unless I put myself to sleep.</i> - Kate Marsh, Life is Strange",
			"<i>Even angels need angels, Max.</i> - Kate Marsh, Life is Strange"];

const quoteselect = q[Math.floor(Math.random() * q.length)];

function quoteReel() {
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerHTML = `${quoteselect}`;
}

quoteReel();
setInterval(quoteReel, 24 * 60 * 60 * 1000); // 24 hours in milliseconds