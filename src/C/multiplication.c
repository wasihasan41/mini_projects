#include <stdio.h>

int main(){

    int i, n;

    printf("enter number\n");
    scanf("%d", &n);
    for (int i = 1; i <= 10 ; i++)
    {
        printf("%d x %d = %d\n",n, i, n*i );        
    }
    
    
    return 0;
}