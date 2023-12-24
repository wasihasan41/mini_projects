#include <stdio.h>

int main(){

    int cost_price, sell_price;
    printf("write cost price and selling price respectively\n");
    scanf("%d %d", &cost_price, &sell_price);

    if (sell_price > cost_price)
    {
        printf("Profit : %d", sell_price - cost_price);
    }
    else if (sell_price < cost_price)
    {
        printf("loss : %d", cost_price - sell_price);
    }
    else
    {
        printf("No profit or loss");
    }

    return 0;
}