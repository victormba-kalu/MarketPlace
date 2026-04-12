(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`theme-toggle`);if(!e){console.error(`Theme toggle button not found`);return}e.addEventListener(`click`,()=>{document.documentElement.classList.toggle(`dark`),e.textContent=document.documentElement.classList.contains(`dark`)?`☀️`:`🌙`})});var e=class{constructor(e){this.provider=e}render(){let e=document.createElement(`div`);return e.className=`
      provider-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden 
      shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer 
      border border-gray-100 dark:border-gray-700
    `,e.innerHTML=`
      <div class="h-52 bg-gray-200 dark:bg-gray-700 relative">
        <img src="https://picsum.photos/id/${this.provider.imageId||Math.floor(Math.random()*100)+60}/400/300" 
             alt="${this.provider.firstName} ${this.provider.lastName}"
             class="w-full h-full object-cover">
      </div>
      
      <div class="p-6">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h3 class="font-semibold text-lg">${this.provider.firstName} ${this.provider.lastName}</h3>
            <p class="text-emerald-600 dark:text-emerald-500 text-sm font-medium">
              ${this.provider.expertise||`Service Provider`}
            </p>
          </div>
          <div class="text-right">
            <div class="flex items-center gap-1 text-amber-500">★★★★☆</div>
            <p class="text-xs text-gray-500 dark:text-gray-400">4.8</p>
          </div>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          ${this.provider.bio||`Passionate professional helping small businesses grow.`}
        </p>
        
        <div class="flex justify-between items-center">
          <div class="text-emerald-600 font-semibold">
            $${this.provider.hourlyRate||`45`}/hr
          </div>
          <button class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-2xl transition-colors">
            View Profile
          </button>
        </div>
      </div>
    `,e}},t=document.getElementById(`mobile-menu-btn`),n=document.getElementById(`mobile-menu`);t&&n&&t.addEventListener(`click`,()=>{n.classList.toggle(`hidden`),n.classList.contains(`hidden`)?t.textContent=`☰`:t.textContent=`✕`});var r=[{firstName:`Emma`,lastName:`Torres`,expertise:`UI/UX Designer`,imageId:64,hourlyRate:65,bio:`Helping small businesses create beautiful and user-friendly digital experiences.`},{firstName:`Michael`,lastName:`Chen`,expertise:`Digital Marketer`,imageId:201,hourlyRate:55,bio:`Grew multiple local businesses through strategic social media marketing.`},{firstName:`Priya`,lastName:`Sharma`,expertise:`Web Developer`,imageId:101,hourlyRate:70,bio:`Building fast, secure, and modern websites for small business owners.`}];document.addEventListener(`DOMContentLoaded`,()=>{console.log(`✅ Marketplace - Week 5 completed`);let t=document.getElementById(`featured-grid`);t&&r.forEach(n=>{let r=new e(n);t.appendChild(r.render())})});