#include <stdio.h>

int main(){

    char n, row, col;
    int AsciiValue;

    printf("enter char\n");
    scanf("%c", &n);

    for ( col = 'Z'; col >= n; col--){
        for ( row = 'Z'; row >= n ; row--){
            if (row>col){
                printf("%c", 65 - 90);
                }else{
                    printf(" "); 
                    }
        }
        printf("\n");
    }
    

    return  0;
}