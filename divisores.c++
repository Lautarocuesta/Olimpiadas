#include <iostream>
#include <vector>

using namespace std;

bool esPrimo(int num) {
    if (num <= 1) {
        return false; 
    }
    
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false; // Si es divisible, no es primo
        }
    }
    
    return true; // Si no fue divisible por ningún número, es primo
}

int main() {
    int n = 7;

    if (esPrimo(n)) {
        cout << n << " es primo." << endl;
    } else {
        cout << n << " no es primo." << endl;
    }

    return 0;
}
