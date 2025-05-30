
const toggle = document.getElementById('toggle');
const ctx = document.getElementById('myPieChart').getContext('2d');
const transfCanvas = document.getElementById('transfChart');
const transf = document.getElementById('button-card')
const card = document.getElementById('maneg')
const paragraph = document.querySelector('.para')


card.addEventListener('click', function(){
    paragraph.innerHTML = 'seu saldo é: $1.575.750,20'


  setTimeout(() => {
    location.reload()
  }, 5000);
})

transf.addEventListener('click', function(){
    paragraph.innerHTML = 'Obrigado recebemos sua transferencia!'

  setTimeout(() => {
    location.reload()
  }, 5000);
})

if(transfCanvas){
  const transfCtx = transfCanvas.getContext('2d');

  new Chart(transfCtx, {
    type: 'bar',  // ou 'line', 'pie', etc.
    data: {
      labels: ['Bitcoin', 'Real'],
      datasets: [{
        label: 'Valores',
        data: [83769.1, 248989.0],
        backgroundColor: ['#f7931a', '#27ae60'],
        borderColor: '#1D1D41',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  // Importante para ocupar o espaço da div
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#fff' },
          grid: { color: '#555' }
        },
        x: {
          ticks: { color: '#fff' },
          grid: { color: '#555' }
        }
      }
    }
  });
}


new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Gastos', 'Saldo', 'Entradas'],
        datasets: [{
            label: 'Seus Dados',
            data: [30, 50, 20],
            backgroundColor: [
                '#ea1111',
                '#13cb26',
                '#f1c40f'
            ],
            borderColor: '#000',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            },
            tooltip: {
                enabled: true
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
    

});



toggle.addEventListener('change', function () {

    if (this.checked) {

        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.body.style.transition = 'background 0.5s ease';
    } else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        document.body.style.transition = 'background 0.5s ease';
    }
});

async function fetchMarketPrice() {

    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const data = await response.json();

        let price = parseFloat(data.price);

        let formattedPrice = price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        document.querySelector('.title-box').textContent = `R$${formattedPrice}`;
    } catch (err) {
        console.error('erro ao buscar o preço:', err)
    }
}

setInterval(fetchMarketPrice, 5000);

fetchMarketPrice();





