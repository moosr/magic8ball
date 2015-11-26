var number_of_conditions = 3;



function show_answer(option){
 
	var answer;
	if (option===1) {
		answer = "it is a possibility";
	}

	else if (option===2) {
		answer = "negative"
	}

	else if (option===3) {
		answer = "this is true"
	}

	display_answer(answer);
}
