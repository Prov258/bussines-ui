"use strict";

const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__nav");

menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle("active");
    menuBody.classList.toggle("active");
});

/////////////////////////////////////////////////////////////////////////////

// function initMap() {
//     let locations = [
//         [new google.maps.LatLng(51.5, -0.12)],
//         [new google.maps.LatLng(51.5, -0.18)],
//         [new google.maps.LatLng(51.5, -0.25)],
//     ];
//     let options = {
//         center: locations[0][0],
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     let map = new google.maps.Map(document.getElementById("map"), options);
//     let icon = {
//         url: 'img/icons/map.svg',
//         scaledSize: new google.maps.Size(18, 20),
//         anchor: new google.maps.Point(9, 10)
//     }
//     for(let i = 0; i < locations.length; i++){
//         let marker = new google.maps.Marker({
//             icon: icon,
//             position: locations[i][0],
//             map: map,
//         });
//     }
// }
// if(document.querySelector("#map")){
//     initMap();
// }

/////////////////////////////////////////////////////////////////////////////

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > header.offsetHeight){
        header.classList.add("fixed");
        document.body.style.paddingTop = `${header.offsetHeight}px`;
    }else{
        header.classList.remove("fixed");
        document.body.style.paddingTop = 0;
    }
})

/////////////////////////////////////////////////////////////////////////////

const filterLinks = document.querySelectorAll("[data-filter]");
const filterElems = document.querySelectorAll(".content-news__column");

document.querySelector(".news__tabs").addEventListener("click", function(e){
    if(e.target.hasAttribute("data-filter")){
        e.preventDefault();
        const filterAttr = e.target.getAttribute("data-filter");

        filterLinks.forEach((link) => {
           link.classList.remove("active");
        });
        e.target.classList.add("active");

        filterElems.forEach((elem) => {
            elem.style.display = "block";
            if(!elem.classList.contains(filterAttr) && filterAttr != "all-f"){
                elem.style.display = "none";
            }
        });
        
    }
});

/////////////////////////////////////////////////////////////////////////////

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 60,
    delay: 0,
    duration: 400, 
    easing: 'ease',
    once: true, 
    mirror: false,
    anchorPlacement: 'top-bottom',
  
  });