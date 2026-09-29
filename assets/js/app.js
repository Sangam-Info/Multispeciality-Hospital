/* ============================================================
   Astha Multispeciality Hospital - Application script
   Extracted from index.html
   ============================================================ */

/* ---------- Data ---------- */
const DEPTS=[
 {id:'cardio',n:'Cardiology',d:'Heart care, ECG, angiography and cardiac rehab.',ic:'<path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-5.5 9z"/>'},
 {id:'ortho',n:'Orthopedics',d:'Bone, joint and spine care with modern surgery.',ic:'<path d="M6 3v6a3 3 0 0 0 6 0V3M9 15v6"/><path d="M18 21v-6a3 3 0 0 0-6 0"/>'},
 {id:'neuro',n:'Neurology',d:'Brain, nerve and stroke diagnosis and treatment.',ic:'<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 5 1 3 3 0 0 0 5-2 3 3 0 0 0-1-6 3 3 0 0 0-3-4 3 3 0 0 0-5-1z"/>'},
 {id:'peds',n:'Pediatrics',d:'Complete child health, vaccination and growth care.',ic:'<circle cx="12" cy="7" r="4"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/>'},
 {id:'derma',n:'Dermatology',d:'Skin, hair and cosmetic dermatology services.',ic:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>'},
 {id:'ent',n:'ENT',d:'Ear, nose and throat specialists and surgery.',ic:'<path d="M6 8a6 6 0 0 1 12 0c0 4-3 5-3 8a3 3 0 0 1-6 0"/>'},
 {id:'gen',n:'General Medicine',d:'Everyday illness, chronic disease and check-ups.',ic:'<path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9"/>'},
 {id:'gyn',n:'Gynecology',d:'Women\'s health, maternity and prenatal care.',ic:'<circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/>'}
];
const DOCS=[
 {n:'Dr. [Cardiology]',dept:'cardio',sp:'Cardiology',ex:'Consultant · Heart Care',i:'C'},
 {n:'Dr. [Orthopedics]',dept:'ortho',sp:'Orthopedics',ex:'Joint & Spine Surgeon',i:'O'},
 {n:'Dr. [Neurology]',dept:'neuro',sp:'Neurology',ex:'Neurologist',i:'N'},
 {n:'Dr. [Pediatrics]',dept:'peds',sp:'Pediatrics',ex:'Child Specialist',i:'P'},
 {n:'Dr. [Dermatology]',dept:'derma',sp:'Dermatology',ex:'Skin Specialist',i:'D'},
 {n:'Dr. [ENT]',dept:'ent',sp:'ENT',ex:'ENT Surgeon',i:'E'},
 {n:'Dr. [General]',dept:'gen',sp:'General Medicine',ex:'Physician',i:'G'},
 {n:'Dr. [Gynecology]',dept:'gyn',sp:'Gynecology',ex:'Gynecologist',i:'W'}
];
const svgD=p=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';

/* ---------- Render website grids ---------- */
function deptCard(x,onclick){return `<div class="dept" ${onclick?`onclick="${onclick}"`:'onclick="startBooking(\''+x.id+'\')"'}>
 <div class="dept-ic">${svgD(x.ic)}</div><h4>${x.n}</h4><p>${x.d}</p>
 <div class="go">Book now ${svgD('<path d="M5 12h14M13 6l6 6-6 6"/>')}</div></div>`;}
function docCard(x,onclick){return `<div class="doc"><div class="doc-top"><div class="doc-av">${svgD('<path d="M8 3v4a4 4 0 0 0 8 0V3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3"/><circle cx="18" cy="14" r="1.6"/>')}</div></div>
 <div class="doc-body"><div class="nm">${x.n}</div><div class="sp">${x.ex}</div><div class="meta">MBBS · MD · [qualifications]</div><div class="stars">★★★★★</div>
 <button class="btn btn-primary btn-sm btn-block" onclick="${onclick||'startBooking(\''+x.dept+'\')'}">Book appointment</button></div></div>`;}

document.getElementById('deptGrid').innerHTML=DEPTS.map(x=>deptCard(x)).join('');
document.getElementById('docGrid').innerHTML=DOCS.map(x=>docCard(x)).join('');
document.getElementById('adDeptGrid').innerHTML=DEPTS.map(x=>`<div class="rec"><div class="top"><div class="ic ic-blue">${svgD(x.ic)}</div><div><div class="t">${x.n}</div><div class="d">Speciality unit</div></div></div><div class="row"><span>Doctors</span><b>${3+Math.floor(Math.random()*6)}</b></div><div class="row"><span>Beds</span><b>${8+Math.floor(Math.random()*12)}</b></div><div class="row"><span>Status</span><span class="badge b-available">Operational</span></div></div>`).join('');

/* ---------- Staff ---------- */
let STAFF=[
 {n:'Dr. [Cardiology]',  role:'Doctor',        dept:'Cardiology',       shift:'Morning',    st:'active'},
 {n:'Dr. [Orthopedics]', role:'Doctor',        dept:'Orthopedics',      shift:'Rotational', st:'active'},
 {n:'Dr. [Neurology]',   role:'Doctor',        dept:'Neurology',        shift:'Evening',    st:'onleave'},
 {n:'Kavita Rao',        role:'Head Nurse',    dept:'General Medicine', shift:'Morning',    st:'active'},
 {n:'Suresh Pillai',     role:'Nurse',         dept:'ICU',              shift:'Night',      st:'active'},
 {n:'Meena Iyer',        role:'Receptionist',  dept:'Front Desk',       shift:'Morning',    st:'active'},
 {n:'Rahul Verma',       role:'Lab Technician',dept:'Diagnostics',      shift:'Evening',    st:'active'},
 {n:'Anjali Shah',       role:'Pharmacist',    dept:'Pharmacy',         shift:'Rotational', st:'active'},
 {n:'Deepak Nair',       role:'Ward Assistant',dept:'IPD',              shift:'Night',      st:'inactive'},
];
const ST_LABEL={active:'Active',onleave:'On leave',inactive:'Inactive'};
function initials(name){
 const c=name.replace(/\[|\]|\./g,' ').trim().split(/\s+/).filter(Boolean);
 return ((c[0]?.[0]||'')+(c[1]?.[0]||'')).toUpperCase()||'—';
}
function roleClass(r){
 if(r==='Doctor')return'doc';
 if(/Nurse/.test(r))return'nurse';
 if(/Technician|Pharmacist/.test(r))return'tech';
 return'';
}
function renderStaff(){
 const rows=STAFF.map((s,i)=>`<tr>
  <td class="who"><div class="av">${initials(s.n)}</div><div class="nm">${s.n}</div></td>
  <td><span class="role-chip ${roleClass(s.role)}"><span class="rdot"></span>${s.role}</span></td>
  <td>${s.dept}</td>
  <td>${s.shift}</td>
  <td><span class="badge b-${s.st==='onleave'?'onleave':s.st==='inactive'?'inactive':'active'}${s.st==='onleave'?' pulse':''}">${ST_LABEL[s.st]}</span></td>
  <td style="text-align:right"><button class="act-btn" title="Remove" onclick="removeStaff(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg></button></td>
 </tr>`).join('');
 document.getElementById('staffBody').innerHTML=rows;
 const doc=STAFF.filter(s=>s.role==='Doctor').length;
 const leave=STAFF.filter(s=>s.st==='onleave').length;
 setCount('stTotal',STAFF.length);setCount('stDoc',doc);
 setCount('stNurse',STAFF.length-doc);setCount('stLeave',leave);
}
function setCount(id,v){const e=document.getElementById(id);e.dataset.count=v;e.textContent=v;}
function removeStaff(i){const n=STAFF[i].n;STAFF.splice(i,1);renderStaff();toast(n+' removed');}
function openStaff(){document.getElementById('sfName').value='';document.getElementById('staffModal').classList.add('open');setTimeout(()=>document.getElementById('sfName').focus(),120);}
function closeStaff(){document.getElementById('staffModal').classList.remove('open');}
function saveStaff(){
 const name=document.getElementById('sfName').value.trim();
 if(!name){document.getElementById('sfName').focus();document.getElementById('sfName').style.borderColor='var(--error)';return;}
 document.getElementById('sfName').style.borderColor='';
 STAFF.unshift({
  n:name,
  role:document.getElementById('sfRole').value,
  dept:document.getElementById('sfDept').value,
  shift:document.getElementById('sfShift').value,
  st:document.getElementById('sfStatus').value
 });
 renderStaff();closeStaff();toast('Staff member added');
}
document.getElementById('staffModal').addEventListener('click',e=>{if(e.target.id==='staffModal')closeStaff();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeStaff();});
renderStaff();

/* ---------- View switching ---------- */
function switchView(v){
 document.querySelectorAll('.view').forEach(el=>el.classList.remove('on'));
 document.getElementById('view-'+v).classList.add('on');
 document.querySelectorAll('#switcher button').forEach(b=>b.classList.toggle('on',b.dataset.view===v));
 document.querySelectorAll('.side').forEach(s=>s.classList.remove('open'));
 window.scrollTo({top:0,behavior:'instant'});
 setTimeout(()=>animateIn(document.getElementById('view-'+v)),60);
}
document.querySelectorAll('#switcher button').forEach(b=>b.onclick=()=>switchView(b.dataset.view));
document.getElementById('menuBtn').onclick=()=>{
 const v=document.querySelector('.view.on').id.replace('view-','');
 const s=document.getElementById('side-'+v); if(s)s.classList.toggle('open');
};

/* ---------- Portal sidebar nav ---------- */
document.querySelectorAll('.nav-item').forEach(item=>{
 item.onclick=()=>{
  const scr=item.dataset.scr; const portal=item.closest('.portal');
  portal.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('on'));
  item.classList.add('on');
  portal.querySelectorAll('.main .screen').forEach(s=>s.classList.remove('on'));
  const target=document.getElementById(scr); target.classList.add('on');
  portal.closest('.view').querySelector('.side').classList.remove('open');
  animateIn(target);
 };
});
function ptGo(id){document.querySelector('#view-patient .nav-item[data-scr="'+id+'"]').click();}
function drGo(id){document.querySelector('#view-doctor .nav-item[data-scr="'+id+'"]').click();}
function adGo(id){document.querySelector('#view-admin .nav-item[data-scr="'+id+'"]').click();}
function stGo(id){document.querySelector('#view-staff .nav-item[data-scr="'+id+'"]').click();}

