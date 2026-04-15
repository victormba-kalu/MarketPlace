var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`theme-toggle`);if(!e){console.error(`Theme toggle button not found`);return}e.addEventListener(`click`,()=>{document.documentElement.classList.toggle(`dark`),e.textContent=document.documentElement.classList.contains(`dark`)?`☀️`:`🌙`}),localStorage.getItem(`theme`)===`dark`&&(document.documentElement.classList.add(`dark`),e.textContent=`☀️`)});var n=`modulepreload`,r=function(e){return`/MarketPlace/`+e},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(t.map(t=>{if(t=r(t,a),t in i)return;i[t]=!0;let o=t.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.href===t&&(!o||r.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:n,o||(l.as=`script`),l.crossOrigin=``,l.href=t,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,n)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},o=[];async function s(){try{o=(await(await fetch(`https://randomuser.me/api/?results=12`)).json()).results.map((e,t)=>({id:t+1,name:`${e.name.first} ${e.name.last}`,role:[`UI/UX Designer`,`Digital Marketer`,`Web Developer`,`Business Analyst`,`Content Strategist`,`Social Media Manager`][t%6],rate:50+Math.floor(Math.random()*40),image:e.picture.large,rating:parseFloat((4.6+Math.random()*.4).toFixed(1))})),await c();let e=await a(()=>Promise.resolve().then(()=>u),void 0);e.renderFeaturedProviders(o.slice(0,3)),e.renderBrowseProviders(o),console.log(`✅ Providers rendered successfully`)}catch(e){console.error(`Failed to fetch providers:`,e)}}async function c(){try{let e=await(await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=30`)).json();o.forEach(t=>{t.reviews=e.sort(()=>Math.random()-.5).slice(0,Math.floor(Math.random()*3)+2).map(e=>({text:e.body.substring(0,140)+`...`,author:`Happy Client`}))}),console.log(`✅ Second API (reviews) loaded successfully`)}catch(e){console.error(`Failed to fetch reviews:`,e)}}function l(e){let t=o.find(t=>t.id===e);if(!t)return;let n=t.reviews&&t.reviews.length>0?t.reviews.map(e=>`
      <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-2xl mb-3 text-sm">
        <p class="italic text-gray-600 dark:text-gray-300">"${e.text}"</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">- ${e.author}</p>
      </div>
    `).join(``):`<p class="text-gray-500 dark:text-gray-400 italic text-sm">No reviews yet.</p>`,r=`
    <div id="provider-modal" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full max-h-[82vh] overflow-hidden shadow-2xl flex flex-col">

        <!-- Image -->
        <div class="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-3 flex-shrink-0">
          <img src="${t.image}" 
               class="max-h-full max-w-full object-contain" 
               alt="${t.name}">
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 p-6 overflow-y-auto">
          <h2 class="text-2xl font-bold mb-1">${t.name}</h2>
          <p class="text-emerald-600 dark:text-emerald-400 text-xl mb-6">${t.role}</p>

          <!-- Info -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Hourly Rate</p>
              <p class="text-2xl font-semibold">$${t.rate}</p>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Rating</p>
              <p class="text-2xl font-semibold">★ ${t.rating}</p>
            </div>
          </div>

          <!-- Reviews -->
          <div class="mb-6">
            <h4 class="font-medium mb-3">Client Reviews</h4>
            <div class="max-h-32 overflow-y-auto space-y-3 pr-2">
              ${n}
            </div>
          </div>
        </div>

        <!-- Fixed Buttons -->
        <div class="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3 flex-shrink-0">
          <button onclick="document.getElementById('provider-modal').remove()" 
                  class="flex-1 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Close
          </button>
          <button onclick="alert('Contact request sent to ${t.name}!')" 
                  class="flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-medium transition-colors">
            Contact Expert
          </button>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML(`beforeend`,r)}window.showProviderModal=l;var u=t({addViewAllButton:()=>m,initMobileMenu:()=>d,renderBrowseProviders:()=>p,renderFeaturedProviders:()=>f});function d(){let e=document.getElementById(`mobile-menu-btn`),t=document.getElementById(`mobile-menu`);e&&t&&e.addEventListener(`click`,()=>{t.classList.toggle(`hidden`),e.textContent=t.classList.contains(`hidden`)?`☰`:`✕`})}function f(e){let t=document.getElementById(`featured-grid`);t&&(t.innerHTML=``,e.forEach(e=>{t.innerHTML+=`
      <div onclick="showProviderModal(${e.id})" 
           class="provider-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer group" data-id="${e.id}">
        
        <!-- Smaller framed image -->
        <div class="p-4">
          <div class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <img src="${e.image}" 
                 class="w-full h-44 object-contain bg-gray-50 dark:bg-gray-900" 
                 alt="${e.name}">
          </div>
        </div>

        <div class="px-6 pb-6">
          <h3 class="font-semibold text-lg mb-1">${e.name}</h3>
          <p class="text-emerald-600 dark:text-emerald-400">${e.role}</p>
          <div class="mt-4 flex justify-between text-sm">
            <span class="font-medium">$${e.rate}/hr</span>
            <span class="text-yellow-500">★ ${e.rating}</span>
          </div>
        </div>
      </div>
    `}))}function p(e){let t=document.getElementById(`browse-grid`);t&&(t.innerHTML=``,e.forEach(e=>{t.innerHTML+=`
      <div onclick="showProviderModal(${e.id})" 
           class="provider-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer group" data-id="${e.id}">
        
        <!-- Smaller framed image -->
        <div class="p-4">
          <div class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <img src="${e.image}" 
                 class="w-full h-44 object-contain bg-gray-50 dark:bg-gray-900" 
                 alt="${e.name}">
          </div>
        </div>

        <div class="px-6 pb-6">
          <h3 class="font-semibold text-lg mb-1">${e.name}</h3>
          <p class="text-emerald-600 dark:text-emerald-400">${e.role}</p>
          <div class="mt-4 flex justify-between text-sm">
            <span class="font-medium">$${e.rate}/hr</span>
            <span class="text-yellow-500">★ ${e.rating}</span>
          </div>
        </div>
      </div>
    `}))}function m(){let e=document.querySelector(`#browse-grid`)?.parentElement;if(!e)return;let t=e.querySelector(`.view-all-btn`);t&&t.remove();let n=document.createElement(`button`);n.className=`view-all-btn mt-12 mx-auto block px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl font-medium transition-colors text-lg shadow-md`,n.textContent=`View All Providers`,n.onclick=()=>{let e=document.getElementById(`browse-grid`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`})},e.appendChild(n)}function h(){let e=document.getElementById(`search-input`),t=document.getElementById(`category-filter`),n=document.getElementById(`price-filter`),r=document.getElementById(`rating-filter`),i=()=>{let i=(e?.value||``).toLowerCase().trim(),a=t?.value.toLowerCase()||``,s=parseFloat(n?.value||100),c=parseFloat(r?.value||0),l=o;i&&(l=l.filter(e=>e.name.toLowerCase().includes(i)||e.role.toLowerCase().includes(i)||i.includes(`web`)&&e.role.toLowerCase().includes(`developer`))),a&&(l=l.filter(e=>{let t=e.role.toLowerCase();return a===`design`?t.includes(`ui`)||t.includes(`ux`):a===`marketing`?t.includes(`marketing`)||t.includes(`digital`):a===`development`?t.includes(`developer`)||t.includes(`web`):!1})),l=l.filter(e=>e.rate<=s),c>0&&(l=l.filter(e=>e.rating>=c)),p(l)};e&&e.addEventListener(`input`,i),t&&t.addEventListener(`change`,i),n&&n.addEventListener(`input`,()=>{document.getElementById(`price-value`).textContent=`$${n.value}`,i()}),r&&r.addEventListener(`input`,()=>{document.getElementById(`rating-value`).textContent=`${r.value} ★`,i()})}document.addEventListener(`DOMContentLoaded`,()=>{d(),s().then(()=>{setTimeout(()=>{m()},600)}),h()});