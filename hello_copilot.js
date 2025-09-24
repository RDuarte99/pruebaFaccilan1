function calculateFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function calculateFactorial(n) {
    if (n < 0) {
        return null;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(email);
}

function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()\-_+=]/.test(password);
    return hasUpper && hasLower && hasDigit && hasSpecial;
}

function calculateEvenNumbers(count = 50) {
    return Array.from({length: count}, (_, i) => 2 * (i + 1));
}

// Ejemplo de uso:
console.log("Fibonacci (10):", calculateFibonacci(10));
console.log("Factorial (5):", calculateFactorial(5));
console.log("Valid email (test@example.com):", validateEmail("test@example.com"));
console.log("Valid password (Abc123!@):", validatePassword("Abc123!@"));
console.log("Primeros 50 números pares:", calculateEvenNumbers());
