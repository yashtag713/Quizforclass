function checkAnswers() {
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    const answers = {
        q1: 'B',
        q2: 'B',
        q3: 'D',
        q4: 'A',
        q5: 'C'
    };
    let score = 0;
    for (const [key, value] of formData.entries()) {
        if (value === answers[key]) {
            score++;
        }
    }
    document.getElementById('result').innerText = `You scored ${score} out of 5.`;
}
