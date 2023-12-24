#include <stdio.h>

int main(){

    int n, row, col;

    printf("enter value\n");
    scanf("%d", &n);

    for ( col = 1; col <= n; col++){
        for ( row = 1; row <= n ; row++){
            printf("%d", row%2);         
        }
        printf("\n");
    }
    

    return  0;
}