#include <stdio.h>

int main(){

    char character;
    printf("write character\n");
    scanf("%c", &character);

    if (character > 65 && character < 90 || character > 97 && character < 122)
    {
        printf("its an alphabet");
    }
    else
    {
        printf("its not an alphabet");
    }

    return 0;
}