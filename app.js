const $ = id => document.getElementById(id);
const num = id => parseFloat((($(id)?.value || '0') + '').replace(',', '.')) || 0;
const satu = x => (Number.isFinite(x) ? x : 0).toLocaleString('id-ID', {minimumFractionDigits:1, maximumFractionDigits:1});

const AF = [
['1.0','1,0 - Bed rest'],
['1.2','1,2 - Light'],
['1.3','1,3 - Moderate'],
['1.5','1,5 - Heavy']
];

const SF = [
['1.0','1,0 - Normal'],
['1.1','1,1 - Mild'],
['1.2','1,2 - Moderate'],
['1.3','1,3 - Severe'],
['1.4','1,4'],
['1.5','1,5']
];

const ORAL = [

  // ==========================================
  // DIET DIABETES MELLITUS A
  // ==========================================
  ['DIET DM A 1100 KKAL',1100,50,30,160],
  ['DIET DM A 1300 KKAL',1300,55,35,195],
  ['DIET DM A 1500 KKAL',1500,60,40,225],
  ['DIET DM A 1700 KKAL',1700,65,45,260],
  ['DIET DM A 1900 KKAL',1900,70,50,300],
  ['DIET DM A 2100 KKAL',2100,80,55,325],
  ['DIET DM A 2300 KKAL',2300,85,65,350],
  ['DIET DM A 2500 KKAL',2500,90,65,390],

  // ==========================================
  // DIET DIABETES MELLITUS B
  // ==========================================
  ['DIET DM B 1100 KKAL',1100,36.49,22.81,179.35],
  ['DIET DM B 1300 KKAL',1300,41.74,28.55,217.88],
  ['DIET DM B 1500 KKAL',1500,47.3,34.3,253.5],
  ['DIET DM B 1700 KKAL',1700,49.82,36.28,300.58],
  ['DIET DM B 1900 KKAL',1900,53.97,38.88,328.41],
  ['DIET DM B 2100 KKAL',2100,65.49,45.85,377.45],
  ['DIET DM B 2300 KKAL',2300,67.85,50.89,395.73],
  ['DIET DM B 2500 KKAL',2500,75.11,57.29,424.98],
  ['DIET DM B 2700 KKAL',2700,82.33,62.5,479.39],
  ['DIET DM B 2900 KKAL',2900,92.3,67.69,511.32],

  // ==========================================
  // DIET DIABETES MELLITUS B1
  // ==========================================
  ['DIET DM B1 1100 KKAL',1100,59.36,25.07,171.15],
  ['DIET DM B1 1300 KKAL',1300,69.21,31.16,190.27],
  ['DIET DM B1 1500 KKAL',1500,76.12,31.79,224.07],
  ['DIET DM B1 1700 KKAL',1700,87.26,35.95,255.55],
  ['DIET DM B1 1900 KKAL',1900,95.91,41.02,284.42],
  ['DIET DM B1 2100 KKAL',2100,105.41,84.7,317.11],
  ['DIET DM B1 2300 KKAL',2300,115.44,51.19,348.01],
  ['DIET DM B1 2500 KKAL',2500,126.9,51.78,395.92],
  ['DIET DM B1 2700 KKAL',2700,135.1,60.42,413.05],
  ['DIET DM B1 2900 KKAL',2900,144.77,68.22,443.18],

  // ==========================================
  // DIET NEFROPATI DIABETES
  // ==========================================
  ['DND 30',1294,29.7,39.6,206.4],
  ['DND 35',1538,34.4,47.5,247.3],
  ['DND 40',1722,41.1,54.8,270],
  ['DND 45',1895,45.7,62.6,290.6],
  ['DND 50',2093,51.4,64.1,330.6],

  // ==========================================
  // DIET RENDAH PROTEIN
  // ==========================================
  ['DIET RP 30 GR',1523,31.1,47.7,241.7],
  ['DIET RP 35 GR',1731,35,60.3,261],
  ['DIET RP 40 GR',1920,41.3,62.7,294.3],

  // ==========================================
  // DIET RENDAH KARBOHIDRAT
  // ==========================================
  ['DIET RKH 1300 KKAL',1312.45,64.1588,52.1668,149.9583],
  ['DIET RKH 1500 KKAL',1494.3,74.89,59.2,169.41],

  // ==========================================
  // DIET HATI
  // ==========================================
  ['DH I (TIM SARING)',1223.99,70.04,29.155,175.81],
  ['DH II (BUBUR)',1538.1,75.8,35.35,234.2],
  ['DH III (NASI)',1938.45,82.1,51.55,291.95],

  // ==========================================
  // DIET JANTUNG
  // ==========================================
  ['DJ I (CAIR)',842.8,26.8,8.4,162.6],
  ['DJ II (BUBUR)',1538.1,75.8,35.35,234.2],
 ['DJ III (NASI)',1938.45,82.1,51.55,291.95],

//   // ==========================================
  // DIET KANKER
  // ==========================================
  ['DIET KANKER 1 (EXCEL)',2046.95,92.3,64.85,279.2],
  ['DIET KANKER 2 (EXCEL)',2314.7,98.6,66.35,337.25],

  ['DIET KANKER 1 (WORD)',1725,74.7,56.8,220.2],
  ['DIET KANKER 2 (WORD)',2102,82.8,63.2,299.5],

  // ==========================================
  // BUBUR SARING
  // ==========================================
  ['BUBUR SARING BIASA',1233.8,33.9,24.5,221],
  ['BUBUR SARING DM',703.1,33.7,7.5,124.6],

  // ==========================================
  // TIM SARING
  // ==========================================
  ['TIM SARING STANDAR',1521.6,63,53.95,192.7],
  ['TIM SARING ENCER',848.1,32.9,28.275,113.5],

  // ==========================================
  // CPT
  // ==========================================
  ['CPT BIASA',160,5.8,1.9,30.1],
  ['CPT DM',73.3,7.3,0.2,10.1],

  // ==========================================
  // MAKANAN ANAK
  // ==========================================
  ['ANAK A (1-3 TAHUN)',1122.4,36.5,36.9,165],
  ['ANAK B (4-6 TAHUN)',1504.5,60.6,49.8,207.3],
  ['ANAK C (7-9 TAHUN)',1714.3,69.5,59.5,229],
  ['ANAK D (10-12 TAHUN)',2084.9,74.2,70.2,295.6],

  // Data tambahan yang terdapat pada Sheet3 sumber anak
  ['ANAK A - SHEET3',1000,57,36,109],

  // ==========================================
  // TETP KELAS I, II, III
  // ==========================================
  ['TETP S',2011.2,84.3,70.25,264.75],
  ['TETP M',2281.2,88.8,70.85,324.45],
  ['TETP L',2461.2,91.8,71.05,364.25],

  // ==========================================
  // TETP TANPA SUSU
  // ==========================================
  ['TETP S TANPA SUSU',1895.2,79.5,64.65,252.05],
  ['TETP M TANPA SUSU',2165.2,84,65.25,311.75],
  ['TETP L TANPA SUSU',2345.2,87,65.45,351.55],

  // ==========================================
  // TETP VIP
  // ==========================================
  ['TETP S VIP',2310.2,98.5,86.6,287.45],
  ['TETP M VIP',2580.2,103,87.2,347.15],
  ['TETP L VIP',2760.2,106,87.4,386.95],

  // ==========================================
  // DIET BIASA
  // ==========================================
  ['DIET BIASA 1',1529.2,67.5,57.55,191],
  ['DIET BIASA 2',1799.2,72,57.85,250.1],

  // ==========================================
  // DIET LAMBUNG
  // ==========================================
  ['DL I (TIM SARING)',1229.99,76.54,30.055,167.31],
  ['DL II (BUBUR)',1598.1,81.9,42.75,225.7],
  ['DL III (NASI)',1865.85,88.2,43.95,283.45]

];

