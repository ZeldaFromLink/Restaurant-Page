(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");n.src="assets/chef.png",n.alt="Chef",e.appendChild(t("Locally owned and operated for over 3 decades!")),e.appendChild(t("Home of Ichiraku's famous Ramen!")),e.appendChild(n)}())};const n=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("menu"),t.appendChild(function(t,e){const n=document.createElement("div");n.classList.add("menu-item");const c=document.createElement("h2");c.textContent="";const a=document.createElement("p");a.textContent="";const d=document.createElement("img");return d.src="assets/.png",d.alt="",n.appendChild(c),n.appendChild(d),n.appendChild(a),n}())}())},c=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="555 555 5555";const n=document.createElement("p");return n.textContent="123 Main",t.appendChild(e),t.appendChild(n),t}())};function a(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const d=document.createElement("h1");return d.classList.add("shop-name"),d.textContent="Ichiraku Ramen",t.appendChild(d),t.appendChild(function(){const t=document.createElement("nav"),d=document.createElement("button");d.textContent="Home",d.classList.add("button-nav"),d.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(d),e())}));const o=document.createElement("button");o.textContent="Menu",o.classList.add("button-nav"),o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(o),n())}));const s=document.createElement("button");return s.textContent="Contact",s.classList.add("button-nav"),s.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(s),c())})),t.appendChild(d),t.appendChild(o),t.appendChild(s),t}()),t}()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");return e.textContent="Copyright © 2021 Ichiraku Ramen",t.appendChild(e),t}()),a(document.querySelector(".button-nav")),e()}()})();