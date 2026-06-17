/* ============ ICONS ============ */
const ICONS = {
  logo: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 17l4.5-9 4.5 9M6 13h5" stroke="#2A324B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17.5" cy="8.5" r="2.3" fill="#89DE7C"/></svg>`,
  website: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2.2" stroke="#2A324B" stroke-width="1.8"/><path d="M3 9h18" stroke="#2A324B" stroke-width="1.8"/><circle cx="6" cy="7" r=".9" fill="#5CB850"/></svg>`,
  line: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 11.3C21 6.7 16.97 3 12 3S3 6.7 3 11.3c0 4.13 3.2 7.57 7.52 8.2.3.06.3.4.22.7l-.36 1.36c-.1.4.16.6.5.43l2.96-1.78c.27-.16.5-.13.78-.1.43.05.86.07 1.3.07 4.96 0 9.08-3.7 9.08-8.3z" fill="#06C755"/><path d="M8.2 9.6v3.6M11 9.6v3.6M11 11.4h-2.8M13.6 9.6v3.6h2" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  maintain: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2.2" stroke="#2A324B" stroke-width="1.8"/><path d="M4 9h16" stroke="#2A324B" stroke-width="1.8"/><path d="M9 13l1.7 1.7L15 11" stroke="#5CB850" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 4.5 5.5 4.5 9 0 1.6-.4 3-1 4.2L12 18l-3.5-2.8c-.6-1.2-1-2.6-1-4.2C7.5 7.5 9 4 12 2z" fill="#89DE7C" stroke="#2A324B" stroke-width="1.4"/><circle cx="12" cy="9" r="1.6" fill="#2A324B"/><path d="M8 16l-2 4M16 16l2 4" stroke="#2A324B" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bulb: `<svg viewBox="0 0 24 24" width="26" fill="none"><path d="M9 18h6M10 21h4" stroke="#caa23b" stroke-width="1.6" stroke-linecap="round"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.6V16h5.6v-.6c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z" fill="#ffe089" stroke="#caa23b" stroke-width="1.4"/></svg>`
};
function bigIcon(type){
  const wrap = {
    logo: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><path d="M28 68l16-34 16 34M34 56h20" stroke="#2A324B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="68" cy="34" r="7" fill="#5CB850"/></svg>`,
    brush: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><path d="M30 70c0-14 12-26 26-26s26 12 26 26" stroke="#2A324B" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="56" cy="30" r="10" fill="#89DE7C" stroke="#2A324B" stroke-width="3"/><path d="M56 40v6" stroke="#2A324B" stroke-width="4" stroke-linecap="round"/></svg>`,
    browser: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><rect x="22" y="28" width="56" height="42" rx="6" fill="#fff" stroke="#2A324B" stroke-width="3.5"/><path d="M22 38h56" stroke="#2A324B" stroke-width="3.5"/><circle cx="30" cy="33" r="2" fill="#5CB850"/><circle cx="37" cy="33" r="2" fill="#89DE7C"/></svg>`,
    custom: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><path d="M30 70l34-34 8 8-34 34H30v-8z" fill="#89DE7C" stroke="#2A324B" stroke-width="3"/><path d="M58 32l8 8" stroke="#2A324B" stroke-width="3"/></svg>`,
    gear: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><circle cx="50" cy="50" r="14" fill="#fff" stroke="#2A324B" stroke-width="3.5"/><circle cx="50" cy="50" r="5" fill="#5CB850"/><path d="M50 28v8M50 64v8M28 50h8M64 50h8M35 35l5.6 5.6M65 65l-5.6-5.6M65 35l-5.6 5.6M35 65l5.6-5.6" stroke="#2A324B" stroke-width="3.5" stroke-linecap="round"/></svg>`,
    chat: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><path d="M24 38c0-7 6-13 13-13h26c7 0 13 6 13 13v14c0 7-6 13-13 13H46l-12 9v-9h-1c-5 0-9-4-9-9V38z" fill="#06C755"/><circle cx="38" cy="45" r="2.4" fill="#fff"/><circle cx="50" cy="45" r="2.4" fill="#fff"/><circle cx="62" cy="45" r="2.4" fill="#fff"/></svg>`,
    chatplus: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><path d="M24 38c0-7 6-13 13-13h26c7 0 13 6 13 13v14c0 7-6 13-13 13H46l-12 9v-9h-1c-5 0-9-4-9-9V38z" fill="#06C755"/><path d="M50 39v12M44 45h12" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    heart: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#eafbe6"/><path d="M50 70S26 56 26 39c0-9 7-15 15-15 6 0 9 3 9 3s3-3 9-3c8 0 15 6 15 15 0 17-24 31-24 31z" fill="#89DE7C" stroke="#2A324B" stroke-width="3"/></svg>`,
    alert: `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#fff4e0"/><path d="M50 26l28 48H22z" fill="#ffd479" stroke="#2A324B" stroke-width="3.2" stroke-linejoin="round"/><path d="M50 44v12" stroke="#2A324B" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="63" r="2.2" fill="#2A324B"/></svg>`
  };
  return wrap[type] || wrap.browser;
}
function mascot(mood){
  const eyes = `<circle cx="40" cy="46" r="4.2" fill="#2A324B"/><circle cx="60" cy="46" r="4.2" fill="#2A324B"/>`;
  const mouths = {
    default: `<path d="M40 60q10 8 20 0" stroke="#2A324B" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    think: `<path d="M42 61q8 -2 16 0" stroke="#2A324B" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    cheer: `<path d="M38 58q12 12 24 0" stroke="#2A324B" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M22 28l4 4M78 28l-4 4" stroke="#FFD479" stroke-width="3" stroke-linecap="round"/>`
  };
  const tilt = mood === 'think' ? 'rotate(-8 50 50)' : 'rotate(0)';
  return `<svg viewBox="0 0 100 100" width="64" height="64">
    <g transform="${tilt}">
      <path d="M60 8c22-6 36 16 34 38c-2 22-14 44-38 46c-24 2-48-14-50-38c-2-24 14-44 38-46c6-1 10 3 16 0z" fill="#89DE7C" stroke="#5CB850" stroke-width="2"/>
      ${eyes}
      ${mouths[mood] || mouths.default}
    </g>
  </svg>`;
}

