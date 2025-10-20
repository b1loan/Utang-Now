<div class="falling-currency" id="fallingCurrency"></div>

<script>
  const symbols = ['₱', '$', '€'];
  const container = document.getElementById('fallingCurrency');

  for (let i = 0; i < 25; i++) {
    const symbol = document.createElement('div');
    symbol.classList.add('currency');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = Math.random() * 100 + 'vw';
    symbol.style.animationDuration = (4 + Math.random() * 4) + 's';
    symbol.style.fontSize = (16 + Math.random() * 20) + 'px';
    container.appendChild(symbol);
  }
</script>
