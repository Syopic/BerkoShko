var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
console.log(prNum);


function f1(){
	var num, out;

	num = document.getElementById('mynum').value;
	out = document.getElementById('out');

	if (num == prNum) {
		out.innerHTML = 'Ви вгадали!';
	}
	else if (num > prNum){
		out.innerHTML = 'Ви ввели число більше, ніж потрібно';
	}
	else {
		out.innerHTML = 'Ви ввели число менше, ніж потрібно';
	}

}