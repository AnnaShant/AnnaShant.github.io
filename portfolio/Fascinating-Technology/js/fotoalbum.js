var tab;
var tabContent;

window.onload=function() {
	tabContent=document.getElementsByClassName('tabs__tabContent');
	tab=document.getElementsByClassName('tabs__tab');
	hideTabsContent(1);
}

function hideTabsContent(a) {
	for (var i=a; i<tabContent.length; i++) {
		tabContent[i].classList.remove('tabs__show');
		tabContent[i].classList.add('tabs__hide');
		tab[i].classList.remove('tabs__whiteborder');
	}
}

document.getElementById('tabs').onclick=function (event) {
	var target=event.target;
	if (target.className=='tabs__tab') {
		for (var i=0; i<tab.length; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains('tabs__hide')) {
		hideTabsContent(0);
		tab[b].classList.add('tabs__whiteborder');
		tabContent[b].classList.remove('tabs__hide');
		tabContent[b].classList.add('tabs__show');
	}
}


var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("tabs__mySlides");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}

	 slides[slideIndex-1].style.display = "block";
}


var slideIndex2=1;
showSlides2(slideIndex2);

function plusSlides2(n){
	showSlides2(slideIndex2 += n);
}

function currentSlide2(n){
	showSlides2(slideIndex2 = n);
}

function showSlides2(n){
	var a;
	var slides2 = document.getElementsByClassName("tabs__mySlides-2");

	if(n > slides2.length){
		slideIndex2 = 1;
	}
	if(n < 1){
		slideIndex2 = slides2.length;
	}
	for(a=0; a<slides2.length; a++){
		slides2[a].style.display = "none";
	}
	 slides2[slideIndex2-1].style.display = "block";
}


var slideIndex3=1;
showSlides3(slideIndex3);

function plusSlides3(n){
	showSlides3(slideIndex3 += n);
}

function currentSlide3(n){
	showSlides3(slideIndex3 = n);
}

function showSlides3(n){
	var b;
	var slides3 = document.getElementsByClassName("tabs__mySlides-3");

	if(n > slides3.length){
		slideIndex3 = 1;
	}
	if(n < 1){
		slideIndex3 = slides3.length;
	}
	for(b=0; b<slides3.length; b++){
		slides3[b].style.display = "none";
  }

	 slides3[slideIndex3-1].style.display = "block";
}