/* ---------- Staff panel logic ---------- */
function checkIn(btn){
 const tr=btn.closest('tr');const tok=btn.dataset.tok;
 tr.querySelector('.tok').textContent=tok;
 tr.querySelector('.st').innerHTML='<span class="badge b-confirmed">Checked in</span>';
 btn.disabled=true;btn.classList.remove('btn-primary');btn.classList.add('btn-ghost');btn.textContent='Checked in';btn.style.pointerEvents='none';
 toast('Checked in \u00b7 Token '+tok);
}
let waitTokens=[['A-11','Anjali Desai','Dermatology'],['A-12','Imran Shaikh','Orthopedics'],['A-13','Neha Patel','General Medicine'],['A-14','Vijay Rao','Cardiology']];
let regSeq=14;
function renderQueue(){
 const wrap=document.getElementById('queueList');if(!wrap)return;
 wrap.innerHTML=waitTokens.map(([t,n,d],i)=>{
  const badge=i===0?'<span class="badge b-processing pulse">Next</span>':'<span class="badge b-pending">Waiting</span>';
  const ini=n.split(' ').map(w=>w[0]).slice(0,2).join('');
  return '<div class="appt"><div class="tm"><div class="h">'+t+'</div><div class="m">Token</div></div><div class="sep"></div><div class="av">'+ini+'</div><div class="info"><div class="nm">'+n+'</div><div class="sub">'+d+'</div></div>'+badge+'</div>';
 }).join('')||'<p style="color:var(--muted);padding:8px 2px">Queue is empty.</p>';
 const c=document.getElementById('waitCount');if(c)c.textContent=waitTokens.length+' waiting';
}
function callNext(){
 if(!waitTokens.length){toast('Queue is empty');return;}
 const [t,n,d]=waitTokens.shift();
 document.getElementById('nowTok').textContent=t;
 document.getElementById('nowName').textContent=n;
 document.getElementById('nowDept').textContent=d+' \u00b7 Counter 2';
 renderQueue();toast('Now serving '+t+' \u00b7 '+n);
}
function registerWalkin(){
 const el=document.getElementById('rwName');const nm=(el.value||'').trim()||'Walk-in patient';
 const dept=document.getElementById('rwDept').value;
 regSeq++;const tok='A-'+regSeq;
 document.getElementById('rwToken').textContent=tok;
 waitTokens.push([tok,nm,dept]);renderQueue();
 toast(nm+' registered \u00b7 Token '+tok);
 el.value='';['rwAge','rwPhone','rwReason'].forEach(id=>{const f=document.getElementById(id);if(f)f.value='';});
}
function markGiven(btn){
 btn.closest('tr').querySelector('.st').innerHTML='<span class="badge b-completed">Given</span>';
 btn.disabled=true;btn.classList.remove('btn-primary');btn.classList.add('btn-ghost');btn.textContent='Given';btn.style.pointerEvents='none';
 toast('Medication marked as given');
}
function recordVitals(btn){
 btn.disabled=true;btn.classList.add('btn-ghost');btn.textContent='Recorded';btn.style.pointerEvents='none';
 toast('Vitals recorded');
}

