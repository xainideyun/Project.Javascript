/**
 * BOM
 * @authors Your Name (you@example.org)
 * @date    2017-07-25 07:17:59
 * @version $Id$
 */
var a;
window.onload = function () {
	var ul1 = document.getElementById("ul1");
	var btn1 = document.getElementById("btn1");
	var input1 = document.getElementById("input1");
	btn1.onclick = function(){
		ul1.appendChild(createLi());
	};
	btn2.onclick = function(){
		var selectedLi = document.getElementsByClassName("liStyle");
		if(selectedLi.length === 0)return;

		// ul1.insertBefore(createLi(), selectedLi.length === 0 ? null : selectedLi[0]);
		ul1.insertBefore(createLi(), selectedLi[0].nextSiBling)
	};
	ul1.onclick = function(e){
		for(var i = 0, len = ul1.childNodes.length; i < len; i++){
			ul1.childNodes[i].className = "";
		}
		e.target.className = "liStyle";
	};
	function createLi(){
		var text = input1.value;
		var newli = document.createElement("li");
		newli.innerHTML = text;
		return newli;
	};


	

};