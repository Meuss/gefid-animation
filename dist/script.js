"use strict";function load_animation(){single_animations("#solution",4)}function single_animations(t,e){var n=document.querySelector(t);n.classList.add("hidden"),window.setTimeout(function(){n.classList.remove("hidden");var t=n.getTotalLength();n.style.transition=n.style.WebkitTransition="none",n.style.strokeDasharray=t+" "+t,n.style.strokeDashoffset=t,n.getBoundingClientRect(),n.style.transition=n.style.WebkitTransition="stroke-dashoffset "+e+"s linear",n.style.strokeDashoffset="0"},300)}window.onload=setTimeout(load_animation(),2e3),document.querySelector("button").addEventListener("click",function(){load_animation()});