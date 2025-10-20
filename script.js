document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = document.getElementById('firstName').value;
  const l = document.getElementById('lastName').value;
  if(document.getElementById('remember').checked){
    localStorage.setItem('user', f + ' ' + l);
  }
  window.location.href = 'files.html';
});