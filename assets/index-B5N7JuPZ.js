(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`theme-toggle`);e&&(e.addEventListener(`click`,()=>{document.documentElement.classList.toggle(`dark`),e.textContent=document.documentElement.classList.contains(`dark`)?`☀️`:`🌙`;let t=document.documentElement.classList.contains(`dark`);localStorage.setItem(`theme`,t?`dark`:`light`)}),localStorage.getItem(`theme`)===`dark`&&(document.documentElement.classList.add(`dark`),e.textContent=`☀️`))});function e(e){let t=a.find(t=>t.id===e);if(!t)return;let n=t.reviews&&t.reviews.length>0?t.reviews.map(e=>`
      <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-2xl mb-3 text-sm">
        <p class="italic text-gray-600 dark:text-gray-300">"${e.text}"</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">- ${e.author}</p>
      </div>
    `).join(``):`<p class="text-gray-500 dark:text-gray-400 italic text-sm">No reviews yet.</p>`,r=`
    <div id="provider-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full max-h-[88vh] overflow-hidden shadow-2xl flex flex-col">

        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">${t.name}</h2>
          <button 
            onclick="document.getElementById('provider-modal').remove()" 
            class="text-4xl leading-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            ×
          </button>
        </div>

        <!-- Image -->
        <div class="h-52 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4 flex-shrink-0">
          <img src="${t.image}" 
               class="max-h-full max-w-full object-contain rounded-2xl" 
               alt="${t.name}">
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-6 overflow-y-auto">
          <p class="text-emerald-600 dark:text-emerald-400 text-xl mb-6">${t.role}</p>

          <!-- Info Grid -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Hourly Rate</p>
              <p class="text-3xl font-semibold">$${t.rate}</p>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Rating</p>
              <p class="text-3xl font-semibold">★ ${t.rating}</p>
            </div>
          </div>

          <!-- Reviews Section -->
          <div>
            <h4 class="font-semibold mb-4 text-gray-900 dark:text-white">Client Reviews</h4>
            <div class="max-h-40 overflow-y-auto space-y-3 pr-2">
              ${n}
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
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
  `;document.body.insertAdjacentHTML(`beforeend`,r)}window.showProviderModal=e;function t(){let e=document.getElementById(`mobile-menu-btn`),t=document.getElementById(`mobile-menu`);e&&t&&e.addEventListener(`click`,()=>{t.classList.toggle(`hidden`),e.textContent=t.classList.contains(`hidden`)?`☰`:`✕`})}function n(e){let t=document.getElementById(`featured-grid`);t&&(t.innerHTML=``,e.forEach(e=>{t.innerHTML+=`
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
    `}))}function r(e){let t=document.getElementById(`browse-grid`);t&&(t.innerHTML=``,e.forEach(e=>{t.innerHTML+=`
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
    `}))}function i(){let e=document.querySelector(`#browse-grid`)?.parentElement;if(!e)return;let t=e.querySelector(`.view-all-btn`);t&&t.remove();let n=document.createElement(`button`);n.className=`view-all-btn mt-12 mx-auto block px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl font-medium transition-colors text-lg shadow-md`,n.textContent=`View All Providers`,n.onclick=()=>{let e=document.getElementById(`browse-grid`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`})},e.appendChild(n)}var a=[];async function o(){let e=document.getElementById(`loading-spinner`);e&&e.classList.remove(`hidden`);try{a=(await(await fetch(`https://randomuser.me/api/?results=12`)).json()).results.map((e,t)=>({id:t+1,name:`${e.name.first} ${e.name.last}`,role:[`UI/UX Designer`,`Digital Marketer`,`Web Developer`,`Business Analyst`,`Content Strategist`,`Social Media Manager`][t%6],rate:50+Math.floor(Math.random()*40),image:e.picture.large,rating:parseFloat((4.6+Math.random()*.4).toFixed(1))})),await s(),n(a.slice(0,3)),r(a)}catch{}finally{e&&e.classList.add(`hidden`)}}async function s(){try{let e=await(await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=30`)).json();a.forEach(t=>{t.reviews=e.sort(()=>Math.random()-.5).slice(0,Math.floor(Math.random()*3)+2).map(e=>({text:e.body.substring(0,140)+`...`,author:`Happy Client`}))})}catch{}}function c(){let e=document.getElementById(`search-input`),t=document.getElementById(`category-filter`),n=document.getElementById(`price-filter`),i=document.getElementById(`rating-filter`),o=()=>{let o=(e?.value||``).toLowerCase().trim(),s=t?.value.toLowerCase()||``,c=parseFloat(n?.value||100),l=parseFloat(i?.value||0),u=a;o&&(u=u.filter(e=>e.name.toLowerCase().includes(o)||e.role.toLowerCase().includes(o)||o.includes(`web`)&&e.role.toLowerCase().includes(`developer`))),s&&(u=u.filter(e=>{let t=e.role.toLowerCase();return s===`design`?t.includes(`ui`)||t.includes(`ux`):s===`marketing`?t.includes(`marketing`)||t.includes(`digital`):s===`development`?t.includes(`developer`)||t.includes(`web`):!1})),u=u.filter(e=>e.rate<=c),l>0&&(u=u.filter(e=>e.rating>=l)),r(u)};e&&e.addEventListener(`input`,o),t&&t.addEventListener(`change`,o),n&&n.addEventListener(`input`,()=>{document.getElementById(`price-value`).textContent=`$${n.value}`,o()}),i&&i.addEventListener(`input`,()=>{document.getElementById(`rating-value`).textContent=`${i.value} ★`,o()})}document.addEventListener(`DOMContentLoaded`,()=>{t(),o().then(()=>{setTimeout(()=>{i()},600)}),c();let e=document.getElementById(`login-btn`),n=document.getElementById(`signup-btn`);e&&e.addEventListener(`click`,()=>{alert(`👋 Login feature coming soon!

In a full version, this would open a login form.`)}),n&&n.addEventListener(`click`,()=>{alert(`🚀 Sign Up feature coming soon!

This would allow business owners or service providers to create an account.`)})});