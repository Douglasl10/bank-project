
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function(){

    if(this.checked){
        
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.body.style.transition = 'background 0.5s ease';
    }else{
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        document.body.style.transition = 'background 0.5s ease';
    }
});

async function fetchMarketPrice(){

    try{
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





