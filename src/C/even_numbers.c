#include <stdio.h>

int main(){

    int i, n;

    printf("enter number limit\n");
    scanf("%d", &n);
    for (int i = 2; i <= n ; i+=2)
    {        
        printf("%d", i);
    }
    
    return 0;
}