def calculate_fibonacci
(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib

def calculate_factorial(n):
    if n < 0:
        return None
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result
    
def validate_email(email):
    import re
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(pattern, email) is not None

def validate_password(password):
    if len(password) < 8:
        return False
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in '!@#$%^&*()-_+=' for c in password)
    return has_upper and has_lower and has_digit and has_special

    if __name__ == "__main__":
        print("Fibonacci (10):", calculate_fibonacci(10))
        print("Factorial (5):", calculate_factorial(5))
        print("Valid email (test@example.com):", validate_email("test@example.com"))
        print("Valid password (Abc123!@):", validate_password("Abc123!@"))

def calculate_even_numbers(count=50):
    """
    Retorna los primeros 'count' números pares.
    """
    return [2 * i for i in range(1, count + 1)]