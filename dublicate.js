#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int summa=0;
	int n;
	cout << 'n = ' ; 
	cin >> n;
	for(int i=0; i<=n; i=i+2)
	summa= summa+i;
	cout<<summa;
    return 0;
}





































const data = [[1,3],[5,8],[7,11],[4,15]];
function sorted(a){
    var ar = a[0][0];
    for(let i =0; i<a.length; i++){
        if(a[i][0]<ar){
            ar = a[i][0];
           var sum = a[i]
           console.log(a[i]);
        }
    }
    // console.log(sum);

}

sorted(data)
