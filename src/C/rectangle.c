#include <stdio.h>

int main(){

    int length, breadth;
    printf("write length and breadth\n");
    scanf("%d %d", &length, &breadth);

    printf("area of rectangle is %d\n", length * breadth);
    printf("perimeter of rectangle is %d", 2 * (length + breadth));

    return 0;
}