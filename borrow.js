document.getElementById('loanAmount').addEventListener('input', e => {
  const val = e.target.value;
  if(val>5500){e.target.value=5500;}
});