/* ---------- Website screens ---------- */
function webGo(s){
 document.querySelectorAll('#view-web .screen').forEach(x=>x.classList.remove('on'));
 document.getElementById('web-'+s).classList.add('on');
 window.scrollTo({top:0,behavior:'smooth'});
}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

/* ---------- Animations: counters, bars, donut ---------- */
function animateIn(root){
 root.querySelectorAll('[data-count]').forEach(el=>{
  const dec=el.dataset.count.includes('.');const end=parseFloat(el.dataset.count);let t0=null;
  const step=ts=>{if(!t0)t0=ts;const p=Math.min((ts-t0)/900,1);const e=1-Math.pow(1-p,3);
   el.textContent=dec?(e*end).toFixed(1):Math.round(e*end).toLocaleString('en-IN');
   if(p<1)requestAnimationFrame(step);};
  requestAnimationFrame(step);
 });
 root.querySelectorAll('.chart-bars .col').forEach((c,i)=>{c.style.height='0';setTimeout(()=>c.style.height=c.dataset.h+'%',80+i*70);});
 root.querySelectorAll('.donut').forEach(d=>{
  const C=2*Math.PI*46;let cum=0;
  d.querySelectorAll('circle').forEach((c,i)=>{
   const pct=parseFloat(c.dataset.seg);const len=pct/100*C;
   c.style.strokeDasharray='0 '+C;c.style.strokeDashoffset=-(cum/100*C);
   setTimeout(()=>c.style.strokeDasharray=(len-2)+' '+C,120+i*160);
   cum+=pct;
  });
 });
}

