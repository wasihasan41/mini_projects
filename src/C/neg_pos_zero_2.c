#include <stdio.h>

int main(){

    int number;
    printf("write a numeber\n");
    scanf("%d", &number);

    switch (number > 0)
    {
    case 1:
        printf("positive");
        break;         
    default:
        break;
    }
    switch (number < 0)
    {
    case 1:
        printf("negative");
        break;         
    default:
        break;
    }
    switch (number == 0)
    {
    case 1:
        printf("zero");
        break;         
    default:
        break;
    }


    return 0;
}