const ENTERAL_DEWASA = [
['Sonde A',103,4.2,3.3,15.2],
['Sonde B',154,6.6,4.4,23.4],
['Sonde C',206,8.4,6.6,30.4],
['Sonde RL',95,5.4,1.1,15.7],
['Sonde RP',94,1.8,5.2,5.2],
['Sonde DM A',95,6.9,1.1,11.1],
['Sonde DM B',154,10.8,2.2,22.2],
['Sonde DND',94,1.8,5.2,5.2],
['Soya Blendera',100.1,4,3.3,13.7],
['Soya Proten',88.8,4,2.4,13.7],
['Soya Mililea',110,5.5,3,15.5],
['Peptamen',100,3,4,13],
['Nutrican',99.4,5.6,2.5,13.6],
['Diabetasol',95.8,3.8,2.6,14.9],
['CPT BIASA',160,5.8,1.9,30.1],
['CPT DM',73.3,7.3,0.2,10.1],
['EKS JUS',108.3,0.7,0.1,27.7],
['TS ENCER',141.4,5.5,4.7,3.8],
['TS ENCER+PT',115.5,6.5,4.5,11.3],
['Lactona skim',55,4.5,0,8.5],
['Hepatosol',105.6,3.08,4.18,13.4],
['Peptibren',109.2,5.72,2.86,14.82],
['Nephrisol',130.5,2.6,4.6,19.4],
['Nephrisol D',161.5,5.9,5.25,21.7],
['Entramix',103.5,3.5,3.2,14.6],
['Entrasol Platinum',96.5,4.6,2.7,10.3]
];

const ENTERAL_ANAK = [
['Lactogen 1',66.9,1.4,3.4,7.5],
['Lactogen prematur & LBW',83,2.8,4.1,8.7],
['Lactogen Lactose Free',67,1.4,3.4,7.8],
['S26 Promil Gold tahap 1',65,1.3,3.6,7.4],
['SGM BBLR',80,2.6,4.1,8.5],
['SGM Gain',100,2.6,5.8,10],
['Infatrini',100,2.7,5.5,10.1],
['Nutribaby Pepti (Ekstensif Hidrolisat)',65,1.7,3.6,6.5],
['Morinaga BMT PHP (Partial Hidrolisat)',64,1.6,3.1,7.6],
['Neocate LCP',67,1.8,3.5,7.1],
['Puramino',75,2.1,4,8],
['Lactogen 2',73.9,1.85,3.3,9.2],
['Nestle Lactogrow 3',86.5,2.7,3.2,11.3],
['SGM LLM+ 0-12',66,1.5,3.1,8],
['Neocate Junior',98.8,2.7,4.6,11.6],
['SGM Ananda Isoprosoy',66,1.5,3.1,8],
['Nutrinidrink',150,3.4,6.9,18.6],
['SGM Optigrow',100,2.4,3.9,14],
['Dancow',70.6,2.9,2.9,7.6],
['ASI PERAH >14hr',65,1.2,3.7,7],
['CPT BIASA',160,5.8,1.9,30.1],
['CPT DM',73.3,7.3,0.2,10.1],
['EKS JUS',108.3,0.7,0.1,27.7],
['TS ENCER',848.1,32.9,28.28,22.5],
['TS ENCER+PT',693,39,27,67.5]
];