/* ---------- Booking flow ---------- */
let booking={dept:null,doc:null,date:null,slot:null};
const SLOTS=['09:00','09:30','10:00','10:30','11:00','11:30','12:00','04:00','04:30','05:00','05:30','06:00'];
function startBooking(deptId){
 switchView('web');webGo('book');booking={dept:null,doc:null,date:null,slot:null};
 document.getElementById('bookDeptGrid').innerHTML=DEPTS.map(x=>deptCard(x,'pickDept(\''+x.id+'\')')).join('');
 bookStep(1);
 if(deptId){pickDept(deptId);}
}
function setSteps(n){document.querySelectorAll('#bookSteps .step').forEach((s,i)=>{s.classList.toggle('done',i<n-1);s.classList.toggle('active',i===n-1);});}
function bookStep(n){
 [1,2,3,4].forEach(i=>document.getElementById('bs-'+i).style.display=i===n?'block':'none');
 setSteps(n);window.scrollTo({top:120,behavior:'smooth'});
}
function pickDept(id){
 booking.dept=DEPTS.find(d=>d.id===id);
 const docs=DOCS.filter(d=>d.dept===id);
 document.getElementById('bookDocSub').textContent=booking.dept.n+' consultants';
 document.getElementById('bookDocGrid').innerHTML=docs.map(x=>docCard(x,'pickDoc(\''+x.i+'\')')).join('');
 bookStep(2);
}
function pickDoc(i){
 booking.doc=DOCS.find(d=>d.i===i);
 document.getElementById('schDoc').textContent=booking.doc.n+' · '+booking.doc.sp;
 const dt=document.getElementById('schDate');const t=new Date();t.setDate(t.getDate()+1);
 dt.value=t.toISOString().slice(0,10);dt.min=new Date().toISOString().slice(0,10);booking.date=dt.value;
 dt.onchange=()=>booking.date=dt.value;
 document.getElementById('slotGrid').innerHTML=SLOTS.map((s,idx)=>`<div class="slot ${idx%5===3?'off':''}" ${idx%5===3?'':`onclick="pickSlot(this,'${s}')"`}>${s} ${(parseInt(s)>=7&&parseInt(s)<12)?'AM':'PM'}</div>`).join('');
 bookStep(3);
}
function pickSlot(el,s){
 document.querySelectorAll('#slotGrid .slot').forEach(x=>x.classList.remove('on'));
 el.classList.add('on');booking.slot=el.textContent.trim();
 const b=document.getElementById('schNext');b.disabled=false;b.style.opacity=1;
}
function confirmBooking(){
 const name=document.getElementById('pName').value||'Riya Sharma';
 const r=document.getElementById('rcpt');
 r.innerHTML=`
  <div class="r"><span>Patient</span><b>${name}</b></div>
  <div class="r"><span>Doctor</span><b>${booking.doc.n}</b></div>
  <div class="r"><span>Department</span><b>${booking.dept.n}</b></div>
  <div class="r"><span>Date</span><b>${booking.date}</b></div>
  <div class="r"><span>Time</span><b>${booking.slot}</b></div>
  <div class="r"><span>Reference</span><b>APT-${Math.floor(1000+Math.random()*9000)}</b></div>`;
 webGo('confirm');
}

