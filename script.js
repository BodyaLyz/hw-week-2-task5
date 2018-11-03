
function fib(n) {
	let first = 1;
	let second = 1;
	let third = 0;
	let i = 0;
	console.log(first);
	console.log(second);
	while (i < n) {
		third = first + second;
		first = second;
		second = third;
		console.log(third);
		i++;
	}
}

fib(5);