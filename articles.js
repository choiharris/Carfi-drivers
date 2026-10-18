(()=>{'use strict';
const carousel=document.querySelector('[data-news-carousel]'),list=document.querySelector('[data-news-list]');
if(!carousel&&!list)return;
const safePath=v=>typeof v==='string'&&v.startsWith('/')&&!v.startsWith('//');
const imageUrl=v=>{try{const u=new URL(v,location.origin);return u.protocol==='https:'||u.origin===location.origin?u.href:'';}catch{return '';}};
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
function card(a){const n=el('article','news-card'),picture=el('a','news-picture');picture.href=a.url;const img=el('img');img.src=imageUrl(a.image);img.alt=a.imageAlt||a.title;img.width=1254;img.height=1254;img.loading='lazy';picture.append(img);
const copy=el('div','news-copy'),meta=el('p','news-meta'),time=el('time');meta.append(el('span','',a.category||'保險資訊'));time.dateTime=a.date;time.textContent=new Intl.DateTimeFormat('zh-HK',{year:'numeric',month:'long',day:'numeric'}).format(new Date(a.date+'T00:00:00+08:00'));meta.append(time);const h=el('h3'),a1=el('a','',a.title);a1.href=a.url;h.append(a1);const more=el('a','text-link','閱讀全文 →');more.href=a.url;copy.append(meta,h,el('p','',a.excerpt),more);n.append(picture,copy);return n;}
fetch('/articles.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('articles unavailable');return r.json();}).then(data=>{const items=data.articles.filter(a=>safePath(a.url)&&a.title&&/^\d{4}-\d{2}-\d{2}$/.test(a.date)).sort((a,b)=>b.date.localeCompare(a.date));if(!items.length)return;
if(list){list.replaceChildren(...items.map(card));const total=document.querySelector('[data-news-total]');if(total)total.textContent='共'+items.length+'篇文章 · 按發布日期排序';}
if(!carousel)return;const stage=carousel.querySelector('[data-news-stage]'),controls=carousel.querySelector('[data-news-controls]'),count=carousel.querySelector('[data-news-count]'),pause=carousel.querySelector('[data-news-pause]'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let index=0,paused=reduced.matches,timer=null,hover=false;
function render(){stage.replaceChildren(card(items[index]));count.textContent=(index+1)+' / '+items.length;}
function stop(){if(timer){clearInterval(timer);timer=null;}}
function restart(){stop();if(items.length>1&&!paused&&!hover&&!document.hidden&&!carousel.contains(document.activeElement))timer=setInterval(()=>{index=(index+1)%items.length;render();},6000);}
function move(d){index=(index+d+items.length)%items.length;render();restart();}
function sync(){pause.textContent=paused?'繼續輪播':'暫停輪播';pause.setAttribute('aria-pressed',String(paused));restart();}
controls.hidden=items.length<2;carousel.querySelector('[data-news-prev]').addEventListener('click',()=>move(-1));carousel.querySelector('[data-news-next]').addEventListener('click',()=>move(1));pause.addEventListener('click',()=>{paused=!paused;sync();});carousel.addEventListener('mouseenter',()=>{hover=true;stop();});carousel.addEventListener('mouseleave',()=>{hover=false;restart();});carousel.addEventListener('focusin',stop);carousel.addEventListener('focusout',()=>setTimeout(restart,0));carousel.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}if(e.key==='ArrowRight'){e.preventDefault();move(1);}});document.addEventListener('visibilitychange',restart);reduced.addEventListener('change',e=>{if(e.matches){paused=true;sync();}});render();sync();
}).catch(()=>{/* Keep the server-rendered published article readable. */});
})();