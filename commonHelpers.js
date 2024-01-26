import{S as d,i as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");let c=new d(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});a.addEventListener("submit",p);function p(i){i.preventDefault(),u.innerHTML="",l.classList.remove("is-hidden");const o=a.elements.search.value.trim();y(o).then(r=>{if(r.hits.length===0)return h.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});g(r.hits),c.on("show.simplelightbox"),c.refresh()}).catch(r=>{console.log(r)}).finally(()=>{l.classList.add("is-hidden")}),a.reset()}function y(i){const o="https://pixabay.com",r="/api/",n=new URLSearchParams({key:"35439381-dc6c31f5e4218074de9a0ab23",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${n}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(i){const o=i.map(({largeImageURL:r,webformatURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`<li class="gallery-item"> 
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${n}" alt="${e}" />
                <div class="wrap">
                    <p><b>Likes:</b> </br>${t}</p>
                    <p><b>Views:</b> </br>${s}</p>
                    <p><b>Coments:</b> </br>${f}</p>
                    <p><b>Downloads:</b> </br>${m}</p>
                </div>
            </a>
        </li>`).join("");u.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
