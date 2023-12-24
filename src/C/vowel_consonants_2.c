#include <stdio.h>

int main(){

    char character;
    printf("write a numebr between 1-12\n");
    scanf("%c", &character);

    switch (character)
    {
    case 'a':
        printf("vowel");
        break;
    case 'e':
        printf("vowel");
        break;
    case 'i':
        printf("vowel");
        break;
    case 'o':
        printf("vowel");
        break;
    case 'u':
        printf("vowel");
        break;         
    default:
        printf("consonant");
        break;
    }


    return 0;
}