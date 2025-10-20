document.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('user') || 'User';
  document.getElementById('userName').textContent = name;
});