/* ---------- Doctor consultation ---------- */
function openConsult(name){
 drGo('dr-consult');
 document.getElementById('consultName').textContent=name;
 document.getElementById('consultName2').textContent=name;
 const initials=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
 document.getElementById('consultAv').textContent=initials;
 consultTab('ct-diag',document.querySelector('.tabs button'));
}
function consultTab(id,btn){
 ['ct-diag','ct-rx','ct-lab'].forEach(x=>document.getElementById(x).style.display=x===id?'block':'none');
 document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('on'));
 if(btn)btn.classList.add('on');
}
function addRx(){
 const row=document.createElement('div');row.className='rx-row';
 row.innerHTML='<input placeholder="Medicine name"><input placeholder="e.g. 1-0-1"><input placeholder="Duration"><button class="rx-del" onclick="this.parentElement.remove()">'+svgD('<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>')+'</button>';
 document.getElementById('rxList').appendChild(row);
}
function finishConsult(){toast('Consultation saved & prescription issued');setTimeout(()=>drGo('dr-dash'),900);}

/* ---------- Admin: beds ---------- */
const BEDS=[];
const statuses=['available','occupied','occupied','cleaning','available','occupied','reserved','available','occupied','available','occupied','cleaning','available','occupied','reserved','available','occupied','available','occupied','occupied','available','cleaning','occupied','available'];
statuses.forEach((s,i)=>BEDS.push({no:'G-'+String(i+1).padStart(2,'0'),st:s}));
let selectedBed=null,selectedPatient=null;
const bedIc=svgD('<path d="M2 20h20M4 20v-8h16v8M6 12V8a2 2 0 0 1 2-2h3v6"/><circle cx="8" cy="9" r=".8"/>');
function renderBeds(){
 document.getElementById('bedGrid').innerHTML=BEDS.map((b,i)=>`<div class="bed ${b.st}" data-i="${i}" onclick="pickBed(${i})">${bedIc}<span class="no">${b.no}</span><span>${b.st.charAt(0).toUpperCase()+b.st.slice(1)}</span></div>`).join('');
}
function pickBed(i){
 const b=BEDS[i];
 if(b.st!=='available'){toast('Bed '+b.no+' is '+b.st,true);return;}
 if(!selectedPatient){document.getElementById('bedHint').textContent='First pick a patient from "Awaiting admission" →';return;}
 document.querySelectorAll('.bed').forEach(x=>x.classList.remove('sel'));
 document.querySelector('.bed[data-i="'+i+'"]').classList.add('sel');
 selectedBed=i;
 document.getElementById('assignBed').textContent=b.no;
 const btn=document.getElementById('assignBtn');btn.disabled=false;btn.style.opacity=1;
}
function selectAdmit(btn,name){
 document.querySelectorAll('#admitList .btn').forEach(b=>{b.className='btn btn-ghost btn-sm';b.textContent='Assign bed';});
 btn.className='btn btn-primary btn-sm';btn.textContent='Selected';
 selectedPatient=name;selectedBed=null;
 document.getElementById('assignPanel').style.display='block';
 document.getElementById('assignPt').textContent=name;
 document.getElementById('assignBed').textContent='None';
 document.getElementById('assignBtn').disabled=true;document.getElementById('assignBtn').style.opacity=.5;
 document.getElementById('bedHint').textContent='Now select an available (green) bed';
 document.querySelectorAll('.bed').forEach(x=>x.classList.remove('sel'));
}
function confirmAssign(){
 if(selectedBed===null)return;
 BEDS[selectedBed].st='occupied';renderBeds();
 toast(selectedPatient+' admitted to '+BEDS[selectedBed].no);
 document.getElementById('assignPanel').style.display='none';
 document.getElementById('bedHint').textContent='Select an available bed to assign';
 selectedPatient=null;selectedBed=null;
}
renderBeds();

/* ---------- Toast ---------- */
let toastT;
function toast(msg,warn){
 const t=document.getElementById('toast');document.getElementById('toastMsg').textContent=msg;
 t.querySelector('.tk').style.background=warn?'var(--warning)':'var(--green)';
 t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2600);
}

/* ---------- Init ---------- */
renderQueue();
animateIn(document.getElementById('view-web'));