/* ============ DATA: QUESTIONS ============ */
const Q = {
  q1:{
    eyebrow:'STEP 1 · 找方向', title:'你目前最想解決的是什麼問題？', sub:'選一個最接近現況的選項就好。', type:'single', mascot:'default',
    options:[
      {v:'no_logo', label:'我還沒有 Logo 或品牌識別'},
      {v:'need_site', label:'我需要一個品牌網站'},
      {v:'line_oa', label:'我想整理 LINE 官方帳號'},
      {v:'maintain', label:'我已經有品牌基礎，但需要後續維護'},
      {v:'big_system', label:'我想做大型電商、系統或複雜功能'}
    ],
    next:(v)=> v==='no_logo'?'q2' : v==='need_site'?'q3' : v==='line_oa'?'q6' : v==='maintain'?'result8' : 'result9'
  },
  q2:{
    eyebrow:'STEP 2 · 品牌識別', title:'你目前是否已有 Logo？', mascot:'think', type:'single',
    options:[
      {v:'none', label:'完全沒有'},
      {v:'draft', label:'有草稿、手繪稿或 AI 產生的圖'},
      {v:'has_logo', label:'已有正式 Logo'},
      {v:'skip', label:'這次不需要處理 Logo'}
    ],
    next:(v)=> v==='none'?'result2' : v==='draft'?'result1' : 'q3'
  },
  q3:{
    eyebrow:'STEP 3 · 網站需求', title:'你需要網站的主要用途是什麼？', mascot:'default', type:'single',
    options:[
      {v:'no_site', label:'暫時不需要網站'},
      {v:'showcase', label:'展示品牌介紹、服務內容與聯絡方式'},
      {v:'custom', label:'需要依照品牌特色客製網站'},
      {v:'self_manage', label:'希望未來可以自己登入後台更新內容'},
      {v:'big_commerce', label:'需要大型電商、會員、金流、庫存或多平台串接'}
    ],
    next:(v)=> v==='no_site'?'q6' : v==='showcase'?'q4' : v==='custom'?'result4' : v==='self_manage'?'result5' : 'result9'
  },
  q4:{
    eyebrow:'STEP 4 · 維護方式', title:'網站完成後，你希望誰負責更新？', mascot:'think', type:'single',
    options:[
      {v:'rare', label:'不需要常更新'},
      {v:'studio', label:'由簡實制所協助維護'},
      {v:'self', label:'我希望自己可以更新'},
      {v:'multi', label:'需要公司內多人共同管理'},
      {v:'unsure', label:'不確定'}
    ],
    next:(v)=> (v==='self' || v==='multi') ? 'result5' : 'q5'
  },
  q5:{
    eyebrow:'STEP 5 · 更新頻率', title:'你的商品或內容更新頻率大約是？', mascot:'default', type:'single',
    options:[
      {v:'rare', label:'幾乎不更新'},
      {v:'monthly', label:'每月 1～2 次'},
      {v:'weekly', label:'每週更新'},
      {v:'daily', label:'幾乎每天更新'},
      {v:'inventory', label:'商品數量很多，且需要庫存同步'}
    ],
    next:(v)=> v==='inventory'?'result9' : v==='daily'?'result5' : 'result3'
  },
  q6:{
    eyebrow:'STEP 3 · LINE 官方帳號', title:'你希望 LINE 官方帳號可以做到什麼？', sub:'可以多選，選好後按「下一步」。', mascot:'default', type:'multi',
    options:[
      {v:'none', label:'暫時不需要 LINE 官方帳號'},
      {v:'menu', label:'基礎圖文選單'},
      {v:'autoreply', label:'自動回覆'},
      {v:'faq', label:'FAQ 常見問題'},
      {v:'redirect', label:'導流到網站或預約'},
      {v:'full', label:'在 LINE 裡呈現完整服務介紹'},
      {v:'complex', label:'需要複雜預約系統、會員分級或行銷活動模組'}
    ],
    next:(vals)=>{
      if(vals.includes('complex')) return 'result9';
      if(vals.includes('full')) return 'result7';
      if(vals.includes('faq') && vals.includes('redirect')) return 'result7';
      const meaningful = vals.filter(v=>v!=='none');
      if(meaningful.length>0) return 'result6';
      return 'result8';
    }
  },
  q7:{
    eyebrow:'最後一題 · 長期協助', title:'你是否需要後續長期協助？', mascot:'cheer', type:'single',
    options:[
      {v:'once', label:'不需要，目前只想先完成一次性建置'},
      {v:'occasional', label:'偶爾需要修改網站或圖文內容'},
      {v:'monthly', label:'希望每月有人協助品牌內容更新'},
      {v:'full', label:'需要完整社群代操、客服回覆或廣告投放管理'}
    ],
    next:()=> state.pendingResult
  }
};

