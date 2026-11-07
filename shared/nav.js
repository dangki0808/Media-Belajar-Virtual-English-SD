/* Navigasi bersama Virtual English Lab SD */
(function(){ try{
  var s=document.currentScript, src=(s&&s.getAttribute('src'))||'../shared/nav.js', base=src.replace(/shared\/nav\.js.*$/,'');
  if(!document.getElementById('vnav-css')){ var st=document.createElement('style'); st.id='vnav-css';
    st.textContent='.vnav{background:#2b2140;color:#fff;font-family:"Nunito","Segoe UI",system-ui,sans-serif;font-size:15px}.vnav .vin{max-width:1040px;margin:0 auto;padding:6px 16px;display:flex;gap:6px;align-items:center;overflow-x:auto;scrollbar-width:none}.vnav .vin::-webkit-scrollbar{display:none}.vnav a{color:#fff;text-decoration:none;font-weight:800;padding:6px 12px;border-radius:999px;white-space:nowrap}.vnav a.on,.vnav a:hover{background:rgba(255,255,255,.16)}.vnav .vmark{background:linear-gradient(90deg,#ff7a59,#f4b942);color:#2b2140}.vnav select{margin-left:auto;font:inherit;font-weight:800;border-radius:999px;border:0;padding:6px 10px;background:#fff;color:#2b2140}';
    document.head.appendChild(st); }
  var path=location.pathname.replace(/\\/g,'/'), m=path.match(/\/(kelas-\d|kamus|arena)\//), cur=m?m[1]:'home';
  var n=document.createElement('nav'); n.className='vnav'; n.setAttribute('aria-label','Navigasi English Lab SD');
  var h='<div class="vin"><a class="vmark" href="'+base+'index.html">🌈 English Lab SD</a><a class="'+(cur==='kamus'?'on':'')+'" href="'+base+'kamus/index.html">📚 Kamus</a><a class="'+(cur==='arena'?'on':'')+'" href="'+base+'arena/index.html">🎮 Arena</a><select aria-label="Pindah kelas"><option value="">'+(cur.indexOf('kelas')===0?'Kelas lain…':'Pilih kelas…')+'</option>';
  ['I','II','III','IV','V','VI'].forEach(function(r,i){ var f='kelas-'+(i+1); h+='<option value="'+f+'"'+(f===cur?' selected':'')+'>Kelas '+r+'</option>'; });
  n.innerHTML=h+'</select></div>'; document.body.insertBefore(n,document.body.firstChild);
  n.querySelector('select').addEventListener('change',function(){ if(this.value) location.href=base+this.value+'/index.html'; });
}catch(e){} })();
