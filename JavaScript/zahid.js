function factorial (n) {
	let fact = 1;
	// use process.stdout.write("hello") to print the output
  	//implement your  logic here - you dont have to return anything, print the output here
	 while(n>1){
	    
        fact=fact*n;
		n=n-1;
	 }
	return fact;
}
console.log(factorial((5)));