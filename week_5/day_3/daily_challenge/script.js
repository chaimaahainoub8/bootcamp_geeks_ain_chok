
document.addEventListener('DOMContentLoaded', () => {

    // WE GET OUR FREE API KEY from https://www.exchangerate-api.com/
    const apiKey = '5a4205cc27102f7d5a241fdf'; 

    // Get references to the HTML elements
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const amountInput = document.getElementById('amount');
    const convertBtn = document.getElementById('convert-btn');
    const swapBtn = document.getElementById('swap-btn');
    const resultDiv = document.getElementById('result');

    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}`;

    // Function to populate the currency dropdowns
    async function populateCurrencies() {
        try {
            const response = await fetch(`${apiUrl}/codes`);
            const data = await response.json();

            if (data.result === 'success') {
                const currencies = data.supported_codes;
                currencies.forEach(currency => {
                    const option1 = document.createElement('option');
                    option1.value = currency[0];
                    option1.textContent = `${currency[0]} - ${currency[1]}`;
                    fromCurrencySelect.appendChild(option1);

                    const option2 = document.createElement('option');
                    option2.value = currency[0];
                    option2.textContent = `${currency[0]} - ${currency[1]}`;
                    toCurrencySelect.appendChild(option2);
                });
                // Set default values
                fromCurrencySelect.value = 'USD';
                toCurrencySelect.value = 'ILS';
            } else {
                resultDiv.textContent = 'Error: Could not fetch currency codes.';
            }
        } catch (error) {
            resultDiv.textContent = 'Error: Could not connect to the API.';
            console.error('Fetch currencies error:', error);
        }
    }

    // Function to handle the currency conversion
    async function handleConversion() {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = amountInput.value;

        // Basic validation
        if (amount === '' || parseFloat(amount) <= 0) {
            resultDiv.textContent = 'Please enter a valid amount.';
            return;
        }

        resultDiv.textContent = 'Converting...';

        try {
            const response = await fetch(`${apiUrl}/pair/${fromCurrency}/${toCurrency}/${amount}`);
            const data = await response.json();

            if (data.result === 'success') {
                const convertedAmount = data.conversion_result.toFixed(2);
                resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                resultDiv.textContent = `Error: ${data['error-type']}`;
            }
        } catch (error) {
            resultDiv.textContent = 'Error: Failed to perform conversion.';
            console.error('Conversion error:', error);
        }
    }

    // Function to swap the selected currencies
    function swapCurrencies() {
        const temp = fromCurrencySelect.value;
        fromCurrencySelect.value = toCurrencySelect.value;
        toCurrencySelect.value = temp;
        // Automatically convert after swapping
        handleConversion();
    }

    // Event Listeners
    convertBtn.addEventListener('click', handleConversion);
    swapBtn.addEventListener('click', swapCurrencies);

    // Initial population of currencies when the page loads
    populateCurrencies();
});