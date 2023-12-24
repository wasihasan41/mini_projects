#include <stdio.h>

int main(){

    int n, lastDigit, firstDigit;

    printf("enter number\n");
    scanf("%d", &n);

    lastDigit = n % 10;

    firstDigit = n;
    while (firstDigit > 10)
    {
        firstDigit /= 10;
    }
    

    printf("%d %d\n", lastDigit, firstDigit);
    printf(" sum of first and last digit : %d\n", lastDigit + firstDigit);
        
    return 0;
}