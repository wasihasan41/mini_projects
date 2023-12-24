#include <stdio.h>
#include <math.h>

int main(){

    int principle, time, rate, compound_interest;

    printf("write principle(amount), time and rate respectively\n");
    scanf("%d %d %d", &principle, &time, &rate);

    compound_interest = principle *( pow((1 + rate / 100),time));

    printf("Compound interest is %d",compound_interest );

    return 0;
}