const PN = [
['10% Dextran 40 in RL',0,0,0,0,306,0.13,0.004,'BM 40.000 = 100'],
['6% Dextran 70 in NS',0,0,0,0,349,0.154,0,'BM 60.000 = 60'],
['Aminofluid (500 ml & 1L)',0.4,0,0,0.1,930,0,0,''],
['Aminofusin Hepar inf 500 ml',0.4,0.1,0,0.1,800,0,0,''],
['Aminofusin L 600 (500 ml)',0.6,0.1,0,0.1,1100,0,0,''],
['Aminofusin Ped inf 250 ml',0.2,0.1,0,0,600,0,0,''],
['Aminoleban inf 500 ml',0.3,0.1,0,0,768,0,0,''],
['Aminosteril 10%',0.4,0.1,0,0,1000,0,0,''],
['Aminosteril 6%',0.2,0.1,0,0,600,0,0,''],
['Amiparen 10% inf 500 ml',0.4,0.1,0,0,900,0,0,''],
['Aminovel 600',0.4,0.1,0,0,1320,0,0,'500 ml'],
['Amiparen',0,0.1,0,0,888,0,0,'500 ml'],
['Asering',0,0,0,0,273,0.1,0,'500 ml'],
['Asering⁵',0.2,0,0,0,550,0.1,0,'500 ml'],
['B Fluid inf 500 ml & 1000 ml',0.4,0,0,0.1,0,0,0,''],
['Clinimix N9G15E inf 1 L',0.4,0,0,0.1,845,0,0,''],
['Clinimix N9G20E inf 1 L',0.5,0,0,0.1,980,0,0,''],
['Clinoleic inf 20% 250 ml',2,0,0.2,0,270,0,0,''],
['Comafusin Hepar inf 500 ml',0.4,0.1,0,0.1,800,0,0,''],
['Clinimix 17G35',1.4,0.1,0,0,1479,0.1,0.1,''],
['Clinimix N17G35E',1.4,0.1,0,0,1625,0.1,0.1,''],
['Dextrose 10% 500 ml',0.4,0,0,0.1,505,0,0,''],
['Dextrose 40% 25 ml',1.6,0,0,0.4,2020,0,0,''],
['Dextrose 5% 500 ml',0.2,0,0,0.1,252,0,0,''],
['D10',0.4,0,0,0.1,555,0,0,'500 ml'],
['D10 1/5 NS',0.4,0,0,0.1,615,0,0,'500 ml'],
['D10NS',0.4,0,0,0.1,855,0.2,0,'500 ml'],
['D2.5 1/2 NS',0.1,0,0,0,289,0.1,0,'500 ml'],
['D4 1/5 NS',0.2,0,0,0,282,0,0,'500 ml'],
['D40',1.6,0,0,0.4,2018,0,0,'25 ml'],
['D5',0.2,0,0,0.1,253,0,0,'500 ml'],
['D5 1/2 NS',0.2,0,0,0.1,428,0.1,0,'500 ml'],
['D5 1/4 NS',0.2,0,0,0.1,353,0,0,'500 ml'],
['D5NS',0.2,0,0,0.1,578,0.2,0,'500 ml'],
['EAS PFRimmer',0.1,0,0,0,700,0,0,'Ginjal'],
['Intrafusin 10%',0,0.1,0,0,810,0,0,''],
['Intrafusin 3.5% SXE',0.2,0,0,0,790,0.1,0,''],
['Intralyt',0.1,0,0,0,305,0.1,0,''],
['KAEN 1B',0.2,0,0,0,285,0.4,0,''],
['KAEN 3A',0.1,0,0,0,290,0.1,0,''],
['KAEN 3B',0.1,0,0,0,290,0.1,0,''],
['KAEN 4A Ped',0.2,0,0,0,284,0,0,''],
['KAEN 4B Ped',0.2,0,0,0,284,0,0,''],
['KAEN Mg3',0.4,0,0,0,728,0.1,0,'500/1000 ml'],
['KCL',0,0,0,0,2000,0,1,'25 ml'],
['Kabiven inf 1440 ml',0.7,0,0,0.1,850,0,0,''],
['Kalbamin inf 10% 500 ml',0.4,0.1,0,0,800,0,0,''],
['Kidmin',0.6,0.072,0,0,0,0,0,'500 ml'],
['Renxamin inf 9% 200 ml',0.4,0.1,0,0,860,0,0,''],
['Smofkabiven Peri inf 1206 ml',0.7,0,0,0.1,850,0,0,''],
['Triofusin 1000',1,0,0,0,1400,0,0,''],
['Triofusin 1600',1.6,0,0,0,2500,0,0,''],
['Triofusin 500',0.5,0,0,0,700,0,0,''],
['Triofusin E1000',1,0,0,0,1600,0.1,0,''],
['Triparen 1',0.9,0,0,0,1660,0,0,'500–1000 ml'],
['Triparen 2',1.2,0,0,0,1946,0.1,0,''],
['Tutofusin CH Forte',0.2,0.1,0,0,600,0,0,''],
['Tutofusin LC',0.2,0,0,0,420,0,0,'Vit'],
['Tutofusin Ops',0.2,0.1,0,0,500,0,0,'']
];const RECALL=[
['Makanan Pokok',175,4,0,40],
['Lemak Rendah',50,7,2,0],
['Lemak Sedang',75,7,5,0],
['Lemak Tinggi',150,7,13,0],
['Sayur golongan B',25,1,0,5],
['Sayur golongan C',50,3,0,10],
['Lauk Nabati',75,5,3,7],
['Buah',50,0,0,12],
['Gula',50,0,0,12],
['Minyak',50,0,5,0],
['Susu Non fat',75,7,0,10],
['Susu Low Fat',125,7,6,10],
['Susu High Fat',150,7,10,10],
['Bubur Kacang Ijo',139.4,3.5,2.1,27.6],
['Snack',140,3.5,2.1,28]
];

