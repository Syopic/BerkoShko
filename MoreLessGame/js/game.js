var prNum, tempOut;
prNum = Math.floor((Math.random() * 100) + 1);
console.log("Загадане число:"+prNum);


function f1(){
	var num, out;

	num = document.getElementById('mynum').value;
	out = document.getElementById('out');

	if (num == prNum) {
		out.innerHTML = 'Ви вгадали!';
	}
	else if (num > prNum){
		out.innerHTML = 'ща мамікс купляє';
	}
	else {
		out.innerHTML = 'ті шо маікса не любиш?';
	}

}