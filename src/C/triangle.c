#include <stdio.h>

int main(){

    int base, height;

    printf("write base and height\n");
    scanf("%d %d", &base, &height);

    printf("area of triangle is %d", base * height/2);
    return 0;
}