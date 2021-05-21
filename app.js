let contDownDay = new Date('march 20, 2022 12:00:00').getTime();
const dayy = document.getElementById('dd');
const hoer = document.getElementById('hoer');
const ment = document.getElementById('ment');
const secon = document.getElementById('secon');

let contDown = setInterval(function() {
	let day = new Date().getTime();
	let theDay = contDownDay - day;

	let dday = Math.floor(theDay / (1000 * 60 * 60 * 24));

	let huer = Math.floor((theDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let mentt = Math.floor((theDay % (1000 * 60 * 60)) / (1000 * 60));
	let seconn = Math.floor((theDay % (1000 * 60)) / 1000);
	dayy.innerHTML = dday;
	hoer.innerHTML = huer;
	ment.innerHTML = mentt;
	secon.innerHTML = seconn;
}, 1000);