/* ============ DATA: RESULTS ============ */
const R = {
  result1:{badge:'品牌起步', icon:'logo', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/img_service_brand_01.jpg', title:'既有 Logo 電子檔轉化方案', plan:'品牌起步｜方案 A', price:'NT$800', reasonTitle:'適合你的原因',
    reason:'你目前已有初步視覺方向，但可能還缺少正式檔案、透明底圖、社群頭像尺寸或印刷可用格式。',
    items:['Logo 向量化整理','社群頭像尺寸調整','多尺寸輸出','AI、SVG、PNG、PDF 檔案交付']},
  result2:{badge:'品牌起步', icon:'brush', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/img_service_brand_s04.png', title:'品牌起步｜全套設計方案', plan:'品牌起步｜方案 B', price:'NT$3,000', reasonTitle:'適合你的原因',
    reason:'你目前需要的不只是整理檔案，而是建立品牌可以長期使用的主視覺、社群頭像與基礎視覺規範。',
    items:['Logo 主視覺設計','微型社群頭像版本','多場景應用配置','基礎品牌視覺指引','AI、SVG、PNG、PDF 檔案交付']},
  result3:{badge:'品牌官網設計', icon:'browser', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/line_web_01.jpg', title:'套版服務', plan:'品牌官網設計｜方案 A', price:'NT$18,000', reasonTitle:'適合你的原因',
    reason:'你的需求以品牌展示、服務介紹、作品或商品資訊呈現為主，內容更新頻率不高，適合用較輕量的方式快速上線。',
    items:['套用既有成熟網站版型','品牌色彩與商品內容調整','RWD 響應式設計','SEO 基礎設定','SSL 安全憑證','上線教學說明','三個月簡實制所維護與更新方案']},
  result4:{badge:'品牌官網設計', icon:'custom', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/img_service_web_bg.png', title:'客製服務', plan:'品牌官網設計｜方案 B', price:'NT$30,000', reasonTitle:'適合你的原因',
    reason:'你的需求不只是基本展示，而是希望網站架構、視覺與使用流程更貼近品牌本身。',
    items:['客製化網站架構規劃','依品牌特色設計網站視覺','不受既有版型限制','提升品牌辨識度與專業形象','可買斷程式碼自行維護','RWD、SEO 基礎設定、SSL 與上線教學']},
  result5:{badge:'品牌官網設計', icon:'gear', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/line_web_031.png', title:'可自行維護網站', plan:'品牌官網設計｜方案 C', price:'NT$35,000', reasonTitle:'適合你的原因',
    reason:'你的品牌可能會長期更新內容，或希望自己登入後台管理網站，不想每次修改都委託設計師處理。',
    items:['透過網站平台建置','不需撰寫程式即可更新內容','可自行更新商品、文章、服務內容','適合長期自主經營','RWD、SEO 基礎設定、SSL 與上線教學']},
  result6:{badge:'品牌 LINE 建置', icon:'chat', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/img_line_011.png', title:'基礎視覺建置套餐', plan:'品牌 LINE 建置｜方案 A', price:'NT$2,500', reasonTitle:'適合你的原因',
    reason:'你的需求以 LINE 官方帳號基礎設定、圖文選單與自動回覆為主，適合建立清楚的品牌入口。',
    items:['基礎環境設定','1 組標準圖文選單設計','3 組關鍵字自動回覆腳本設定','社群或網站導流','品牌形象整合']},
  result7:{badge:'品牌 LINE 建置', icon:'chatplus', image:'https://lessarystudio-design.github.io/lessary-studio/web-images/img/img_line_02.jpg', title:'微官網進階方案', plan:'品牌 LINE 建置｜方案 B', price:'NT$20,000', reasonTitle:'適合你的原因',
    reason:'你的 LINE 不只是客服入口，也需要承接品牌介紹、服務內容、FAQ 與預約流程，讓客戶在詢問前先看懂重點。',
    items:['包含基礎視覺建置套餐內容','微官網規劃','店家服務介紹','FAQ 常見問題','預約流程原生卡片設計','完整交付與後台基礎操作教學'],
    note:'如網站需架設於簡實制所雲端伺服器，後續會有主機託管與網站基礎安全維護費。'}
};

