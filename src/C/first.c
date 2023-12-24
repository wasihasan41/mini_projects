#include <stdio.h>

int main(){
    int n;
    int a;
    int sum=0;

    printf("Enter an integer\n");
    scanf("%d",&n);
    
    for(a=1; a<=10; a++){
        printf("%d x %d = %d\n", n, a, n*a);
        sum=sum+(n*a);
    }
    printf("Total Sum is %d", sum);

    return 0;
}
