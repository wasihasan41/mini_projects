#include <stdio.h>

int main(){

    int principle, time, rate;

    printf("write principle(amount), time and rate respectively\n");
    scanf("%d %d %d", &principle, &time, &rate);

    printf("Simple interest is %d", (principle * rate * time) / 100);

    return 0;
}