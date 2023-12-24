#include <stdio.h>

int main(){

    int n, a, b, i, result;

    printf("Enter an integer term");
    scanf("%d",&n);
    a=0;
    b=1;
    for(i=1; i<=n; i++){
        printf("%d", a);
        result=a+b;
        a=b;
        b=result;

    }

    return 0;
}