/* ============ STATE ============ */
const state = { history:['q1'], answers:{}, multiSel:{}, pendingResult:null };
function current(){ return state.history[state.history.length-1]; }
function goto(step){ state.history.push(step); render(); window.scrollTo({top:0,behavior:'smooth'}); }
function restart(){ state.history=['q1']; state.answers={}; state.multiSel={}; state.pendingResult=null; render(); window.scrollTo({top:0,behavior:'smooth'}); }

const QUESTION_DEPTH = 6; // rough estimate for progress bar
function updateProgress(){
  const qSteps = state.history.filter(s=>Q[s]);
  const pct = Math.min(100, Math.round((qSteps.length/QUESTION_DEPTH)*100));
  document.getElementById('progressFill').style.width = (current()==='form'||current()==='success' ? 100 : pct) + '%';
  document.getElementById('restartBtn').style.display = state.history.length>1 ? 'flex' : 'none';
}

/* ============ RENDER ============ */
function render(){
  const step = current();
  updateProgress();
  const wrap = document.getElementById('cardWrap');
  if(Q[step]) wrap.innerHTML = renderQuestion(Q[step], step);
  else if(R[step]) wrap.innerHTML = renderResult(R[step], step);
  else if(step==='form') wrap.innerHTML = renderForm();
  else if(step==='success') wrap.innerHTML = renderSuccess();
  attachHandlers(step);
}

