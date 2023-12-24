#include <stdio.h>

int main(){

    int n, lastdigit, reverse = 0;

    printf("enter an integer");
    scanf("%d", &n);

    while (n>0)
    {
        lastdigit = n%10;
        reverse = reverse * 10 + lastdigit;
        n=n/10; // n/=10
    }

    printf("reverse number = %d", reverse);
    


    return 0;
}