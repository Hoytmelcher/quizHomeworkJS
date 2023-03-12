const quizForm = document.querySelector("#quiz")
const result = document.querySelector("#result")

quizForm.addEventListener("submit", (e) => {
	e.preventDefault()
	let score = 0
	const answers = ["b", "a", "b", "a", "b", "a", "c", "a", "a", "a"]

	for (let i = 1; i <= 10; i++) {
		const selectedOption = document.querySelector(`input[name=q${i}]:checked`)
		if (!selectedOption) {
			alert(`You missed question ${i}`)
			return
		}
		if (selectedOption.value === answers[i - 1]) {
			score++
            selectedOption.closest("li").style.backgroundColor = "#90EE90"
		} else {
            selectedOption.closest("li").style.backgroundColor = "#FFCCCB"
        }
	}

	result.innerHTML = `Your score is ${score} out of 10.`
})
