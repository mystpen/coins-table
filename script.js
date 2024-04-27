fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
    .then(response => response.json())
    .then(data => {
    const cryptoData = document.getElementById('crypto-data');

    data.forEach((currency, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${currency.id}</td>
        <td><img src=${currency.image} width="30px" height="30px"></td>
        <td>${currency.symbol}</td>
        <td>${currency.name}</td>
        `;

        if (index < 5) {
        row.classList.add('blue-bg');
        }

        if (currency.symbol.toLowerCase() === 'usdt') {
        row.classList.add('green-bg');
        }

        cryptoData.appendChild(row);
    });
    })
    .catch(error => {
    console.error('Error fetching data:', error);
});

