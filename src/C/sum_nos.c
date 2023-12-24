#include <stdio.h>

int main(){

    int i, n, sum;

    printf("enter number limit\n");
    scanf("%d", &n);
    for (int i = 1; i <= n ; i++)
    {        
        sum=sum+i;
    }
    printf("%d", sum);
    
    return 0;
}