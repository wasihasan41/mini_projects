#include <stdio.h>

int main(){

    int n, row, col;

    printf("enter a number of columns\n");
    scanf("%d", &n);

    for ( col = 1; col <= n; col++)
    {
        for ( row = 1; row <= n ; row++)
        {
            if (row + col <= n*2)
            {
                printf("*");
            }else{
                printf(" ");
            }
            
        }
        printf("\n");
    }
    

    return  0;
}