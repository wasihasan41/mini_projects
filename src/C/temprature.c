#include <stdio.h>

int main(){

    int celcius;

    printf("write celcius in degrees\n");
    scanf("%d", &celcius);

    printf("celcius to fahrenheit temprature is %d", (celcius * 9 / 5) + 32);
    
    return 0;
}