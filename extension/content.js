window.addEventListener("load", main, false);

function main(e) {
    if(location.hostname === "twitter.com" && location.pathname === "home") {
	const jsInitCheckTimer = setInterval(jsLoaded, 1000);
	function jsLoaded() {
	    var elements = document.querySelectorAll('span');
	    var fe = Array.from(elements).filter((element)=>{return element.textContent === 'フォロー中'; });
            if (fe != null) {
		clearInterval(jsInitCheckTimer);
		fe[0].click();
	    }}}};
