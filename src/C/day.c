#include <stdio.h>

int main(){

    int days, weeks, years;

    printf("write number of days\n");
    scanf("%d", &days);

    printf("years = %d\n",days / 365);
    printf("weeks = %d\n",(days % 365) / 7);
    printf("days = %d\n",days - ((years * 365) + (weeks * 7)));
    
    return 0;
}