function renderQuestion(q, stepId){
  const isMulti = q.type==='multi';
  const selected = isMulti ? (state.multiSel[stepId]||[]) : [state.answers[stepId]];
  const optsHtml = q.options.map(o=>{
    const isSel = selected.includes(o.v);
    const iconHtml = o.icon ? `<div class="icon-slot">${ICONS[o.icon]}</div>` : '';
    return `<button type="button" class="option ${isMulti?'multi':''} ${isSel?'selected':''}" data-val="${o.v}">
      ${iconHtml}
      <span class="label">${o.label}</span>
      <span class="indicator">${ICONS.check}</span>
    </button>`;
  }).join('');
  const nextBtn = isMulti ? `<div class="btn-row"><button class="btn btn-primary" id="multiNextBtn">下一步 →</button></div>` : '';
  return `
    <div class="card">
      <div class="mascot-wrap">${mascot(q.mascot)}</div>
      <p class="eyebrow">${q.eyebrow}</p>
      <h2 class="q-title">${q.title}</h2>
      ${q.sub?`<p class="q-sub">${q.sub}</p>`:''}
      <div class="options" id="optList">${optsHtml}</div>
      ${nextBtn}
    </div>`;
}

function renderResult(r, stepId){
  const itemsHtml = r.items.map(t=>`<li><span class="check-dot">${ICONS.check}</span>${t}</li>`).join('');
  const noteHtml = r.note ? `<p class="help-text" style="margin-top:14px;">＊${r.note}</p>` : '';
  const addonNote = (state.answers.q7==='monthly' || state.answers.q7==='full') ? `
    <div class="addon-panel">
      <div class="bulb">${ICONS.bulb}</div>
      <p><b>加碼建議：</b>你也提到希望有長期協助，可以額外加購「品牌持續經營」服務（如 LINE OA 月度經營、網頁內容更新等服務），讓品牌維持穩定更新。</p>
    </div>` : '';
  return `
    <div class="card">
      <div class="mascot-wrap">${mascot('cheer')}</div>
      <div class="result-photo-wrap"><img src="${r.image}" alt="${r.title}" loading="lazy"></div>
      <span class="badge-pill">${r.badge}</span>
      <h2 class="result-title">${r.title}</h2>
      <p class="result-plan">${r.plan}</p>
      <div class="price-tag">${r.price} <span>起</span></div>
      <p class="section-label">${r.reasonTitle}</p>
      <p class="reason-text">${r.reason}</p>
      <p class="section-label">服務內容包含</p>
      <ul class="included-list">${itemsHtml}</ul>
      ${noteHtml}
      ${addonNote}
      <div class="btn-row">
        <button class="btn btn-primary" id="confirmResultBtn">確認這需求</button>
        <button class="btn btn-ghost" onclick="restart()">不是這個結果，繼續測試</button>
      </div>
    </div>`;
}