let need={e:0,p:0,l:0,k:0,source:'Belum dipilih'};
let total={
  oral:{e:0,p:0,l:0,k:0},
  recall:{e:0,p:0,l:0,k:0},
  entD:{e:0,p:0,l:0,k:0},
  entA:{e:0,p:0,l:0,k:0},
  pn:{e:0,p:0,l:0,k:0}
};

let ndStore={}, dkStore={}, dmStore={};

function opts(data){
  return data.map((r,i)=>`<option value="${i}">${r[0]}</option>`).join('');
}

function fill(){
  document.querySelectorAll('.af').forEach(s=>
    s.innerHTML=AF.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join('')
  );

  document.querySelectorAll('.sf').forEach(s=>
    s.innerHTML=SF.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join('')
  );

  $('oralSelect').innerHTML=opts(ORAL);
  $('entDSelect').innerHTML=opts(ENTERAL_DEWASA);
  $('entASelect').innerHTML=opts(ENTERAL_ANAK);
  $('pnSelect').innerHTML=opts(PN);

  $('recallRows').innerHTML=[0,1,2,3].map(i=>`
    <tr>
      <td><select id="recallSelect${i}">${opts(RECALL)}</select></td>
      <td><input id="recallJumlah${i}" type="number" step="0.1" value="0"></td>
      <td id="recallE${i}">0,0</td>
      <td id="recallP${i}">0,0</td>
      <td id="recallL${i}">0,0</td>
      <td id="recallK${i}">0,0</td>
    </tr>
  `).join('');

  $('insulinRows').innerHTML=[
    'Pagi',
    'Snack Pagi',
    'Siang',
    'Snack Sore',
    'Malam'
  ].map((w,i)=>`
    <tr>
      <td>${w}</td>
      <td><input id="insKh${i}" type="number" step="0.1" value="0"></td>
      <td><input id="insRasio${i}" type="number" step="0.1" value="10"></td>
      <td id="insUnit${i}">0,0</td>
    </tr>
  `).join('');
}

function macro(e,p,lemakPct){
  const l=e*lemakPct/100/9;
  const k=(e-p*4-l*9)/4;
  return {e,p,l,k};
}

function brocca(jk,tb){
  if(!tb) return 0;

  if(jk==='Laki-laki'){
    return tb<160
      ? (tb-100)*0.85
      : (tb-100)*0.9;
  }

  return tb<150
    ? (tb-100)*0.8
    : (tb-100)*0.85;
}

function mifflin(jk,bb,tb,u){
  return jk==='Laki-laki'
    ? 10*bb+6.25*tb-5*u+5
    : 10*bb+6.25*tb-5*u-161;
}

function harris(jk,bb,tb,u){
  return jk==='Laki-laki'
    ? 66.5+13.75*bb+5.003*tb-6.755*u
    : 655.1+9.563*bb+1.850*tb-4.676*u;
}

function row(n,v,s){
  return `<tr><td>${n}</td><td>${v}</td><td>${s||'-'}</td></tr>`;
}

function dateParse(s){
  if(!s) return null;

  const p=s.split(/[\/\-]/).map(Number);
  if(p.length!==3) return null;

  const d=new Date(p[2],p[1]-1,p[0]);
  return isNaN(d) ? null : d;
}

function diff(d){
  if(!d) return null;

  const now=new Date();
  let y=now.getFullYear()-d.getFullYear();
  let m=now.getMonth()-d.getMonth();
  let day=now.getDate()-d.getDate();

  if(day<0){
    m--;
    day+=30;
  }

  if(m<0){
    y--;
    m+=12;
  }

  const days=Math.floor((now-d)/86400000);

  return {
    y,
    m,
    d:day,
    months:y*12+m,
    days
  };
}

function usiaText(a){
  return a ? `${a.y} th ${a.m} bln ${a.d} hr` : '';
}

function medianLilaDewasa(jk,u){
  const male=[
    [20,29,31.7],
    [30,39,32.1],
    [40,49,31.7],
    [50,59,31.2],
    [60,69,30.7],
    [70,79,29.5],
    [80,200,28.5]
  ];

  const female=[
    [20,29,29.9],
    [30,39,30.6],
    [40,49,31.1],
    [50,59,31.2],
    [60,69,30.8],
    [70,79,30.1],
    [80,200,29.2]
  ];

  const arr=jk==='Laki-laki' ? male : female;
  const r=arr.find(x=>u>=x[0]&&u<=x[1]);

  return r ? r[2] : 0;
}

function interpretImtDewasa(imt){
  if(!imt) return '-';
  if(imt<17) return 'Sangat Kurus';
  if(imt<18.5) return 'Kurus';
  if(imt<=25) return 'Normal (Ideal)';
  if(imt<=27) return 'Gemuk';
  return 'Obesitas';
}

