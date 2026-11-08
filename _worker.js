// Approved November 6–13 publication schedule. All times include the HK offset.
// No client parameter can override the server publication clock.
const SCHEDULED = [
  {
    "id": "SERVICE-20261024-02",
    "title": "買車保，唔止收到一份報價",
    "date": "2026-11-06",
    "publishAt": "2026-11-06T09:00:00+08:00",
    "category": "車保服務解說",
    "excerpt": "車保比較除咗保費，亦要問清楚用途、保障、自負額同服務安排。",
    "url": "/articles/buy-car-insurance-beyond-a-quote/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-12055061390295360731.png",
    "imageAlt": "買車保，唔止收到一份報價"
  },
  {
    "id": "SERVICE-20261024-04",
    "title": "維修報價同保險賠償，點解要一齊跟進？",
    "date": "2026-11-07",
    "publishAt": "2026-11-07T09:00:00+08:00",
    "category": "車保服務解說",
    "excerpt": "維修估價與保險賠償需要銜接，先了解資料、程序及批核安排。",
    "url": "/articles/repair-estimate-insurance-claim-approval/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-14393122775620682388.png",
    "imageAlt": "維修報價同保險賠償，點解要一齊跟進？"
  },
  {
    "id": "SERVICE-20261024-05",
    "title": "需要法律支援時，先分清初步分析同專業意見",
    "date": "2026-11-08",
    "publishAt": "2026-11-08T09:00:00+08:00",
    "category": "車保服務解說",
    "excerpt": "事故初步分析、維修估價及法律意見各有角色，先整理事實再按需要跟進。",
    "url": "/articles/accident-analysis-legal-support/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-9725126302149598389.png",
    "imageAlt": "需要法律支援時，先分清初步分析同專業意見"
  },
  {
    "id": "SERVICE-20261024-03-v2",
    "title": "事故之後，將一堆問題拆成清楚嘅下一步",
    "date": "2026-11-09",
    "publishAt": "2026-11-09T09:00:00+08:00",
    "category": "車保服務解說",
    "excerpt": "安全、保險通知、維修同文件，逐步整理事故後嘅跟進事項。",
    "url": "/articles/car-accident-support-next-steps/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-12339181239610398799.png",
    "imageAlt": "事故之後，將一堆問題拆成清楚嘅下一步"
  },
  {
    "id": "D013-20261110-v1",
    "title": "轉保之前，點樣避免新舊保障接唔上？",
    "date": "2026-11-10",
    "publishAt": "2026-11-10T09:00:00+08:00",
    "category": "車保實用資訊",
    "excerpt": "轉保先核對新保障生效、舊保單取消、退款及折扣文件。",
    "url": "/articles/motor-insurance-switch-cover-dates/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-13837304929167749571.png",
    "imageAlt": "轉保之前，點樣避免新舊保障接唔上？"
  },
  {
    "id": "D006-20261111-v1",
    "title": "填咗意向表，係咪已經有保險？",
    "date": "2026-11-11",
    "publishAt": "2026-11-11T09:00:00+08:00",
    "category": "車保實用資訊",
    "excerpt": "意向登記、報價、核保同正式生效係不同階段，逐步確認保障。",
    "url": "/articles/insurance-interest-form-not-cover/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-13744563182339744742.png",
    "imageAlt": "填咗意向表，係咪已經有保險？"
  },
  {
    "id": "D003-20261112-v1",
    "title": "分享車保報價前，邊啲資料要遮蓋？",
    "date": "2026-11-12",
    "publishAt": "2026-11-12T09:00:00+08:00",
    "category": "車保實用資訊",
    "excerpt": "比較報價前先保護個人資料，公開討論同正式核保文件分開處理。",
    "url": "/articles/sharing-motor-insurance-quotes-privacy/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-9213403502001749585.png",
    "imageAlt": "分享車保報價前，邊啲資料要遮蓋？"
  },
  {
    "id": "COLLECT-20261113-v3",
    "title": "集合司機需要，爭取更優惠車保",
    "date": "2026-11-13",
    "publishAt": "2026-11-13T09:00:00+08:00",
    "category": "司機社群",
    "excerpt": "先自願了解需要，再洽談報價安排；現階段未有已確認專屬優惠。",
    "url": "/articles/ride-hailing-insurance-community-enquiry/",
    "image": "https://static.metricool.com/planner/202611/7479523-file-16196301462433236801.png",
    "imageAlt": "集合司機需要，爭取更優惠車保"
  }
];
const escapeHtml = s => String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
export function publishedArticles(base, now) {
  const visible = SCHEDULED.filter(a => Date.parse(a.publishAt) <= now);
  const ids = new Set(visible.map(a => a.id));
  return [...visible.map(({publishAt,...a})=>a), ...base.filter(a=>!ids.has(a.id))]
    .sort((a,b)=>b.date.localeCompare(a.date));
}
function card(a) {
  const e=k=>escapeHtml(a[k]), [y,m,d]=a.date.split("-");
  return '<article class="news-card"><a class="news-picture" href="'+e("url")+'"><img src="'+e("image")+'" alt="'+e("imageAlt")+'" width="1254" height="1254" loading="lazy"></a><div class="news-copy"><p class="news-meta"><span>'+e("category")+'</span><time datetime="'+e("date")+'">'+y+'年'+Number(m)+'月'+Number(d)+'日</time></p><h3><a href="'+e("url")+'">'+e("title")+'</a></h3><p>'+e("excerpt")+'</p><a class="text-link" href="'+e("url")+'">閱讀全文 →</a></div></article>';
}
function response(body,original,request,extra={}) {
 const headers=new Headers(original?.headers);
 headers.delete("content-length"); headers.delete("etag"); headers.delete("last-modified"); headers.delete("content-encoding");
 headers.set("Cache-Control","no-store, max-age=0"); headers.set("CDN-Cache-Control","no-store");
 headers.set("X-Content-Type-Options","nosniff");headers.set("Referrer-Policy","strict-origin-when-cross-origin");
 for(const [key,value] of Object.entries(extra))headers.set(key,value);
 return new Response(request.method==="HEAD"?null:body,{status:original?.status||200,headers});
}
export async function handle(request,env,now=Date.now()) {
 const url=new URL(request.url);
 let path;try { path=decodeURIComponent(url.pathname); } catch {return new Response("Bad request",{status:400});}
 const scheduled=SCHEDULED.find(a=>path===a.url||path===a.url.slice(0,-1)||path===a.url+"index.html");
 if(scheduled && now < Date.parse(scheduled.publishAt)) {
   return new Response(request.method==="HEAD"?null:"Not found",{status:404,headers:{"Cache-Control":"no-store","CDN-Cache-Control":"no-store","X-Robots-Tag":"noindex","Content-Type":"text/plain; charset=utf-8"}});
 }
 const listing=["/","/index.html","/articles","/articles/","/articles/index.html","/articles.json","/sitemap.xml"].includes(path);
 if(!listing || !["GET","HEAD"].includes(request.method))return env.ASSETS.fetch(request);
 const sourceRequest=new Request(request.url,{method:"GET",headers:request.headers});
 const asset=await env.ASSETS.fetch(sourceRequest);
 if(!asset.ok)return asset;
 if(path==="/articles.json") {
   const data=await asset.json(); data.articles=publishedArticles(data.articles,now);
   return response(JSON.stringify(data),asset,request,{"Content-Type":"application/json; charset=utf-8"});
 }
 if(path==="/sitemap.xml") {
   let xml=await asset.text();
   for(const a of SCHEDULED.filter(a=>Date.parse(a.publishAt)<=now)) {
     const loc="https://drivers.carfi.fi"+a.url;
     if(!xml.includes("<loc>"+loc+"</loc>"))xml=xml.replace("</urlset>","<url><loc>"+loc+"</loc><lastmod>"+a.date+"</lastmod></url></urlset>");
   }
   return response(xml,asset,request,{"Content-Type":"application/xml; charset=utf-8"});
 }
 const manifest=await env.ASSETS.fetch(new Request(new URL("/articles.json",url)));
 if(!manifest.ok)return asset;
 const data=await manifest.json(), articles=publishedArticles(data.articles,now);
 const cards=articles.map(card).join("");
 let html=await asset.text();
 html=html.replace(/(<div class="news-stage" data-news-stage>)[\s\S]*?(<\/div><div class="news-controls")/,(_,start,end)=>start+cards+end);
 html=html.replace(/(<div class="news-list" data-news-list>)[\s\S]*?(<\/div><div class="article-note")/,(_,start,end)=>start+cards+end);
 html=html.replace(/data-news-total>共\d+篇文章/,"data-news-total>共"+articles.length+"篇文章");
 return response(html,asset,request,{"Content-Type":"text/html; charset=utf-8"});
}
export default {fetch:(request,env)=>handle(request,env)};
