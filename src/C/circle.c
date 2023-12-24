#include <stdio.h>

int main(){

    float pie = 3.14;
    int r;

    printf("write radius of the circle\n");
    scanf("%d", &r);

    printf("area of circle is %.2f\n", pie * (r * r));
    printf("diameter of circle is %d\n", 2 * r);
    printf("perimeter of circle is %.2f", 2 * pie * r);

    return 0;
}