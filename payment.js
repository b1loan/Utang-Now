document.querySelector('input[type=file]').addEventListener('change',()=>{
  const n=document.getElementById('notice');
  n.classList.remove('hidden');
  setTimeout(()=>{n.classList.add('hidden');window.location.href='dashboard.html';},10000);
});