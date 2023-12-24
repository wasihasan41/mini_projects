#include <stdio.h>

int main(){

    char n, row, col;

    printf("enter character\n");
    scanf("%c", &n);

    for ( col = 'A'; col <= n; col++){
        for ( row = 'A'; row <= n ; row++){
            if (row<=col){
                printf("%c",col);
                }else{
                    printf(" "); 
                    }
        }
        printf("\n");
    }
    

    return  0;
}