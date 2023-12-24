#include <stdio.h>

int main(){

    char alphabet;
    printf("write an aplhabet\n");
    scanf("%c", &alphabet);

    if (alphabet >= 65 && alphabet <= 90)
    {
        printf("Its uppercase alphabet");
    }
    else if (alphabet >= 97 && alphabet <= 122)
    {
        printf("Its lowecase alphabet");
    }
    else
    {
        printf("Its not an alphabet");
    }

    return 0;
}