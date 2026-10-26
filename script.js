var CATS=[['e','อิเล็กทรอนิกส์',200],['f','เสื้อผ้าและแฟชั่น',20],['s','รองเท้า',30],['b','กระเป๋า',25],['h','ของแต่งบ้าน',160],['g','เกมและอุปกรณ์เกมมิ่ง',260],['k','หนังสือ',40],['o','อื่น ๆ',90]];
var CN={};CATS.forEach(function(c){CN[c[0]]=c[1]});
/* name, price, orig, cond, cat, seller, loc, isNew, hue, variant */
var P=[
['iPhone 13 128GB สีน้ำเงิน',15900,21900,'ดีมาก','e','ปิ่นมณี','เชียงใหม่',0,215,0],
['หูฟังครอบหู Sony WH-1000XM4',5200,9990,'ดีมาก','e','คุณเอก','กรุงเทพฯ',1,230,1],
['กล้องฟิล์ม Olympus OM-10',6800,0,'ดี','e','ฟิล์มเฮ้าส์','ภูเก็ต',0,28,2],
['แจ็คเก็ตยีนส์ Levi’s วินเทจ',1450,0,'ดี','f','มินท์วินเทจ','กรุงเทพฯ',1,215,0],
['เสื้อเชิ้ตลินินสีครีม',390,890,'เหมือนใหม่','f','น้ำฝน','ขอนแก่น',0,40,1],
['Nike Air Force 1 ไซส์ 42',1900,3900,'ดีมาก','s','สนีกเกอร์ลุง','นนทบุรี',0,0,0],
['รองเท้าหนัง Dr. Martens',2600,0,'ดี','s','บอสเซอร์','เชียงราย',1,15,1],
['กระเป๋าสะพาย Coach หนังแท้',4800,12900,'ดีมาก','b','ลดา','กรุงเทพฯ',0,22,0],
['เป้เดินทาง Osprey 40L',2400,4500,'เหมือนใหม่','b','นักเดินทาง','เชียงใหม่',1,150,1],
['โคมไฟตั้งโต๊ะทรงมินิมอล',750,1500,'เหมือนใหม่','h','บ้านสวนกุหลาบ','ปทุมธานี',0,48,0],
['แจกันเซรามิกทำมือ',420,0,'ดีมาก','h','เครื่องปั้นดินเผา','ราชบุรี',1,170,1],
['Nintendo Switch OLED พร้อมกล่อง',7900,11500,'ดีมาก','g','เกมเมอร์พี','กรุงเทพฯ',1,355,0],
['จอยคอนโทรลเลอร์ PS5',1300,2300,'ดี','g','ร้านเกมมือสอง','นครราชสีมา',0,235,1],
['นิยายชุดแฮร์รี่ พอตเตอร์ 7 เล่ม',1800,0,'ดีมาก','k','หนอนหนังสือ','กรุงเทพฯ',0,12,0],
['หนังสือภาพถ่ายขาวดำ รวมผลงาน',650,1200,'เหมือนใหม่','k','ห้องสมุดเล็ก','สงขลา',1,200,1],
['จักรยานพับ Dahon ไซส์ 20 นิ้ว',8500,0,'ดี','o','ปั่นไปไหน','หัวหิน',0,100,0]
];
var data=P.map(function(p,i){return{id:i,n:p[0],p:p[1],o:p[2],c:p[3],k:p[4],s:p[5],l:p[6],nw:p[7],h:p[8],v:p[9]}});
function art(k,h,v){
 var bg='hsl('+h+' 38% 92%)',m='hsl('+h+' 32% 34%)',a='hsl('+h+' 45% 66%)',w='#fff',s='';
 var A={
 e:[
 '<rect x="68" y="28" width="64" height="144" rx="14" fill="'+m+'"/><rect x="75" y="40" width="50" height="104" rx="5" fill="'+w+'" opacity=".85"/><circle cx="100" cy="158" r="5" fill="'+a+'"/><circle cx="88" cy="56" r="8" fill="'+a+'"/>',
 '<path d="M52 118a48 48 0 0 1 96 0" fill="none" stroke="'+m+'" stroke-width="10" stroke-linecap="round"/><rect x="42" y="108" width="26" height="50" rx="12" fill="'+a+'"/><rect x="132" y="108" width="26" height="50" rx="12" fill="'+a+'"/>',
 '<rect x="40" y="62" width="120" height="86" rx="10" fill="'+m+'"/><rect x="78" y="48" width="44" height="18" rx="4" fill="'+m+'"/><circle cx="100" cy="105" r="28" fill="'+w+'" opacity=".85"/><circle cx="100" cy="105" r="16" fill="'+a+'"/>'],
 f:[
 '<path d="M70 40l-30 24 14 34 14-8v70h64v-70l14 8 14-34-30-24c-6 14-14 18-30 18s-24-4-30-18z" fill="'+m+'"/><path d="M100 58v110" stroke="'+w+'" stroke-width="3" opacity=".6"/>',
 '<path d="M72 40l-36 28 16 28 16-10v66h64V86l16 10 16-28-36-28c-6 12-14 16-28 16s-22-4-28-16z" fill="'+a+'"/><circle cx="100" cy="96" r="3" fill="'+m+'"/><circle cx="100" cy="116" r="3" fill="'+m+'"/><circle cx="100" cy="136" r="3" fill="'+m+'"/>'],
 s:[
 '<path d="M36 128c0-14 6-22 16-26l24-10c10 14 24 18 42 16l22 6c12 4 22 12 22 24v6H36z" fill="'+m+'"/><rect x="36" y="140" width="128" height="12" rx="6" fill="'+w+'"/><path d="M82 100l8 12M96 104l8 12" stroke="'+a+'" stroke-width="4" stroke-linecap="round"/>',
 '<path d="M48 54h42v50l56 14c10 3 16 10 16 20v6H48z" fill="'+m+'"/><rect x="48" y="138" width="114" height="12" rx="4" fill="'+a+'"/><path d="M56 72h26M56 86h26" stroke="'+w+'" stroke-width="3" opacity=".7"/>'],
 b:[
 '<path d="M74 84a26 26 0 0 1 52 0" fill="none" stroke="'+m+'" stroke-width="8"/><rect x="48" y="84" width="104" height="76" rx="14" fill="'+m+'"/><rect x="88" y="98" width="24" height="16" rx="4" fill="'+a+'"/>',
 '<rect x="58" y="44" width="84" height="120" rx="26" fill="'+m+'"/><rect x="72" y="84" width="56" height="44" rx="10" fill="'+a+'"/><path d="M82 58h36" stroke="'+w+'" stroke-width="5" stroke-linecap="round"/>'],
 h:[
 '<path d="M100 48l-42 54h84z" fill="'+m+'"/><rect x="97" y="100" width="6" height="52" fill="'+m+'"/><ellipse cx="100" cy="158" rx="30" ry="8" fill="'+a+'"/>',
 '<path d="M82 40h36l4 18c24 12 28 56 6 86-4 6-8 14-28 14s-24-8-28-14c-22-30-18-74 6-86z" fill="'+m+'"/><ellipse cx="100" cy="40" rx="20" ry="5" fill="'+a+'"/>'],
 g:[
 '<path d="M54 76h92c16 0 26 14 28 40l2 24c1 10-12 14-20 6l-16-18H60L44 146c-8 8-21 4-20-6l2-24c2-26 12-40 28-40z" fill="'+m+'"/><circle cx="78" cy="102" r="9" fill="'+a+'"/><circle cx="128" cy="96" r="5" fill="'+w+'"/><circle cx="140" cy="108" r="5" fill="'+w+'"/>',
 '<rect x="42" y="58" width="116" height="84" rx="12" fill="'+m+'"/><rect x="62" y="68" width="76" height="64" rx="4" fill="'+w+'" opacity=".85"/><rect x="42" y="58" width="16" height="84" rx="8" fill="'+a+'"/><rect x="142" y="58" width="16" height="84" rx="8" fill="'+a+'"/>'],
 k:[
 '<rect x="48" y="40" width="104" height="26" rx="4" fill="'+m+'"/><rect x="40" y="70" width="112" height="28" rx="4" fill="'+a+'"/><rect x="52" y="102" width="100" height="26" rx="4" fill="'+m+'"/><rect x="44" y="132" width="108" height="28" rx="4" fill="'+a+'"/>',
 '<path d="M100 56c-16-12-40-14-56-6v100c16-8 40-6 56 6 16-12 40-14 56-6V50c-16-8-40-6-56 6z" fill="'+m+'"/><path d="M100 56v100" stroke="'+w+'" stroke-width="3"/>'],
 o:[
 '<circle cx="56" cy="130" r="28" fill="none" stroke="'+m+'" stroke-width="8"/><circle cx="144" cy="130" r="28" fill="none" stroke="'+m+'" stroke-width="8"/><path d="M56 130l30-58h40l18 58M86 72l22 58M80 66h18" fill="none" stroke="'+a+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>']
 };
 var L=A[k];s=L[v%L.length];
 return '<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="ภาพสินค้า"><rect width="200" height="200" fill="'+bg+'"/><ellipse cx="100" cy="176" rx="50" ry="6" fill="'+m+'" opacity=".12"/>'+s+'</svg>';
}
var fmt=function(n){return '฿'+n.toLocaleString('th-TH')};
var favs={};
function card(d){
 return '<article class="card"><div class="pimg">'+art(d.k,d.h,d.v)+'<div class="badge">'+(d.nw?'<i>NEW</i>':'')+(d.o?'<i class="s">ราคาพิเศษ</i>':'')+'</div><button class="fav'+(favs[d.id]?' on':'')+'" data-f="'+d.id+'" aria-label="เพิ่มในรายการโปรด"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.800-8 11-8 11z"/></svg></button><button class="view" data-v="'+d.id+'">ดูรายละเอียด</button></div><div class="info"><h3>'+d.n+'</h3><div class="price">'+fmt(d.p)+(d.o?'<s>'+fmt(d.o)+'</s>':'')+'</div><div class="meta"><span>'+d.c+'</span><em>'+CN[d.k]+'</em></div><div class="seller"><span>'+d.s+'</span><span>'+d.l+'</span></div></div></article>';
}
var $=function(i){return document.getElementById(i)};
function render(){
 var q=$('q').value.trim().toLowerCase(),c=$('fc2').value,cd=$('fcond').value,mx=+$('pr').value,so=$('so').value;
 $('pv').textContent=mx>=30000?'ไม่จำกัด':fmt(mx);
 var r=data.filter(function(d){return(!q||d.n.toLowerCase().indexOf(q)>-1)&&(!c||d.k===c)&&(!cd||d.c===cd)&&(mx>=30000||d.p<=mx)});
 if(so==='asc')r.sort(function(a,b){return a.p-b.p});else if(so==='desc')r.sort(function(a,b){return b.p-a.p});else r.sort(function(a,b){return b.id-a.id});
 $('res').textContent='พบ '+r.length+' รายการ';
 $('grid').innerHTML=r.length?r.map(card).join(''):'<div class="empty">ไม่พบสินค้าที่ตรงกับตัวกรอง ลองเพิ่มช่วงราคาหรือเปลี่ยนหมวดหมู่</div>';
 $('newGrid').innerHTML=data.filter(function(d){return d.nw}).slice(0,4).map(card).join('');
 $('fc').textContent=Object.keys(favs).filter(function(k){return favs[k]}).length;
}
var tt;function toast(m){var t=$('toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},2000)}
/* init */
$('fc2').innerHTML='<option value="">ทุกหมวดหมู่</option>'+CATS.map(function(c){return '<option value="'+c[0]+'">'+c[1]+'</option>'}).join('');
$('catGrid').innerHTML=CATS.map(function(c){var n=data.filter(function(d){return d.k===c[0]}).length;return '<button class="cat" data-c="'+c[0]+'"><div class="ic">'+art(c[0],c[2],1)+'</div><span>'+c[1]+'<small>'+n+' รายการ</small></span></button>'}).join('');
$('stage').innerHTML='<div class="main-img">'+art('e',215,0)+'</div><div class="tag">ลด 27%</div><div class="fl a"><div class="t">'+art('s',0,0)+'</div><div><small>รองเท้า · ดีมาก</small><strong>฿1,900</strong></div></div><div class="fl b"><div class="t">'+art('b',22,0)+'</div><div><small>กระเป๋า · ดีมาก</small><strong>฿4,800</strong></div></div><div class="fl c"><div class="t">'+art('g',355,0)+'</div><div><small>เกม · ดีมาก</small><strong>฿7,900</strong></div></div>';
['q','fc2','fcond','pr','so'].forEach(function(i){$(i).addEventListener('input',render)});
$('nq').addEventListener('keydown',function(e){if(e.key==='Enter'){$('q').value=this.value;render();$('browse').scrollIntoView()}});
$('catGrid').addEventListener('click',function(e){var b=e.target.closest('[data-c]');if(b){$('fc2').value=b.dataset.c;render();$('browse').scrollIntoView()}});
document.addEventListener('click',function(e){
 var f=e.target.closest('[data-f]');if(f){var id=f.dataset.f;favs[id]=!favs[id];toast(favs[id]?'เพิ่มในรายการโปรดแล้ว':'นำออกจากรายการโปรดแล้ว');render();return}
 var v=e.target.closest('[data-v]');if(v)toast('หน้ารายละเอียดสินค้า (เดโม)');
});
$('favBtn').onclick=function(){var n=$('fc').textContent;toast('รายการโปรดของคุณ '+n+' รายการ')};
$('bg').onclick=function(){$('mob').classList.toggle('open')};
$('mob').onclick=function(e){if(e.target.tagName==='A')$('mob').classList.remove('open')};
render();