function hitungAntro(){
  const jk=$('jk').value;
  const u=num('usia');
  const l=num('lila');
  const ul=num('ulna');
  const bb=num('bb');
  const tb=num('tb');
  const bbs=num('bbSebelum');
  const bet=num('betis');
  const tl=num('tl');

  const imt=tb ? bb/((tb/100)**2) : 0;

  // IMT Estimasi dari LILA - Powell-Tuck
  let imtLila=0;

  if(l){
    imtLila=jk==='Laki-laki'
      ? (1.01*l)-4.7
      : (1.10*l)-6.7;
  }

  if($('imtLila')){
    $('imtLila').value=imtLila ? satu(imtLila) : '';
  }

 // BBI Brocca Modifikasi Asia
const bbi=brocca(jk,tb);

  // BBI Broca (Kriteria TB, Usia, -10%)
let bbiBroca=0;

if(tb){
  if(
    (jk==='Perempuan' && tb<150) ||
    (jk==='Laki-laki' && tb<160) ||
    u>40
  ){
    bbiBroca=tb-100;
  }else{
    bbiBroca=(tb-100)-(0.10*(tb-100));
  }
}
// BBI sederhana TB - 100
const bbiTb100=tb ? tb-100 : 0;

  // BB Adjusted sesuai master Excel
  const adj=(bb&&bbi)
    ? bbi-(0.25*(bb-bbi))
    : 0;

  // Persentase perubahan berat badan
  const pct=bbs
    ? ((bbs-bb)/bbs*100)
    : 0;

  const medLila=medianLilaDewasa(jk,u);

  const pctLila=medLila&&l
    ? l/medLila*100
    : 0;

  // BB estimasi LILA - Paravista
  const bbParavista=l
    ? (2.81*l)-18.6
    : 0;

  // BB estimasi LILA - Cerra
  let bbCerra=0;

  if(l&&tb){
    bbCerra=jk==='Laki-laki'
      ? (l/29)*(tb-100)
      : (l/28.5)*(tb-100);
  }

  // TB estimasi ULNA - Ilayperuma
  const tbIlayperuma=ul
    ? (
        jk==='Laki-laki'
          ? 97.252+(2.645*ul)
          : 68.777+(3.536*ul)
      )
    : 0;

  // BB estimasi lingkar betis
  const bbBetis=bet
    ? (1.33*bet)-5.5
    : 0;

  // BB estimasi kasus spesial
  const bbKasusSpesial=tb
    ? 22*((tb/100)**2)
    : 0;

  // TB estimasi ULNA - BAPEN
  const tbBapen=ul
    ? (
        jk==='Laki-laki'
          ? 79.2+(3.7*ul)
          : 60.6+(3.7*ul)
      )
    : 0;

  // BB estimasi dari LILA + Tinggi Lutut
  const bbLilaTl=(l&&tl)
    ? (l*2.5)+(tl*2.5)-80
    : 0;

  // TB estimasi dari Tinggi Lutut - Chumlea
  const tbChumlea=tl
    ? (
        jk==='Laki-laki'
          ? (2.02*tl)-(0.04*u)+64.19
          : (1.83*tl)-(0.24*u)+84.88
      )
    : 0;

  $('antroRows').innerHTML=[
    row('IMT',satu(imt),'kg/m²'),
    row('Status gizi berdasarkan IMT',interpretImtDewasa(imt),''),
    row('% LILA/U',pctLila?satu(pctLila):'0,0','%'),
    row('BBI Brocca Modifikasi Asia',satu(bbi),'kg'),
row('BBI Broca (Kriteria TB, Usia, -10%)',satu(bbiBroca),'kg'),
row('BBI TB−100',satu(bbiTb100),'kg'),
    row('IMT Estimasi dari LILA',imtLila?satu(imtLila):'0,0','kg/m²'),
    row('BB Adjusted',satu(adj),'kg'),
    row('% perubahan BB',satu(pct),'%'),
    row('BB estimasi dari LILA Paravista',satu(bbParavista),'kg'),
    row('BB estimasi dari LILA Cerra',satu(bbCerra),'kg'),
    row('TB estimasi dari Ulna Ilayperuma',satu(tbIlayperuma),'cm'),
    row('BB estimasi dari lingkar betis',satu(bbBetis),'kg'),
    row('BB estimasi kasus spesial',satu(bbKasusSpesial),'kg'),
    row('TB estimasi dari Ulna BAPEN',satu(tbBapen),'cm'),
    row('BB estimasi dari LILA + TL',satu(bbLilaTl),'kg'),
    row('TB estimasi dari TL Chumlea',satu(tbChumlea),'cm')
  ].join('');
}

function hitungAnak(){
  const a=diff(dateParse($('anakTgl').value));

  $('anakUsia').value=usiaText(a);

  const months=a ? a.months : 0;
  const years=a ? a.y : 0;

  function r(n,rg,v){
    return `
      <tr>
        <td>${n}</td>
        <td>${rg}</td>
        <td>${v?satu(v):'di luar rentang'}</td>
      </tr>
    `;
  }

  $('anakRuleRows').innerHTML=[
    r(
      'Berat Badan',
      '0–12 bulan',
      months<=12 ? months/2+4 : 0
    ),
    r(
      'Berat Badan',
      '1–6 tahun',
      years>=1&&years<=6 ? years*2+8 : 0
    ),
    r(
      'Berat Badan',
      '7–12 tahun',
      years>=7&&years<=12 ? years*3+7 : 0
    ),
    r(
      'Tinggi Badan',
      '0–2 tahun',
      months<=24 ? months*2.5+50 : 0
    ),
    r(
      'Tinggi Badan',
      '2–12 tahun',
      years>=2&&years<=12 ? years*6+77 : 0
    ),
    r(
      'Lingkar Kepala',
      '0–12 bulan',
      months<=12 ? 35+months : 0
    ),
    r(
      'Lingkar Kepala',
      '>1 tahun',
      years>=1 ? 46+years*0.5 : 0
    )
  ].join('');

  const ml=num('muacLila');

  const med=num('muacBulan')
    ? 14.5+(num('muacBulan')-6)*.035
    : num('muacTahun')
      ? 15.5+(num('muacTahun')-5)*.35
      : 0;

  const pct=med&&ml
    ? ml/med*100
    : 0;

  $('muacHasil').value=pct
    ? `${satu(pct)}%`
    : '';

  const pma=diff(dateParse($('pmaTgl').value));

  $('pmaKrono').value=usiaText(pma);

  if(pma){
    const start=new Date(
      dateParse($('pmaTgl').value).getTime()
      +Math.max(0,40-num('pmaGa'))*7*86400000
    );

    const c=diff(start);

    $('pmaKoreksi').value=usiaText(c);

    $('pmaSimpulan').textContent=
      `Simpulan: Gunakan grafik usia ${Math.max(0,Math.round(c.days/30))} bulan untuk penilaian pertumbuhan`;
  }
}

