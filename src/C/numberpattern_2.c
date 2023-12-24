#include <stdio.h>

int main(){

    int n, row, col;

    printf("enter value\n");
    scanf("%d", &n);

    for ( col = 1; col <= n; col++){
        for ( row = 1; row <= n ; row++){
            if (row<col){
                printf(" ");
                }else{
                    printf("%d", col); 
                    }
        }
        printf("\n");
    }
    

    return  0;
}