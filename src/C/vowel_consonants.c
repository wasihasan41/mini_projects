#include <stdio.h>

int main(){

    char alphabet;
    printf("write an aplhabet\n");
    scanf("%c", &alphabet);

    if (alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u')
    {
        printf("Its a vowel");
    }
    else if (alphabet >= 'a' && alphabet <= 'z')
    {
        printf("Its a consonant");
    }
    else
    {
        printf("Its not an alphabet");
    }

    return 0;
}