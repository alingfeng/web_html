// JavaScript Document
function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(ev){
		var ev = ev || event;
		disX = ev.clientX - this.offsetLeft;
		disY = ev.clientY - this.offsetTop;
		
		document.onmouseomove = function(ev){
			var ev = ev || event;

			obj.style.left = ev.clientX - disX +'px';
			obj.style.top = ev.clientY - disY +'px';
		}
	}
}

