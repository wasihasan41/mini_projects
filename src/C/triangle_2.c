#include <stdio.h>

int main(){

    int first_angle , second_angle;

    printf("write first angle AND second angle\n");
    scanf("%d %d", &first_angle, &second_angle);

    printf("Third angle of the triangle is %d", 180 - (first_angle + second_angle));
    
    return 0;
}