function renderResult8(){
  return `
    <div class="card">
      <div class="mascot-wrap">${mascot('default')}</div>
      <div class="result-icon-wrap">${bigIcon('heart')}</div>
      <span class="badge-pill">品牌持續經營</span>
      <h2 class="result-title">品牌持續經營</h2>
      <p class="result-plan">適合原先有合作的品牌</p>
      <p class="reason-text">這個方案適合「原先就有與簡實制所合作」的品牌。若你有相關需求，請直接聯繫簡實制所，我們會依照你過去的合作狀況，提供合適的安排與報價。</p>
      <!-- 原方案內容先隱藏，保留供日後恢復使用
      <p class="section-label">適合你的原因</p>
      <p class="reason-text">你目前不是缺少基礎建置，而是需要有人協助維持品牌內容更新、視覺一致與日常調整。</p>
      <p class="section-label">可選服務</p>
      <div class="addon-grid">
        <div class="addon-card"><div class="name">LINE OA 月度經營</div><div class="price">NT$3,000／月起</div></div>
        <div class="addon-card"><div class="name">品牌延伸設計</div><div class="price">NT$2,000／組起</div></div>
        <div class="addon-card"><div class="name">網頁內容更新</div><div class="price">NT$1,500／次起</div></div>
        <div class="addon-card"><div class="name">三個月品牌陪跑方案</div><div class="price">NT$9,000 起</div></div>
      </div>
      -->
      <div class="btn-row">
        <a class="btn btn-line" href="https://line.me/R/ti/p/@025sjouz" target="_blank" rel="noopener">加入 LINE 聯繫簡實制所</a>
        <button class="btn btn-ghost" onclick="restart()">不是這個結果，繼續測試</button>
      </div>
    </div>`;
}

function renderResult9(){
  const tags = ['大型電商平台','大量商品與庫存同步','金流、物流、ERP 或 POS 串接','會員分級系統','多人後台權限管理','APP 開發','客製 SaaS 系統','高流量或多平台整合需求'];
  return `
    <div class="card">
      <div class="mascot-wrap">${mascot('think')}</div>
      <div class="result-icon-wrap">${bigIcon('alert')}</div>
      <span class="badge-pill" style="background:#fff4e0; color:#b8843a;">超出目前服務範圍</span>
      <h2 class="result-title">此需求可能超出簡實制所目前服務範圍</h2>
      <p class="reason-text">依照你的填寫內容，你的需求可能已接近大型系統、電商平台或軟體開發範圍。這類專案通常需要完整工程團隊、系統架構規劃、資安管理與長期技術維護。</p>
      <p class="section-label">可能包含的需求</p>
      <div class="oos-list">${tags.map(t=>`<span class="oos-chip">${t}</span>`).join('')}</div>
      <p class="section-label">建議方向</p>
      <p class="reason-text">建議尋找更合適的電商平台公司、軟體開發公司或系統整合公司協助。簡實制所可以協助品牌形象、網站視覺、前期規劃或輕量展示型網站，但上述需求已超出目前主要服務範圍。</p>
      <div class="btn-row">
        <button class="btn btn-ghost" onclick="restart()">重新測試</button>
      </div>
    </div>`;
}

