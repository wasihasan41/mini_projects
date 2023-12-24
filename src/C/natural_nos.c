#include <stdio.h>

int main(){

    int number, i;

    printf("enter number limit\n");
    scanf("%d", &number);

    for (int i = 1; i <= number; i++)
    {
        printf("%d", i);
    }
    


    return 0;
}