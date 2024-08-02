import React, { useState, useEffect } from 'react';
import './App.css';

const questions = {
    level1: [
        {
            question: "Which freedom fighter is known for his slogan 'Inquilab Zindabad'?",
            options: ["Bhagat Singh", "Subhas Chandra Bose", "Bal Gangadhar Tilak", "Chandrashekhar Azad"],
            answer: "Bhagat Singh",
            explanation: "Bhagat Singh is known for his slogan 'Inquilab Zindabad.'"
        },
        {
            question: "'Tum mujhe khoon do, mein tumhe azadi doonga' was said by which of the following persons?",
            options: ["Bhagat Singh", "Lala Lajpat Rai", "Subhash Chandra Bose", "Vallabhbhai Patel"],
            answer: "Subhash Chandra Bose",
            explanation: "This famous patriotic slogan is attributed to Subhash Chandra Bose. He used these words in his speech for the recruitment of soldiers in INA."
        },
        {
            question: "Which of the following leaders is known as the 'Iron Man of India'?",
            options: ["Baldev Singh", "Bhagat Singh", "Lal Bahadur Shastri", "Vallabhbhai Patel"],
            answer: "Vallabhbhai Patel",
            explanation: "After independence, Vallabhbhai Patel brought the princely states under the rule of the government of India through diplomacy and military force, earning him the title 'Iron Man of India'."
        },
        {
            question: "Who ruled Goa before it was integrated into India?",
            options: ["British", "French", "Portuguese", "Dutch"],
            answer: "Portuguese",
            explanation: "Goa was ruled by the Portuguese before it was liberated by Indian troops in a military operation in December 1961. It was formally integrated with India in 1963."
        },
        {
            question: "When did India get independence?",
            options: ["1947"],
            answer: "1947",
            explanation: ""
        },
        // ... Add more questions
    ],
    level2: [
        {
            question: "On Independence Day, the Prime Minister of India hoists our tricolour flag at:",
            options: ["the Purana Qila, Delhi", "the Red Fort, Old Delhi", "the Red Fort, Agra", "the India Gate, New Delhi"],
            answer: "the Red Fort, Old Delhi",
            explanation: "On Independence Day, the Prime Minister of India hoists the tricolour flag at the Red Fort in Old Delhi."
        },
        {
            question: "Which city is known as the 'City of Joy' in India?",
            options: ["Mumbai", "Kolkata", "Jaipur", "Chennai"],
            answer: "Kolkata",
            explanation: "Kolkata is known as the 'City of Joy'."
        },
        {
            question: "Who among the following was the Prime Minister of Britain at the time of Independence?",
            options: ["Lord Mountbatten", "Winston Churchill", "Clement Attlee", "Ramsay MacDonald"],
            answer: "Clement Attlee",
            explanation: "Clement Attlee was the Prime Minister of Britain at the time of India's independence."
        },
        {
            question: "Who among the following was the first Governor-General of New Dominions of India until June 1948?",
            options: ["Lord Mountbatten", "C. Rajagopalachari", "Dr BR Ambedkar", "Dr. Rajendra Prasad"],
            answer: "Lord Mountbatten",
            explanation: "Lord Mountbatten was the first Governor-General of the new Dominions of India until June 1948."
        },
        {
            question: "What year did New Delhi become the nation’s capital?",
            options: ["1931"],
            answer: "1931",
            explanation: ""
        },
        // ... Add more questions
    ],
    level3: [
        {
            question: "Which of the following is/are true regarding the ratio of the national flag?",
            options: ["The ratio of the length to the height of the flag shall be 3:2", "The ratio of the length to the width of the flag shall be 3:2", "The ratio of the length to the height of the flag shall be 2:3", "Both (a) and (b)"],
            answer: "Both (a) and (b)",
            explanation: "The national flag's ratio of length to height (width) is 3:2."
        },
        {
            question: "When did the Jallianwala Bagh Massacre take place?",
            options: ["10 April 1917", "13 April 1918", "9 April 1916", "13 April 1919"],
            answer: "13 April 1919",
            explanation: "The Jallianwala Bagh Massacre took place on 13 April 1919."
        },
        {
            question: "Which of the following Plans was known as the partition plan?",
            options: ["Macaulay Plan", "Atlee Announcement", "Montagu-Chelmsford Reforms", "Mountbatten Plan"],
            answer: "Mountbatten Plan",
            explanation: "The Mountbatten Plan, proposed by Lord Mountbatten, was known as the partition plan."
        },
        {
            question: "Who founded the Indian National Congress?",
            options: ["Mahatma Gandhi", "Allan Octavian Hume", "Dadabhai Naoroji", "Gopal Krishna Gokhale"],
            answer: "Allan Octavian Hume",
            explanation: "Allan Octavian Hume founded the Indian National Congress in 1885."
        },
        {
            question: "Which Indian king fought against Alexander the Great in the Battle of the Hydaspes?",
            options: ["Chandragupta Maurya", "Ashoka", "Porus", "Bindusara"],
            answer: "Porus",
            explanation: "King Porus fought against Alexander the Great in the Battle of the Hydaspes."
        },
        // ... Add more questions
    ]
};

const Quiz = ({ question }) => (
    <div className="quiz-question">
        <h3>{question.question}</h3>
        <ul>
            {question.options.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
        </ul>
        <div className="explanation">
            <strong>Correct Answer:</strong> {question.answer}
            <br />
            {question.explanation}
        </div>
    </div>
);

const App = () => {
    const [selectedQuestions, setSelectedQuestions] = useState({
        level1: null,
        level2: null,
        level3: null
    });

    const generateQuiz = () => {
        setSelectedQuestions({
            level1: questions.level1[Math.floor(Math.random() * questions.level1.length)],
            level2: questions.level2[Math.floor(Math.random() * questions.level2.length)],
            level3: questions.level3[Math.floor(Math.random() * questions.level3.length)]
        });
    };

    useEffect(() => {
        generateQuiz();
    }, []);

    return (
        <div className="app">
            <h1>VidyarthiMitra Quiz</h1>
            <div className="quiz-section">
                <h2>Level 1</h2>
                {selectedQuestions.level1 && <Quiz question={selectedQuestions.level1} />}
            </div>
            <div className="quiz-section">
                <h2>Level 2</h2>
                {selectedQuestions.level2 && <Quiz question={selectedQuestions.level2} />}
            </div>
            <div className="quiz-section">
                <h2>Level 3</h2>
                {selectedQuestions.level3 && <Quiz question={selectedQuestions.level3} />}
            </div>
            <button onClick={generateQuiz}>Generate Quiz</button>
        </div>
    );
};

export default App;
