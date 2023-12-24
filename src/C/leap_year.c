#include <stdio.h>

int main(){

    int year;

    printf("enter year\n");
    scanf("%d", &year);

    if (year % 4 == 0 && year % 100 !=0)
    {
        printf("Leap year");
    }
    else
    {
        printf("Common year");
    }
    


    return 0;
}