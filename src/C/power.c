#include <stdio.h>
#include <math.h>

int main(){

    int base, exponent, power;

    printf("write base and exponent\n");
    scanf("%d %d", &base, &exponent);

    power=pow(base, exponent);

    printf("power is %d",power );

    return 0;
}