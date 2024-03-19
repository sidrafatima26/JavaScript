// Define an array of questions with their options and correct answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        answer: "William Shakespeare"
    }
];

// Function to display a question and its options
function displayQuestion(index) {
    console.log(`Question ${index + 1}: ${questions[index].question}`);
    for (let i = 0; i < questions[index].options.length; i++) {
        console.log(`${i + 1}. ${questions[index].options[i]}`);
    }
}

// Function to start the quiz
function startQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        displayQuestion(i);
        const userAnswer = parseInt(prompt("Enter the number of your answer:"));

        // Validate user's answer
        if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= questions[i].options.length) {
            const selectedOption = questions[i].options[userAnswer - 1];
            if (selectedOption === questions[i].answer) {
                console.log("Correct!");
                score++;
            } else {
                console.log(`Incorrect. The correct answer is: ${questions[i].answer}`);
            }
        } else {
            console.log("Invalid input. Skipping this question.");
        }
    }

    // Display final score
    console.log(`Quiz completed! Your score: ${score} out of ${questions.length}`);
}

// Start the quiz
startQuiz();
