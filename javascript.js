function setupcharacter() {
	//Body
	var characterbody = new Image();
	characterbody.src = "parts/body/body_" + document.getElementById('bodySlider').value + ".png";

	//Pants
	var characterpants = new Image();
	characterpants.src = "parts/pants/pants_" + document.getElementById('pantsSlider').value + ".png";

	//Shirt
	var charactershirt = new Image();
	charactershirt.src = "parts/shirt/shirt_" + document.getElementById('shirtSlider').value + ".png";

	//Shoes
	var charactershoes = new Image();
	charactershoes.src = "parts/shoes/shoes_" + document.getElementById('shoesSlider').value + ".png";

	//Hair
	if (document.getElementById('hairSlider').value > 0) {
		var characterhair = new Image();
		characterhair.src = "parts/hair/hair_" + document.getElementById('hairSlider').value + ".png";
	}

	//Hat
	if (document.getElementById('hatSlider').value > 0) {
		var characterhat = new Image();
		characterhat.src = "parts/hat/hat_" + document.getElementById('hatSlider').value + ".png";
	}

	//Weapon
	if (document.getElementById('weaponSlider').value > 0) {
		var characterweapon = new Image();
		characterweapon.src = "parts/weapon/weapon_" + document.getElementById('weaponSlider').value + ".png";
	}

	//Shield
	if (document.getElementById('shieldSlider').value > 0) {
		var charactershield = new Image();
		charactershield.src = "parts/shield/shield_" + document.getElementById('shieldSlider').value + ".png";
	}

	//Body Loaded
	characterbody.onload = function () {
		buildcharacter();
	}

	//Pants Loaded
	characterpants.onload = function () {
		buildcharacter();
	}

	//Shirt Loaded
	charactershirt.onload = function () {
		buildcharacter();
	}

	//Shoes Loaded
	charactershoes.onload = function () {
		buildcharacter();
	}

	//Hair Loaded
	if (document.getElementById('hairSlider').value > 0) {
		characterhair.onload = function () {
			buildcharacter();
		}
	}

	//Hat Loaded
	if (document.getElementById('hatSlider').value > 0) {
		characterhat.onload = function () {
			buildcharacter();
		}
	}

	//Weapon Loaded
	if (document.getElementById('weaponSlider').value > 0) {
		characterweapon.onload = function () {
			buildcharacter();
		}
	}

	//Shield Loaded
	if (document.getElementById('shieldSlider').value > 0) {
		charactershield.onload = function () {
			buildcharacter();
		}
	}

	function buildcharacter() {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = 16;
		canvas.height = 16;
		//Draw Body
		ctx.drawImage(characterbody, 0, 0);
		//Draw Pants
		ctx.drawImage(characterpants, 0, -1);
		//Draw Shirt
		ctx.drawImage(charactershirt, 0, 1);
		//Draw Shoes
		ctx.drawImage(charactershoes, 0, 0);
		//Hair
		if (document.getElementById('hairSlider').value > 0) {
			ctx.drawImage(characterhair, 0, 0);
		}
		//Draw Hat
		if (document.getElementById('hatSlider').value > 0) {
			ctx.drawImage(characterhat, 0, 0);
		}
		//Weapon
		if (document.getElementById('weaponSlider').value > 0) {
			ctx.drawImage(characterweapon, 0, 0);
		}
		//Shield
		if (document.getElementById('shieldSlider').value > 0) {
			ctx.drawImage(charactershield, (charactershield.width / 2) - 2, 0);
		}
	}

}

function randomizecharacter() {
	//Body
	if (document.getElementById("randomizebody").checked == false) {
		document.getElementById('bodySlider').value = Math.floor(Math.random() * 8) + 1;
		document.getElementById('bodySliderNumberText').innerHTML = document.getElementById('bodySlider').value + '/' + document.getElementById('bodySlider').max;
	}
	//Pants
	if (document.getElementById("randomizepants").checked == false) {
		document.getElementById('pantsSlider').value = Math.floor(Math.random() * 8) + 1;
		document.getElementById('pantsSliderNumberText').innerHTML = document.getElementById('pantsSlider').value + '/' + document.getElementById('pantsSlider').max;
	}
	//Shirt
	if (document.getElementById("randomizeshirt").checked == false) {
		document.getElementById('shirtSlider').value = Math.floor(Math.random() * 110) + 1;
		document.getElementById('shirtSliderNumberText').innerHTML = document.getElementById('shirtSlider').value + '/' + document.getElementById('shirtSlider').max;
	}
	//Shoes
	if (document.getElementById("randomizeshoes").checked == false) {
		document.getElementById('shoesSlider').value = Math.floor(Math.random() * 12) + 1;
		document.getElementById('shoesSliderNumberText').innerHTML = document.getElementById('shoesSlider').value + '/' + document.getElementById('shoesSlider').max;
	}
	//Hair
	if (document.getElementById("randomizehair").checked == false) {
		document.getElementById('hairSlider').value = Math.floor(Math.random() * 80);
		document.getElementById('hairSliderNumberText').innerHTML = document.getElementById('hairSlider').value + '/' + document.getElementById('hairSlider').max;
	}
	//Hat
	if (document.getElementById("randomizehat").checked == false) {
		document.getElementById('hatSlider').value = Math.floor(Math.random() * 36) + 1;
		document.getElementById('hatSliderNumberText').innerHTML = document.getElementById('hatSlider').value + '/' + document.getElementById('hatSlider').max;
	}
	//Weapon
	if (document.getElementById("randomizeweapon").checked == false) {
		document.getElementById('weaponSlider').value = Math.floor(Math.random() * 110);
		document.getElementById('weaponSliderNumberText').innerHTML = document.getElementById('weaponSlider').value + '/' + document.getElementById('weaponSlider').max;
	}
	//Shield
	if (document.getElementById("randomizeshield").checked == false) {
		document.getElementById('shieldSlider').value = Math.floor(Math.random() * 60);
		document.getElementById('shieldSliderNumberText').innerHTML = document.getElementById('shieldSlider').value + '/' + document.getElementById('shieldSlider').max;
	}

	setupcharacter();
}

function saveImage() {
	var tempname = "";
	var test = document.querySelectorAll('[class=slider]'), i;
	for (i = 0; i < test.length; ++i) {
		tempname += "-" + test[i].value;
	}
	var download = document.getElementById("download");
	download.download = "Character_Builder" + tempname + ".png"
	var imageurl = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
	download.setAttribute("href", imageurl);
}
