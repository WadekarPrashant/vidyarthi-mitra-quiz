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
          explanation: "*** Write Explanation here ***"
      },
      {
          question: "What was the name of the mission that the British government despatched to India during World War II to enlist their assistance?",
          options: ["Simon Mission"],
          answer: "Simon Mission",
          explanation: "The Simon Commission was sent by the British government to India during World War II to discuss the future constitution of India and seek Indian assistance."
      },
      {
          question: "What do the three colors on a country’s flag stand for?",
          options: ["Sacrifice (Orange)", "Peace (White)", "Prosperity (Green)"],
          answer: "Sacrifice (Orange), Peace (White), Prosperity (Green)",
          explanation: "The colors on the Indian flag represent sacrifice (orange), peace (white), and prosperity (green)."
      },
      {
          question: "Which is the highest civilian award in India?",
          options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
          answer: "Bharat Ratna",
          explanation: "The Bharat Ratna is the highest civilian award in India."
      },
      {
          question: "Who was the first Indian to win a Nobel Prize?",
          options: ["C.V. Raman", "Rabindranath Tagore", "Hargobind Khorana", "Amartya Sen"],
          answer: "Rabindranath Tagore",
          explanation: "Rabindranath Tagore was the first Indian to win a Nobel Prize in Literature in 1913."
      },
      {
          question: "Who was the first President of independent India?",
          options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
          answer: "Dr. Rajendra Prasad",
          explanation: "Dr. Rajendra Prasad was the first President of independent India."
      },
      {
          question: "Which city is known as the 'Silicon Valley of India'?",
          options: ["Hyderabad", "Chennai", "Bengaluru", "Pune"],
          answer: "Bengaluru",
          explanation: "Bengaluru is known as the 'Silicon Valley of India' due to its role as the nation's leading information technology (IT) exporter."
      },
      {
          question: "Who wrote the Indian national anthem?",
          options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Lata Mangeshkar"],
          answer: "Rabindranath Tagore",
          explanation: "Rabindranath Tagore wrote the Indian national anthem 'Jana Gana Mana.'"
      },
      {
          question: "Which river is known as the 'Ganga of the South'?",
          options: ["Godavari", "Krishna", "Kaveri", "Yamuna"],
          answer: "Kaveri",
          explanation: "The Kaveri River is known as the 'Ganga of the South.'"
      },
      {
          question: "Who was the first Prime Minister of independent India?",
          options: ["Mahatma Gandhi", "Indira Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
          answer: "Jawaharlal Nehru",
          explanation: "Jawaharlal Nehru was the first Prime Minister of independent India."
      },
      {
          question: "Who is known as the 'Iron Man of India'?",
          options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Lal Bahadur Shastri", "Subhas Chandra Bose"],
          answer: "Sardar Vallabhbhai Patel",
          explanation: "Sardar Vallabhbhai Patel is known as the 'Iron Man of India' for his role in unifying the country."
      },
      {
          question: "Which is the national bird of India?",
          options: ["Peacock", "Sparrow", "Parrot", "Crow"],
          answer: "Peacock",
          explanation: "The peacock is the national bird of India."
      },
      {
          question: "Which day is celebrated as Republic Day in India?",
          options: ["15th August", "26th January", "2nd October", "14th November"],
          answer: "26th January",
          explanation: "Republic Day is celebrated on 26th January every year."
      },
      {
          question: "Who was the first woman Prime Minister of India?",
          options: ["Sarojini Naidu", "Pratibha Patil", "Indira Gandhi", "Sushma Swaraj"],
          answer: "Indira Gandhi",
          explanation: "Indira Gandhi was the first woman Prime Minister of India."
      },
      {
          question: "What is the national flower of India?",
          options: ["Rose", "Lotus", "Marigold", "Jasmine"],
          answer: "Lotus",
          explanation: "The lotus is the national flower of India."
      }
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
          explanation: "New Delhi officially became the capital of India on 13 February 1931."
      },
      {
          question: "Which Act passed by the British Parliament in 1947 led to the creation of India and Pakistan?",
          options: ["Government of India Act 1935", "Indian Independence Act 1947", "Charter Act 1833", "Morley-Minto Reforms"],
          answer: "Indian Independence Act 1947",
          explanation: "The Indian Independence Act 1947, passed by the British Parliament, led to the creation of India and Pakistan."
      },
      {
          question: "Which movement was launched by Mahatma Gandhi in 1942 demanding an end to British rule?",
          options: ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Swadeshi Movement"],
          answer: "Quit India Movement",
          explanation: "The Quit India Movement was launched by Mahatma Gandhi in 1942 demanding an end to British rule in India."
      },
      {
          question: "What was the primary aim of the 'Swadeshi Movement'?",
          options: ["Boycott British goods", "Promote Indian industries", "Support British education", "Establish British administration"],
          answer: "Boycott British goods",
          explanation: "The primary aim of the Swadeshi Movement was to boycott British goods and promote Indian industries."
      },
      {
          question: "Who is known as the 'Father of the Indian Constitution'?",
          options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Vallabhbhai Patel", "Mahatma Gandhi"],
          answer: "Dr. B.R. Ambedkar",
          explanation: "Dr. B.R. Ambedkar is known as the 'Father of the Indian Constitution' for his role in drafting the Constitution of India."
      },
      {
          question: "Which freedom fighter is famous for his contribution to the Chittagong Armoury Raid?",
          options: ["Subhas Chandra Bose", "Bhagat Singh", "Jatin Das", "Surya Sen"],
          answer: "Surya Sen",
          explanation: "Surya Sen was famous for his contribution to the Chittagong Armoury Raid, also known as the Chittagong Uprising."
      },
      {
          question: "Which was the first major revolution in the Indian independence movement?",
          options: ["The Revolt of 1857", "The Non-Cooperation Movement", "The Quit India Movement", "The Swadeshi Movement"],
          answer: "The Revolt of 1857",
          explanation: "The Revolt of 1857, also known as the Sepoy Mutiny or the First War of Indian Independence, was the first major revolution in the Indian independence movement."
      },
      {
          question: "Which of the following was a major result of the First Round Table Conference held in London in 1930?",
          options: ["Communal Award", "Government of India Act 1935", "Indian Independence Act 1947", "Simon Commission Report"],
          answer: "Communal Award",
          explanation: "The Communal Award was a major result of the First Round Table Conference held in London in 1930, which was a British proposal to provide separate electorates for different communities in India."
      },
      {
          question: "What was the primary objective of the Khilafat Movement?",
          options: ["Establishment of Islamic state in India", "Restoration of the Ottoman Caliphate", "End of British rule in India", "Promotion of Hindu-Muslim unity"],
          answer: "Restoration of the Ottoman Caliphate",
          explanation: "The primary objective of the Khilafat Movement was the restoration of the Ottoman Caliphate after World War I, and it aimed to promote Hindu-Muslim unity."
      },
      {
          question: "Which Indian leader is known for his famous quote, 'Give me blood, and I shall give you freedom'?",
          options: ["Bhagat Singh", "Subhas Chandra Bose", "Lala Lajpat Rai", "Chandrashekhar Azad"],
          answer: "Bhagat Singh",
          explanation: "Bhagat Singh is known for his famous quote, 'Give me blood, and I shall give you freedom,' which he used to inspire people during the freedom struggle."
      },
      {
          question: "Who was the first Indian to be knighted by the British Crown?",
          options: ["Mahatma Gandhi", "Rabindranath Tagore", "Lala Lajpat Rai", "Gopal Krishna Gokhale"],
          answer: "Rabindranath Tagore",
          explanation: "Rabindranath Tagore was the first Indian to be knighted by the British Crown, but he later renounced the title in protest against the Jallianwala Bagh massacre."
      },
      {
          question: "Which was the first state in India to be formed on a linguistic basis?",
          options: ["Mysore", "Bengal", "Andhra Pradesh", "Kerala"],
          answer: "Andhra Pradesh",
          explanation: "Andhra Pradesh was the first state in India to be formed on a linguistic basis, with its formation in 1953."
      },
      {
          question: "Which Indian leader is known for his role in the Champaran Satyagraha movement?",
          options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
          answer: "Mahatma Gandhi",
          explanation: "Mahatma Gandhi led the Champaran Satyagraha movement in 1917, which was his first major active involvement in the Indian independence movement."
      }
  ],
    level3: [
      {
          question: "Which Indian leader is credited with leading the Salt March to Dandi in 1930?",
          options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
          answer: "Mahatma Gandhi",
          explanation: "Mahatma Gandhi led the Salt March to Dandi in 1930 as a nonviolent protest against the British monopoly on salt production."
      },
      {
          question: "The partition of Bengal in 1905 was a decision taken by which British Viceroy of India?",
          options: ["Lord Curzon", "Lord Mountbatten", "Lord Wavell", "Lord Harding"],
          answer: "Lord Curzon",
          explanation: "Lord Curzon, the British Viceroy of India, initiated the partition of Bengal in 1905 as a means of administrative convenience but it was also viewed as an attempt to weaken nationalist sentiments."
      },
      {
          question: "What was the primary purpose of the 'RIN Mutiny' in 1946?",
          options: ["To demand better pay and conditions", "To challenge the British government's authority", "To support the Indian National Congress", "To support the Quit India Movement"],
          answer: "To demand better pay and conditions",
          explanation: "The Royal Indian Navy (RIN) Mutiny of 1946 was primarily a protest by Indian sailors demanding better pay and conditions, and it also had political undertones challenging British rule."
      },
      {
          question: "Which historical document was the result of the Simon Commission's work?",
          options: ["The Government of India Act 1935", "The Indian Independence Act 1947", "The Rowlatt Act", "The Morley-Minto Reforms"],
          answer: "The Government of India Act 1935",
          explanation: "The Simon Commission's work eventually led to the Government of India Act 1935, which was a significant step in the constitutional development of India."
      },
      {
          question: "Which Indian leader was known for his role in the Kakori Train Robbery of 1925?",
          options: ["Bhagat Singh", "Chandrashekhar Azad", "Ram Prasad Bismil", "Sukhdev Thapar"],
          answer: "Ram Prasad Bismil",
          explanation: "Ram Prasad Bismil was a key figure in the Kakori Train Robbery of 1925, which was an act of revolutionary activity against British rule."
      },
      {
          question: "Which historical figure is credited with founding the Indian National Army (INA)?",
          options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
          answer: "Subhas Chandra Bose",
          explanation: "Subhas Chandra Bose founded the Indian National Army (INA) during World War II to fight against British rule and seek India's independence."
      },
      {
          question: "What was the primary objective of the 'Hindu Code Bill' introduced in the 1950s?",
          options: ["To reform Hindu personal laws", "To promote Hindu-Muslim unity", "To establish a uniform civil code", "To increase political representation for Hindus"],
          answer: "To reform Hindu personal laws",
          explanation: "The 'Hindu Code Bill' aimed to reform Hindu personal laws related to marriage, divorce, and inheritance in post-independence India."
      },
      {
          question: "Which Indian leader is known for his role in the foundation of the All India Muslim League?",
          options: ["Mohammad Ali Jinnah", "Sir Syed Ahmed Khan", "Liaquat Ali Khan", "Zafar Ali Khan"],
          answer: "Sir Syed Ahmed Khan",
          explanation: "Sir Syed Ahmed Khan is credited with laying the foundations for the All India Muslim League, although Mohammad Ali Jinnah played a crucial role in its later development and the demand for Pakistan."
      },
      {
          question: "What was the main outcome of the 'Dandi March' led by Mahatma Gandhi?",
          options: ["The establishment of a new political party", "The signing of the Gandhi-Irwin Pact", "The launch of the Quit India Movement", "The beginning of the Indian National Army's campaign"],
          answer: "The signing of the Gandhi-Irwin Pact",
          explanation: "The Dandi March led to the signing of the Gandhi-Irwin Pact in 1931, which was an agreement between Gandhi and the British government that allowed the resumption of civil disobedience and negotiations for constitutional reforms."
      },
      {
          question: "Which Indian state was the first to be bifurcated on the basis of linguistic and cultural differences after independence?",
          options: ["Andhra Pradesh", "Bihar", "Madhya Pradesh", "Uttar Pradesh"],
          answer: "Andhra Pradesh",
          explanation: "Andhra Pradesh was the first state to be bifurcated on the basis of linguistic and cultural differences in 1953, leading to the formation of the new state of Telangana later on."
      }
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
