function getByClass(clsName,parent){
	var Oparent=parent?document.getElementById(parent):document,
	eles=[];
	element=Oparent.getElementsByTagName('*');
	for (var i = 0; i < element.length; i++) {
		if (element[i].className==clsName) {
			eles.push(element[i]);
		}
		
	}
	return eles;
}
window.onload=menus;
function menus(){
	var Otitle=getByClass('navlist','menu');
	for (var i= 0; i<Otitle.length; i++) 
	{
		Otitle[i].onclick=function(event){
			event=event||window.event;
			var node=this.parentNode.childNodes[3]
			if ((node.style.display=="none")) {
				node.style.display="block";
				this.parentNode.style.listStyleImage="url(/img/open_14x14.png)";

			}
			else{
				this.parentNode.style.listStyleImage="url(/img/close_14x14.png)";
				node.style.display="none";	
			}
			// console.log(this.parentNode.getElementsByTagName("li"));
		}
	}
	var nav=document.getElementById("nav");
		nav.onclick=function(event){
		event=event||window.event;
		var uls=this.parentNode.getElementsByTagName("ul")[0];
		if ((uls.style.display=="none")) {
			// window.setTimeout(5000);
			uls.style.display="block";
			 this.parentNode.style.listStyleImage="url(/img/open_14x14.png)"
		}
		else{
			uls.style.display="none";
			this.parentNode.style.listStyleImage="url(/img/close_14x14.png)";
		}
		console.log(this.parentNode.getElementsByTagName("ul")[0]);
	}
}