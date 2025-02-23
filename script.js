document.addEventListener('DOMContentLoaded', function() {
    const gasLevelDisplay = document.getElementById('gas-level-display');
    const alertsDisplay = document.getElementById('alerts-display');
    const exhaustButton = document.getElementById('exhaust-button');
    const regulatorButton = document.getElementById('regulator-button');
    const callButton = document.getElementById('call-button');

    function fetchGasLevel() {
        fetch('/api/gas-level')
            .then(response => response.json())
            .then(data => {
                gasLevelDisplay.textContent = `${data.level} ppm`;
                if (data.level > 1000) {
                    alertsDisplay.textContent = '⚠️ High LPG level detected!';
                    alertsDisplay.style.backgroundColor = '#f8d7da';
                    alertsDisplay.style.color = '#721c24';
                } else {
                    alertsDisplay.textContent = '✅ No alerts';
                    alertsDisplay.style.backgroundColor = '#d4edda';
                    alertsDisplay.style.color = '#155724';
                }
            })
            .catch(error => {
                console.error('Error fetching gas level:', error);
                gasLevelDisplay.textContent = 'Error fetching data';
            });
    }

    exhaustButton.addEventListener('click', function() {
        fetch('/api/controls/exhaust', { method: 'POST' })
            .then(response => response.json())
            .then(() => {
                exhaustButton.textContent = '✅ Exhaust On';
                exhaustButton.style.backgroundColor = '#ff9800';
            })
            .catch(error => console.error('Error activating exhaust system:', error));
    });

    regulatorButton.addEventListener('click', function() {
        fetch('/api/controls/regulator', { method: 'POST' })
            .then(response => response.json())
            .then(() => {
                regulatorButton.textContent = '✅ Regulator Off';
                regulatorButton.style.backgroundColor = '#ff5722';
            })
            .catch(error => console.error('Error turning off regulator:', error));
    });

    callButton.addEventListener('click', function() {
        const phoneNumber = '9899667100';
        const message = '🚨 Gas alert! Take immediate action!';
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    setInterval(fetchGasLevel, 5000);
});
