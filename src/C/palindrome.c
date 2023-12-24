#include <stdio.h>

int main(){

    int n, lastdigit, reverse = 0, original;

    printf("enter an integer");
    scanf("%d", &n);
    original = n;

    while (n>0)
    {
        lastdigit = n%10;
        reverse = reverse * 10 + lastdigit;
        n=n/10; // n/=10
    }

    if (original==reverse){
        printf("%d is a palindrome", original);
    }else{
        printf("%d is NOT a palindrome", original);
    }
    


    return 0;
}