function hitungNeed(){
  const dkE=
    num('dkBb')*
    num('dkEnergi')*
    num('dkAf')*
    num('dkSf')*
    num('dkKor');

  const dkP=
    num('dkBb')*
    num('dkProteinKg');

  dkStore=macro(
    dkE,
    dkP,
    num('dkLemakPct')
  );

  $('dkE').textContent=satu(dkStore.e);
  $('dkP').textContent=satu(dkStore.p);
  $('dkL').textContent=satu(dkStore.l);
  $('dkK').textContent=satu(dkStore.k);

  const jk=$('ndJk').value;
  const u=num('ndUsia');
  const bb=num('ndBb');
  const tb=num('ndTb');
  const bbi=brocca(jk,tb);

  $('ndBbi').value=satu(bbi);

  const methods=[
    [
      'mif',
      'Mifflin-St Jeor',
      mifflin(jk,bb,tb,u)
    ],
    [
      'hb',
      'Harris-Benedict',
      harris(jk,bb,tb,u)
    ],
    [
      'fast',
      'Rumus Cepat',
      bbi*num('fastKkal')
    ]
  ];

  $('ndRows').innerHTML=methods.map(
    ([id,name,bmr])=>{
      const tee=
        bmr*
        num('ndAf')*
        num('ndSf');

      const p=
        tee*
        num('ndProtPct')/
        100/
        4;

      const l=
        tee*
        num('ndLemakPct')/
        100/
        9;

      const k=
        (tee-p*4-l*9)/4;

      ndStore[id]={
        e:tee,
        p,
        l,
        k
      };

      return `
        <tr>
          <td>${name}</td>
          <td>${satu(bmr)}</td>
          <td>${satu(tee)}</td>
          <td>${satu(p)}</td>
          <td>${satu(l)}</td>
          <td>${satu(k)}</td>
          <td>
            <button onclick="useNeed('nd:${id}')">
              Gunakan
            </button>
          </td>
        </tr>
      `;
    }
  ).join('');

  hitungAnakNeeds();
  hitungDm();
}

function hitungAnakNeeds(){
  const bb=num('schBb');
  const tbm=num('schTb');
  const jk=$('schJk').value;
  const kat=$('schKat').value;

  let e=0;

  if(tbm){
    if(jk==='Laki-laki'){
      e=
        kat==='lt3'
          ? 0.167*bb+1517.4*tbm-617.6
          : kat==='3to10'
            ? 19.59*bb+130.3*tbm+414.9
            : 16.25*bb+137.2*tbm+515.5;
    }else{
      e=
        kat==='lt3'
          ? 16.252*bb+1023.2*tbm-413.5
          : kat==='3to10'
            ? 16.969*bb+161.8*tbm+371.2
            : 8.365*bb+465*tbm+200;
    }
  }else{
    if(jk==='Laki-laki'){
      e=
        kat==='lt3'
          ? 59.512*bb-30.4
          : kat==='3to10'
            ? 22.706*bb+504.3
            : 17.686*bb+658.2;
    }else{
      e=
        kat==='lt3'
          ? 58.317*bb-31.1
          : kat==='3to10'
            ? 20.315*bb+485.9
            : 13.384*bb+692.6;
    }
  }

  $('schRows').innerHTML=`
    <tr>
      <td>${satu(e)}</td>
      <td>${satu(bb*num('schProtKg'))}</td>
    </tr>
  `;

  // RDA:
  // 1–12 tahun = 50–70 kkal/kgBB
  // 12–18 tahun = 40–60 kkal/kgBB
  const rdaParts=
    $('rdaUsia').value
      .split(',')
      .map(Number);

  const rdaBb=num('rdaBb');

  let rdaEnergi='0,0';

  if(rdaParts.length===2){
    rdaEnergi=
      `${satu(rdaBb*rdaParts[0])}–${satu(rdaBb*rdaParts[1])}`;
  }else{
    rdaEnergi=
      satu(rdaBb*rdaParts[0]);
  }

  $('rdaRows').innerHTML=`
    <tr>
      <td>${rdaEnergi}</td>
      <td>${satu(rdaBb*num('rdaProtKg'))}</td>
    </tr>
  `;

  const [lo,hi]=
    $('ventKat').value
      .split(',')
      .map(Number);

  $('ventRows').innerHTML=`
    <tr>
      <td>
        ${satu(num('ventBb')*lo)}–${satu(num('ventBb')*hi)}
      </td>
      <td>
        ${satu(num('ventBb')*num('ventProtKg'))}
      </td>
    </tr>
  `;
}function hitungDm(){
  const base=
    num('dmBb')*
    ($('dmJk').value==='Laki-laki'?30:25);

  const pct=
    num('dmUsia')+
    num('dmAkt')+
    num('dmDemam')+
    num('dmBbKor');

  const e=
    base*
    (1+pct/100);

  const p=
    num('dmBb')*
    num('dmProtKg');

  dmStore=
    macro(
      e,
      p,
      num('dmLemakPct')
    );

  $('dmE').textContent=satu(dmStore.e);
  $('dmP').textContent=satu(dmStore.p);
  $('dmL').textContent=satu(dmStore.l);
  $('dmK').textContent=satu(dmStore.k);

  let tkh=0;
  let tu=0;

  for(let i=0;i<5;i++){
    const kh=num('insKh'+i);
    const ras=num('insRasio'+i);

    const u=
      ras
        ? kh/ras
        : 0;

    tkh+=kh;
    tu+=u;

    $('insUnit'+i).textContent=satu(u);
  }

  $('insKhTotal').textContent=satu(tkh);
  $('insUnitTotal').textContent=satu(tu);
}

