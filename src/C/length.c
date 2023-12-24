#include <stdio.h>

int main(){

    int centimeter;

    printf("write length in centimeter\n");
    scanf("%d", &centimeter);

    printf("length in meter is %d\n", centimeter / 100);
    printf("length in kilometers is %d", centimeter / 100000);
    
    return 0;
}