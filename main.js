// start menu click 
let togglemenu = document.querySelector(".toggle-menu");
let ul = document.querySelector("#ul");
//event
togglemenu.addEventListener("click", view);
function view() {
    ul.classList.toggle("ulview")
}

// start changable landing 
let otherContent = [{h2:"some thing some thing some thing", p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, accusamus porro! Laborum ipsum ea, quae voluptas odit vero laudantium reprehenderit soluta labore maiores ut ducimus autem exercitationem harum. Totam, dicta!"}, {h2:"Hello World!We Are Kasper We Make Art.", p:"Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tinciduntnibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."}, {h2:"some thing else some thinge else some thing else", p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, accusamus porro! Laborum ipsum ea, quae voluptas odit vero laudantium reprehenderit soluta labore maiores ut ducimus autem exercitationem harum. Totam, dicta!"}];
let bullets = [document.querySelector("#bullet-1"),document.querySelector("#bullet-2"), document.querySelector("#bullet-3")];
let h2 = document.querySelector("#landing-h2");
let p = document.querySelector("#landing-p");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let index = 1;
let bulletIndex = 1;

function overlayFunc() {
    if (index== 2) {
        rightArrow.classList.add("arrows-overlay");
      }
     else if (index ==0) {
        leftArrow.classList.add("arrows-overlay");
     }
     else {
        rightArrow.classList.remove("arrows-overlay");
        leftArrow.classList.remove("arrows-overlay");
     }
}
function bulletClass(opertor = "-") {
    bullets[bulletIndex].classList.remove("active")
    bullets[bulletIndex + opertor].classList.add("active")
    bulletIndex += opertor
    
}
function lChange() {
    if (otherContent[index - 1] !== undefined) {
        h2.innerHTML = otherContent[index - 1].h2;
        p.innerHTML = otherContent[index - 1].p;
        bulletClass(-1);
        index -= 1;
        overlayFunc()
    }
}
function rChange() {
    if (otherContent[index + 1] !== undefined) {
        h2.innerHTML = otherContent[index + 1].h2;
        p.innerHTML = otherContent[index + 1].p;
        bulletClass(+1);
        index += 1;
        overlayFunc()
    }
}
leftArrow.addEventListener("click", lChange);
rightArrow.addEventListener("click", rChange);
// end changable landing

// the scroll to top btn 
let scrollUpBtn = document.querySelector(".arrow-up");
scrollUpBtn.addEventListener("click", () => {scrollTo(0,0)});

// start shuffle
let shuffle_all = document.querySelector(".all");
let shuffle_app = document.querySelector(".app");
let shuffle_photo = document.querySelector(".photo");
let shuffle_web = document.querySelector(".web");
let shuffle_print = document.querySelector(".print");
let app1 = document.querySelector(".app1");
let app2 = document.querySelector(".app2");
let app3 = document.querySelector(".app3");
let photo1 = document.querySelector(".photo1");
let photo2 = document.querySelector(".photo2");
let web1 = document.querySelector(".web1");
let web2 = document.querySelector(".web2");
let print1 = document.querySelector(".print1");
let print2 = document.querySelector(".print2");
let shuffle_categories = [shuffle_all, shuffle_app, shuffle_photo, shuffle_web, shuffle_print];
let images = [app1, app2, app3, photo1, photo2, web1, web2, print1]
let activeIndex = 0;

function shuffleFunc(categ, index, whiteList) {
    shuffle_categories[activeIndex].classList.remove("active");
    activeIndex = index;
    categ.classList.add("active");

    if(categ !== shuffle_all) {
        
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add("shuffle-none");
        }
        for (let number = 0; number < whiteList.length; number++){
            whiteList[number].classList.remove("shuffle-none");
            whiteList[number].classList.add("max-width");
        }
    } 
    else{
        for(let j = 0; j < images.length; j++) {
            images[j].classList.remove("shuffle-none");
        }
    }
}
// end shuffle
//start stats counters

const counters = document.querySelectorAll('.number');
const speed = 200; // The lower the slower

function statsCountersFunc() {
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = Math.ceil(target / speed);
        // if(target == 17) {inc == 1}

		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});}

  
//end stats counters
// start quate text effect
let quateTxt = "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tinciduntnibh pulvinara.";
let quate = document.querySelector("#quote");
var i = 0;
function textQuateEffect() {
    let testIntravel = setInterval(() => {
        if(quate.textContent !== quateTxt) {
        quate.textContent += quateTxt[i];
        i++
      }
    }, 55);
   };
// end quate text effect 
// start contact
let name_input = document.querySelector(".input-name");
let name_label = document.querySelector(".name-label");

let email_input = document.querySelector(".input-email");
let email_label = document.querySelector(".email-label");
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let textarea_input = document.querySelector(".input-textarea");
let textarea_label = document.querySelector(".textarea-label");

name_input.addEventListener("focusout", () => {
    if(name_input.value != "") {
        name_label.classList.add("nLabel");
    }
    else {
        name_label.classList.remove("nLabel");
    }
})
email_input.addEventListener("focusout", () => {
    if(email_input.value != "") {
        email_label.classList.add("eLabel");
    }
    else {
        email_label.classList.remove("eLabel");
    }
    if(regexEmail.test(email_input.value)){
        document.querySelector("#email-exclamation-mark").style.display = "none";
        document.querySelector("#email-warning-text").style.display = "none";
    }
    else{
        document.querySelector("#email-exclamation-mark").style.display = "block";
        document.querySelector("#email-warning-text").style.display = "block";
    }
});
textarea_input.addEventListener("focusout", () => {
    if(textarea_input.value != "") {
        textarea_label.classList.add("textLabel");
    }
    else {
        textarea_label.classList.remove("textLabel");
    }
});
// end contact
window.onscroll = () => {
    if (window.scrollY >= 900) {
        scrollUpBtn.style.display = "block";   
    } 
    else {
        scrollUpBtn.style.display = "none";
    }

    if(window.scrollY > 4100){
        statsCountersFunc()
    }

    if(window.scrollY >= 5513) {
        textQuateEffect()
    }

    }