function renderForm(){
  const planName = state.confirmedPlan || '尚未選擇方案';
  return `
    <div class="card">
      <div class="mascot-wrap">${mascot('cheer')}</div>
      <p class="eyebrow">最後一步</p>
      <h2 class="q-title">確認你的服務需求</h2>
      <p class="q-sub">請留下基本聯絡資料，我會依照你剛剛測驗出的需求結果，進一步確認內容與報價方向。</p>
      <div class="result-chip">你的測驗結果：<b>${planName}</b></div>
      <div class="form-grid">
        <div class="field"><label>聯絡人姓名 *</label><input type="text" id="f_name" placeholder="王小明"></div>
        <div class="field"><label>品牌名稱</label><input type="text" id="f_brand" placeholder="你的品牌 / 工作室名稱"></div>
        <div class="field"><label>LINE ID</label><input type="text" id="f_line" placeholder="例：@yourid"></div>
        <div class="field"><label>電話</label><input type="tel" id="f_phone" placeholder="09xx-xxx-xxx"></div>
        <div class="field"><label>Email *</label><input type="email" id="f_email" placeholder="you@example.com"></div>
        <div class="field">
          <label>產品或服務類型</label>
          <select id="f_type">
            <option value="">請選擇</option>
            <option>美甲 / 美睫 / 美容</option>
            <option>花藝 / 手作 / 甜點</option>
            <option>餐飲 / 烘焙</option>
            <option>課程 / 教學 / 顧問</option>
            <option>個人品牌 / 自由工作者</option>
            <option>小型工作室</option>
            <option>選品 / 商品販售</option>
            <option>其他</option>
          </select>
        </div>
        <div class="field"><label>補充說明</label><textarea id="f_note" placeholder="可以簡單描述目前的品牌狀況、想做的內容，或希望我先知道的事情。"></textarea></div>
        <p class="error-text" id="formError">請填寫聯絡人姓名與 Email。</p>
      </div>
      <div class="btn-row" style="margin-top:22px;">
        <button class="btn btn-primary btn-block" id="submitFormBtn">送出需求</button>
      </div>
      <p class="help-text">送出後，需求內容會先寄送至簡實制所信箱，我會確認內容後再與你聯繫。</p>
      <div class="btn-row">
        <a class="btn btn-line" href="https://line.me/R/ti/p/@025sjouz" target="_blank" rel="noopener">加入 LINE 官方帳號</a>
        <button class="btn btn-ghost" onclick="restart()">重新測試</button>
      </div>
      <p class="help-text">如果你希望直接透過 LINE 聯繫，也可以加入簡實制所官方帳號，傳送剛剛的測驗結果與需求內容。重新測試：如果你覺得結果不符合目前需求，可以重新填寫測驗。</p>
    </div>`;
}

function renderSuccess(){
  return `
    <div class="card">
      <div class="success-wrap">
        <div class="success-icon">${bigIcon('heart')}</div>
        <h2 class="q-title" style="text-align:center;">已為你開啟寄信視窗 🎉</h2>
        <p class="reason-text" style="text-align:center;">請在彈出的 Email 視窗中按下「傳送」，我們會儘快確認內容並與你聯繫。也歡迎直接加入 LINE 官方帳號加速聯繫。</p>
        <div class="btn-row" style="justify-content:center;">
          <a class="btn btn-line" href="https://line.me/R/ti/p/@025sjouz" target="_blank" rel="noopener">加入 LINE 官方帳號</a>
          <button class="btn btn-ghost" onclick="restart()">重新測試</button>
        </div>
      </div>
    </div>`;
}

