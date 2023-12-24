#include <stdio.h>
#include <math.h>

int main(){

    int n;

    printf("write a number\n");
    scanf("%d", &n);

    if(n%3==0 && n%5==0){
        printf("fizzbuzz");
        return 0;
    }
    if(n%3==0){
        printf("fizz");
        return 0;
    }
    if(n%5==0){
        printf("buzz");
        return 0;
    }
    printf("number is not a fizz buzz");
    return 0;
    
}