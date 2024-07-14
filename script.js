function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;

    switch (conversionType) {
        case 'CtoF':
            result = (temperature * 9/5) + 32;
            document.getElementById('result').innerText = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
            break;
        case 'FtoC':
            result = (temperature - 32) * 5/9;
            document.getElementById('result').innerText = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
            break;
        case 'CtoK':
            result = temperature + 273.15;
            document.getElementById('result').innerText = `${temperature}°C is equal to ${result.toFixed(2)}K`;
            break;
        case 'KtoC':
            result = temperature - 273.15;
            document.getElementById('result').innerText = `${temperature}K is equal to ${result.toFixed(2)}°C`;
            break;
        case 'FtoK':
            result = (temperature - 32) * 5/9 + 273.15;
            document.getElementById('result').innerText = `${temperature}°F is equal to ${result.toFixed(2)}K`;
            break;
        case 'KtoF':
            result = (temperature - 273.15) * 9/5 + 32;
            document.getElementById('result').innerText = `${temperature}K is equal to ${result.toFixed(2)}°F`;
            break;
        default:
            document.getElementById('result').innerText = 'Please select a valid conversion type';
    }
}