window.useNeed=function(src){

  if(src==='dk'){

    need={
      ...dkStore,
      source:'Dewasa Diet Khusus'
    };

  }else if(src==='dm'){

    need={
      ...dmStore,
      source:'Diabetes PERKENI'
    };

  }else{

    const id=
      src.split(':')[1];

    need={
      ...ndStore[id],
      source:
        id==='mif'
          ? 'Mifflin-St Jeor'
          : id==='hb'
            ? 'Harris-Benedict'
            : 'Rumus Cepat'
    };
  }

  hitungMonitoring();
};

function calcPick(
  list,
  selId,
  qId,
  outIds,
  per100=false
){
  const r=
    list[
      parseInt(
        $(selId).value||0
      )
    ];

  const q=num(qId);

  const f=
    per100
      ? q/100
      : q;

  const o={
    e:f*r[1],
    p:f*r[2],
    l:f*r[3],
    k:f*r[4]
  };

  $(outIds[0]).textContent=satu(o.e);
  $(outIds[1]).textContent=satu(o.p);
  $(outIds[2]).textContent=satu(o.l);
  $(outIds[3]).textContent=satu(o.k);

  return o;
}

function hitungAsupan(){

  total.entD=
    calcPick(
      ENTERAL_DEWASA,
      'entDSelect',
      'entDVol',
      [
        'entDE',
        'entDP',
        'entDL',
        'entDK'
      ],
      true
    );

  total.entA=
    calcPick(
      ENTERAL_ANAK,
      'entASelect',
      'entAVol',
      [
        'entAE',
        'entAP',
        'entAL',
        'entAK'
      ],
      true
    );

  total.oral=
    calcPick(
      ORAL,
      'oralSelect',
      'oralJumlah',
      [
        'oralE',
        'oralP',
        'oralL',
        'oralK'
      ]
    );

  let rt={
    e:0,
    p:0,
    l:0,
    k:0,
    porsi:0
  };

  for(let i=0;i<4;i++){

    const r=
      RECALL[
        parseInt(
          $(`recallSelect${i}`).value||0
        )
      ];

    const q=
      num(`recallJumlah${i}`);

    const o={
      e:q*r[1],
      p:q*r[2],
      l:q*r[3],
      k:q*r[4]
    };

    rt.e+=o.e;
    rt.p+=o.p;
    rt.l+=o.l;
    rt.k+=o.k;
    rt.porsi+=q;

    $(`recallE${i}`).textContent=satu(o.e);
    $(`recallP${i}`).textContent=satu(o.p);
    $(`recallL${i}`).textContent=satu(o.l);
    $(`recallK${i}`).textContent=satu(o.k);
  }

  total.recall={
    e:rt.e,
    p:rt.p,
    l:rt.l,
    k:rt.k
  };

  $('recallPorsi').textContent=satu(rt.porsi);
  $('recallE').textContent=satu(rt.e);
  $('recallP').textContent=satu(rt.p);
  $('recallL').textContent=satu(rt.l);
  $('recallK').textContent=satu(rt.k);

  const pn=
    PN[
      parseInt(
        $('pnSelect').value||0
      )
    ];

  const v=num('pnVol');

  total.pn={
    e:v*pn[1],
    p:v*pn[2],
    l:v*pn[3],
    k:v*pn[4]
  };

  $('pnE').textContent=satu(total.pn.e);
  $('pnP').textContent=satu(total.pn.p);
  $('pnL').textContent=satu(total.pn.l);
  $('pnK').textContent=satu(total.pn.k);

  $('pnOsm').textContent=satu(pn[5]);
  $('pnNa').textContent=satu(v*pn[6]);
  $('pnKalium').textContent=satu(v*pn[7]);
  $('pnSed').textContent=pn[8]||'-';
}

function holiday(bb){

  if(!bb)
    return 0;

  if(bb<=10)
    return bb*100;

  if(bb<=20)
    return 1000+(bb-10)*50;

  return 1500+(bb-20)*20;
}

function hitungCairan(){

  $('holTotal').value=
    satu(
      holiday(
        num('holBb')
      )
    );

  $('khTotal').value=
    satu(
      num('khBb')*
      num('khMl')+
      num('khTambah')
    );

  $('ckdTotal').value=
    satu(
      num('ckdUrine')+
      500
    );

  $('iwlTotal').value=
    satu(
      num('iwlBb')*
      12*
      (
        1+
        Math.max(
          0,
          num('iwlSuhu')-37
        )*
        0.1
      )
    );

  $('bsaTotal').value=
    satu(
      Math.sqrt(
        num('bsaBb')*
        num('bsaTb')/
        3600
      )*
      800*
      (
        1+
        Math.max(
          0,
          num('bsaSuhu')-37
        )*
        0.1
      )
    );

  $('tpmTotal').value=
    satu(
      num('tpm')*
      1440/
      num('tetes')
    );

  $('girHasil').value=
    satu(
      num('girBb')
        ? num('girDex')*
          10*
          num('girLaju')/
          (
            num('girBb')*
            60
          )
        : 0
    );
}

