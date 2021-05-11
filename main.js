<script>

function nWC(x) {
	var fraction;
	if (x % 1 !== 0) {
		x = Number(x).toFixed(2)
	}
    var parts = x.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (parts.length !== 1) {
    	fraction = true;
    	parts = parts[0]+"."+parts[1];
    	//parts = Number(parts);
    }



    if (fraction === true) {

    }


    return parts;

}

function timeCalc() {
	var timed = document.querySelectorAll(".timed");
	for (var i = 0; i < timed.length; i += 1) {
		timed[i].innerHTML = "";
	}
	var birthday = new Date('6/12/2019 19:12');
	var now = new Date();
	var timeDiff = now.getTime() - birthday.getTime();

	var seconds = Math.round(timeDiff / 1000);
	var minutes = Math.round(seconds / 60);
	var hours = Math.round(minutes / 60);
	var days = Math.round(hours / 24);

	document.getElementById("seconds").innerHTML = nWC(seconds);
	document.getElementById("minutes").innerHTML = nWC(minutes);
	document.getElementById("hours").innerHTML = nWC(hours);
	document.getElementById("days").innerHTML = nWC(days);
};

timeCalc();

function cdtd() {
	timeCalc();
	var timer = setTimeout('cdtd()',1000);
};


cdtd();




</script>
