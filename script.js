document.addEventListener('DOMContentLoaded', function() {
    const gasLevelDisplay = document.getElementById('gas-level-display');
    const alertsDisplay = document.getElementById('alerts-display');
    const exhaustButton = document.getElementById('exhaust-button');
    const regulatorButton = document.getElementById('regulator-button');
    const callButton = document.getElementById('call-button');

    function fetchGasLevel() {
        // Replace with actual API endpoint
        fetch('/api/gas-level')
            .then(response => response.json())
            .then(data => {
                gasLevelDisplay.textContent = `${data.level} ppm`;
                if (data.level > 1000) { // Example threshold for alert
                    alertsDisplay.textContent = 'High LPG level detected!';
                    alertsDisplay.style.backgroundColor = '#f8d7da';
                    alertsDisplay.style.color = '#721c24';
                } else {
                    alertsDisplay.textContent = 'No alerts';
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
        // Replace with actual API endpoint
        fetch('/api/controls/exhaust', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log('Exhaust system activated');
            })
            .catch(error => {
                console.error('Error activating exhaust system:', error);
            });
    });

    regulatorButton.addEventListener('click', function() {
        // Replace with actual API endpoint
        fetch('/api/controls/regulator', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log('Regulator turned off');
            })
            .catch(error => {
                console.error('Error turning off regulator:', error);
            });
    });

    callButton.addEventListener('click', function() {
        // Replace with actual WhatsApp number and message
        const phoneNumber = '9899667100'; // Example number
        const message = 'Gas alert! Please take immediate action.';
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Fetch gas level periodically
    setInterval(fetchGasLevel, 5000); // Fetch every 5 seconds
});








