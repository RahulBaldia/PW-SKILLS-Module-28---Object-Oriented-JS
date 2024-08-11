class Temperature {
    constructor() {
        // Initial state
        this._celsius = 0;
        this._fahrenheit = 32;
    }

    // Getter for Celsius
    get celsius() {
        return this._celsius;
    }

    // Setter for Celsius with validation and automatic conversion
    set celsius(value) {
        if (this._isValidTemperature(value)) {
            this._celsius = value;
            this._fahrenheit = this._convertCelsiusToFahrenheit(value);
        } else {
            console.log("Invalid temperature value. Please provide a numeric value.");
        }
    }

    // Getter for Fahrenheit
    get fahrenheit() {
        return this._fahrenheit;
    }

    // Setter for Fahrenheit with validation and automatic conversion
    set fahrenheit(value) {
        if (this._isValidTemperature(value)) {
            this._fahrenheit = value;
            this._celsius = this._convertFahrenheitToCelsius(value);
        } else {
            console.log("Invalid temperature value. Please provide a numeric value.");
        }
    }

    // Private method to validate temperature input
    _isValidTemperature(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    // Private method to convert Celsius to Fahrenheit
    _convertCelsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Private method to convert Fahrenheit to Celsius
    _convertFahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}

// Example usage
const temp = new Temperature();

console.log(`Initial Celsius: ${temp.celsius}°C`); // 0°C
console.log(`Initial Fahrenheit: ${temp.fahrenheit}°F`); // 32°F

temp.celsius = 25;
console.log(`Updated Celsius: ${temp.celsius}°C`); // 25°C
console.log(`Corresponding Fahrenheit: ${temp.fahrenheit}°F`); // 77°F

temp.fahrenheit = 98.6;
console.log(`Updated Fahrenheit: ${temp.fahrenheit}°F`); // 98.6°F
console.log(`Corresponding Celsius: ${temp.celsius}°C`); // 37°C

temp.celsius = 'invalid'; // Invalid temperature value. Please provide a numeric value.
