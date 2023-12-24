#include <stdio.h>
#include <math.h>

int main(){

    int number, square_root;

    printf("write a number\n");
    scanf("%d", &number);

    square_root=sqrt(number);

    printf("Square root of %d is %d",number, square_root);
    return 0;
}