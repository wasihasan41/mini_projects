#include <stdio.h>

int main(){

    int n, row, col;

    printf("enter value\n");
    scanf("%d", &n);

    for ( col = 1; col <= n; col++){
        for ( row = 1; row <= n ; row++){
            if (n==row){
                printf("1");
                }else{
                    printf("0"); 
                    }
        }
        printf("\n");
    }
    

    return  0;
}