/* ============ HANDLERS ============ */
function attachHandlers(step){
  if(Q[step]){
    const q = Q[step];
    const list = document.getElementById('optList');
    if(q.type==='single'){
      list.querySelectorAll('.option').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          state.answers[step] = btn.dataset.val;
          list.querySelectorAll('.option').forEach(b=>b.classList.remove('selected'));
          btn.classList.add('selected');
          setTimeout(()=>{
            const nxt = q.next(btn.dataset.val);
            goto(nxt);
          }, 220);
        });
      });
    } else {
      if(!state.multiSel[step]) state.multiSel[step]=[];
      list.querySelectorAll('.option').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const val = btn.dataset.val;
          let sel = state.multiSel[step];
          if(val==='none'){
            sel = sel.includes('none') ? [] : ['none'];
          } else {
            sel = sel.filter(v=>v!=='none');
            if(sel.includes(val)) sel = sel.filter(v=>v!==val);
            else sel.push(val);
          }
          state.multiSel[step] = sel;
          list.querySelectorAll('.option').forEach(b=>{
            b.classList.toggle('selected', sel.includes(b.dataset.val));
          });
        });
      });
      document.getElementById('multiNextBtn').addEventListener('click', ()=>{
        const sel = state.multiSel[step] || [];
        const nxt = q.next(sel);
        if(nxt.startsWith('result') && nxt!=='result8' && nxt!=='result9'){
          state.pendingResult = nxt; goto('q7');
        } else {
          goto(nxt);
        }
      });
    }
  }
  else if(R[step]){
    document.getElementById('confirmResultBtn').addEventListener('click', ()=>{
      state.confirmedPlan = R[step].plan + '｜' + R[step].title;
      goto('form');
    });
  }
  else if(step==='form'){
    document.getElementById('submitFormBtn').addEventListener('click', ()=>{
      const name = document.getElementById('f_name').value.trim();
      const email = document.getElementById('f_email').value.trim();
      const err = document.getElementById('formError');
      if(!name || !email){ err.style.display='block'; return; }
      err.style.display='none';
      const brand = document.getElementById('f_brand').value.trim();
      const line = document.getElementById('f_line').value.trim();
      const phone = document.getElementById('f_phone').value.trim();
      const type = document.getElementById('f_type').value;
      const note = document.getElementById('f_note').value.trim();
      const plan = state.confirmedPlan || '';
      const subject = encodeURIComponent(`【簡實制所需求單】${plan} - ${brand||name}`);
      const body = encodeURIComponent(
        `測驗結果：${plan}\n` +
        `聯絡人姓名：${name}\n品牌名稱：${brand}\nLINE ID：${line}\n電話：${phone}\nEmail：${email}\n` +
        `產品或服務類型：${type}\n補充說明：${note}`
      );
      window.location.href = `mailto:lessarystudio@gmail.com?subject=${subject}&body=${body}`;
      goto('success');
    });
  }
}

/* patch routing: when single-select Q3/Q4/Q5 leads directly to a result1-7, go through q7 first */
const originalQ3Next = Q.q3.next, originalQ4Next = Q.q4.next, originalQ5Next = Q.q5.next;
function wrapThroughQ7(nextFn){
  return (v)=>{
    const nxt = nextFn(v);
    if(typeof nxt==='string' && R[nxt] && nxt!=='result8' && nxt!=='result9'){
      state.pendingResult = nxt;
      return 'q7';
    }
    return nxt;
  };
}
Q.q3.next = wrapThroughQ7(originalQ3Next);
Q.q4.next = wrapThroughQ7(originalQ4Next);
Q.q5.next = wrapThroughQ7(originalQ5Next);

/* re-route render() to use special layouts for result8 / result9 */
function renderDispatch(){
  const step = current();
  updateProgress();
  const wrap = document.getElementById('cardWrap');
  if(Q[step]) wrap.innerHTML = renderQuestion(Q[step], step);
  else if(step==='result8') wrap.innerHTML = renderResult8();
  else if(step==='result9') wrap.innerHTML = renderResult9();
  else if(R[step]) wrap.innerHTML = renderResult(R[step], step);
  else if(step==='form') wrap.innerHTML = renderForm();
  else if(step==='success') wrap.innerHTML = renderSuccess();
  attachHandlers(step);
}
render = renderDispatch;

render();

/* ============ NAV BEHAVIOR ============ */
(function(){
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  function closeMenu(){
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded','false');
    navLinks.classList.remove('is-open');
    navLinks.querySelectorAll('li.has-sub.is-open').forEach(li=>{
      li.classList.remove('is-open');
      li.querySelector('.nav-sub')?.classList.remove('is-open');
    });
  }

  hamburger.addEventListener('click', ()=>{
    const open = hamburger.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    navLinks.classList.toggle('is-open', open);
    if(!open){
      navLinks.querySelectorAll('li.has-sub.is-open').forEach(li=>{
        li.classList.remove('is-open');
        li.querySelector('.nav-sub')?.classList.remove('is-open');
      });
    }
  });

  navLinks.querySelectorAll('.sub-toggle').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const li = btn.closest('li.has-sub');
      const sub = li.querySelector('.nav-sub');
      const open = li.classList.toggle('is-open');
      sub.classList.toggle('is-open', open);
    });
  });

  window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY > 8);
  });

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 1024) closeMenu();
  });
})();
