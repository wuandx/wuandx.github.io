// 主题切换与持久化（通用）
(function(){
  const STORAGE_KEY = 'guide-theme';
  const htmlEl = document.documentElement;
  function apply(theme){
    if(theme==='dark'){ htmlEl.setAttribute('data-theme','dark'); }
    else { htmlEl.removeAttribute('data-theme'); }
  }
  function systemPrefers(){ return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'; }
  function currentStored(){ return localStorage.getItem(STORAGE_KEY); }
  let active = currentStored() || systemPrefers();
  apply(active);
  const btn = document.getElementById('themeToggle');
  if(btn){ btn.addEventListener('click', ()=>{ active = (active==='dark')?'light':'dark'; localStorage.setItem(STORAGE_KEY, active); apply(active); }); }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=>{ if(!currentStored()){ active = e.matches?'dark':'light'; apply(active);} });
})();