function hitungMonitoring(){

  const enteral={
    e:total.entD.e+total.entA.e,
    p:total.entD.p+total.entA.p,
    l:total.entD.l+total.entA.l,
    k:total.entD.k+total.entA.k
  };

  const oral={
    e:total.oral.e+total.recall.e,
    p:total.oral.p+total.recall.p,
    l:total.oral.l+total.recall.l,
    k:total.oral.k+total.recall.k
  };

  const all={
    e:enteral.e+oral.e+total.pn.e,
    p:enteral.p+oral.p+total.pn.p,
    l:enteral.l+oral.l+total.pn.l,
    k:enteral.k+oral.k+total.pn.k
  };

  const pct={
    e:
      need.e
        ? all.e/need.e*100
        : 0,

    p:
      need.p
        ? all.p/need.p*100
        : 0,

    l:
      need.l
        ? all.l/need.l*100
        : 0,

    k:
      need.k
        ? all.k/need.k*100
        : 0
  };

  const tr=(nm,o)=>`
    <tr>
      <td>${nm}</td>
      <td>${satu(o.e)}</td>
      <td>${satu(o.p)}</td>
      <td>${satu(o.l)}</td>
      <td>${satu(o.k)}</td>
    </tr>
  `;

  $('monitorRows').innerHTML=[
    tr(
      'Pemenuhan Diet Parenteral',
      total.pn
    ),

    tr(
      'Pemenuhan Diet Oral',
      oral
    ),

    tr(
      'Pemenuhan Diet Enteral',
      enteral
    ),

    tr(
      '<b>Total Pemenuhan</b>',
      all
    ),

    tr(
      `<b>Total Kebutuhan Pasien</b><br><small>${need.source}</small>`,
      need
    ),

    tr(
      '<b>% Pemenuhan</b>',
      pct
    )
  ].join('');
}


/* ==========================================================
   RESET FASGIZ
   ========================================================== */

window.resetFasgiz=function(){

  const loginIds=
    new Set([
      'loginUser',
      'loginPass'
    ]);

  // Kosongkan seluruh kolom input
  document
    .querySelectorAll('input')
    .forEach(el=>{

      if(loginIds.has(el.id))
        return;

      if(
        el.type==='checkbox' ||
        el.type==='radio'
      ){
        el.checked=false;
      }else{
        el.value='';
      }

    });

  // Kembalikan seluruh dropdown ke pilihan pertama
  document
    .querySelectorAll('select')
    .forEach(el=>{
      el.selectedIndex=0;
    });

  // Kosongkan kebutuhan pasien
  need={
    e:0,
    p:0,
    l:0,
    k:0,
    source:'Belum dipilih'
  };

  // Kosongkan semua hasil asupan
  total={
    oral:{
      e:0,
      p:0,
      l:0,
      k:0
    },

    recall:{
      e:0,
      p:0,
      l:0,
      k:0
    },

    entD:{
      e:0,
      p:0,
      l:0,
      k:0
    },

    entA:{
      e:0,
      p:0,
      l:0,
      k:0
    },

    pn:{
      e:0,
      p:0,
      l:0,
      k:0
    }
  };

  ndStore={};
  dkStore={};
  dmStore={};

  // Kembali ke tab Antropometri
  document
    .querySelectorAll('.tab-btn')
    .forEach(b=>
      b.classList.remove('active')
    );

  document
    .querySelectorAll('.tab-panel')
    .forEach(p=>
      p.classList.remove('active')
    );

  const firstBtn=
    document.querySelector(
      '.tab-btn[data-tab="antropometri"]'
    );

  const firstPanel=
    document.getElementById(
      'tab-antropometri'
    );

  if(firstBtn)
    firstBtn.classList.add('active');

  if(firstPanel)
    firstPanel.classList.add('active');

  // Hitung ulang agar tabel hasil langsung menjadi 0 / kosong
  hitung();

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};


/* ==========================================================
   HITUNG SEMUA MODUL
   ========================================================== */

function hitung(){

  hitungAntro();
  hitungAnak();
  hitungNeed();
  hitungAsupan();
  hitungCairan();
  hitungMonitoring();
}


/* ==========================================================
   INISIALISASI
   ========================================================== */

fill();

document
  .querySelectorAll('input,select')
  .forEach(el=>
    el.addEventListener(
      'input',
      hitung
    )
  );

hitung();


/* ==========================================================
   NAVIGASI TAB
   ========================================================== */

document
  .querySelectorAll('.tab-btn')
  .forEach(btn=>{

    btn.addEventListener(
      'click',
      ()=>{

        document
          .querySelectorAll('.tab-btn')
          .forEach(b=>
            b.classList.remove('active')
          );

        document
          .querySelectorAll('.tab-panel')
          .forEach(p=>
            p.classList.remove('active')
          );

        btn.classList.add('active');

        const panel=
          document.getElementById(
            'tab-'+btn.dataset.tab
          );

        if(panel)
          panel.classList.add('active');

        window.scrollTo({
          top:0,
          behavior:'smooth'
        });

      }
    );

  });
