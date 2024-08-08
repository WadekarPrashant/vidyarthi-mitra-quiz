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
      explanation: "After independence, there were 562 self-governing states in India known as Princely States. These provinces were ruled by Kings or Nawabs and were not under the government of India. Vallabhbhai Patel who was deputy prime minister at that time brought these states under the rule of government of India through the use of diplomacy and military force. This earned him the title of 'Iron Man of India'."
    },
    {
      question: "Who ruled Goa before it was integrated into India?",
      options: ["British", "French", "Portuguese", "Dutch"],
      answer: "Portuguese",
      explanation: "Goa was ruled by the Portuguese before it was liberated by Indian troops in a military operation conducted on 18 & 19 December 1961. It was formally integrated with India in 1963."
    },
    {
      question: "When did India get independence?",
      options: ["1947"],
      answer: "1947",
      explanation: "*** Write Explanation here ***"
    },
    {
      question: "What do the three colors on a country’s flag stand for?",
      options: ["Sacrifice (Orange)", "Peace (White)", "Prosperity (Green)"],
      answer: "Sacrifice (Orange), Peace (White), Prosperity (Green)",
      explanation: "The colors on the Indian flag represent sacrifice (orange), peace (white), and prosperity (green)."
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
      question: "Who was the first Prime Minister of independent India?",
      options: ["Mahatma Gandhi", "Indira Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
      answer: "Jawaharlal Nehru",
      explanation: "Jawaharlal Nehru was the first Prime Minister of independent India."
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
    },
    {
      question: "The highest peak in Maharashtra?",
      options: ["Harishchandragad", "Kalsubai Shikhar", "Salher", "Mahabaleshwar"],
      answer: "Kalsubai Shikhar",
      explanation: "Kalsubai Shikhar is the highest peak in Maharashtra."
    },
    {
      question: "Which sea lies to the west of Maharashtra?",
      options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Red Sea"],
      answer: "Arabian Sea",
      explanation: "The Arabian Sea lies to the west of Maharashtra."
    },
    {
      question: "Which city in Maharashtra is known as the 'Oxford of the East'?",
      options: ["Mumbai", "Nagpur", "Pune", "Nashik"],
      answer: "Pune",
      explanation: "Pune is known as the 'Oxford of the East.'"
    },
    {
      question: "Which city is known as the 'Wine Capital of India'?",
      options: ["Mumbai", "Solapur", "Nashik", "Aurangabad"],
      answer: "Nashik",
      explanation: "Nashik is known as the 'Wine Capital of India.'"
    },
    {
      question: "Name the famous caves in Maharashtra that are a UNESCO World Heritage Site.",
      options: ["Elephanta and Kanheri Caves", "Ajanta and Ellora Caves", "Karla and Bhaja Caves", "Bedse and Bhaja Caves"],
      answer: "Ajanta and Ellora Caves",
      explanation: "The Ajanta and Ellora Caves in Maharashtra are UNESCO World Heritage Sites."
    },
    {
      question: "Which fort in Maharashtra was the capital of Chhatrapati Shivaji Maharaj's kingdom?",
      options: ["Rajgad", "Raigad", "Pratapgad", "Shivneri"],
      answer: "Rajgad",
      explanation: "Rajgad was the capital of Chhatrapati Shivaji Maharaj's kingdom for 26 years, after which the capital was moved to Raigad."
    }
  ],
  level2: [
    {
      question: 'Which river is known as the "Ganga of the South"?',
      options: ['Godavari', 'Krishna', 'Kaveri', 'Yamuna'],
      answer: 'Kaveri',
      explanation: 'The Kaveri River is known as the "Ganga of the South."'
    },
    {
      question: 'Which is the highest civilian award in India?',
      options: ['Padma Shri', 'Padma Bhushan', 'Bharat Ratna', 'Padma Vibhushan'],
      answer: 'Bharat Ratna',
      explanation: 'The Bharat Ratna is the highest civilian award in India.'
    },
    {
      question: 'Who was the first Indian to win a Nobel Prize?',
      options: ['C.V. Raman', 'Rabindranath Tagore', 'Hargobind Khorana', 'Amartya Sen'],
      answer: 'Rabindranath Tagore',
      explanation: 'Rabindranath Tagore was the first Indian to win a Nobel Prize in Literature in 1913.'
    },
    {
      question: 'On Independence Day, the Prime Minister of India hoists our tricolour flag at:',
      options: ['the Purana Qila, Delhi', 'the Red Fort, Old Delhi', 'the Red Fort, Agra', 'the India Gate, New Delhi'],
      answer: 'the Red Fort, Old Delhi',
      explanation: 'India became free from British rule on 15th August 1947 and the first Prime Minister of Independent India, Pt. Jawaharlal Nehru hoisted the Indian National Flag above Lahori Gate of Red Fort in Delhi. From that day Prime Ministers of India hoist our tricolour flag at the Red Fort, Old Delhi.'
    },
    {
      question: 'Which city is known as the "City of Joy" in India?',
      options: ['Mumbai', 'Kolkata', 'Jaipur', 'Chennai'],
      answer: 'Kolkata',
      explanation: 'Kolkata is known as the "City of Joy."'
    },
    {
      question: 'Which movement was launched by Mahatma Gandhi in 1942 demanding an end to British rule in India?',
      options: ['Non-Cooperation Movement', 'Civil Disobedience Movement', 'Quit India Movement', 'Khilafat Movement'],
      answer: 'Quit India Movement',
      explanation: 'The Quit India Movement was launched by Mahatma Gandhi in 1942 demanding an end to British rule in India.'
    },
    {
      question: 'Which Mughal Emperor built the Jama Masjid in Delhi?',
      options: ['Akbar', 'Humayun', 'Shah Jahan', 'Aurangzeb'],
      answer: 'Shah Jahan',
      explanation: 'The Jama Masjid in Delhi was built by Mughal Emperor Shah Jahan.'
    },
    {
      question: 'Which Indian state has the longest coastline?',
      options: ['Tamil Nadu', 'Gujarat', 'Maharashtra', 'Andhra Pradesh'],
      answer: 'Gujarat',
      explanation: 'Gujarat has the longest coastline of any state in India.'
    },
    {
      question: 'Which is the largest dam in Maharashtra?',
      options: ['Koyna Dam', 'Mulshi Dam', 'Bhatsa Dam', 'Jayakwadi Dam'],
      answer: 'Jayakwadi Dam',
      explanation: 'Jayakwadi Dam is the largest dam in Maharashtra.'
    },
    {
      question: 'Winter capital of Maharashtra?',
      options: ['Mumbai', 'Pune', 'Nagpur', 'Aurangabad'],
      answer: 'Nagpur',
      explanation: 'Nagpur is the winter capital of Maharashtra.'
    },
    {
      question: 'What is the longest river in India?',
      options: ['Brahmaputra', 'Yamuna', 'Ganges/Ganga', 'Godavari'],
      answer: 'Ganges/Ganga',
      explanation: 'The Ganges, or Ganga, is the longest river in India.'
    },
    {
      question: 'Which Indian state is known for the Sundarbans mangrove forest?',
      options: ['Odisha', 'Andhra Pradesh', 'West Bengal', 'Kerala'],
      answer: 'West Bengal',
      explanation: 'West Bengal is known for the Sundarbans mangrove forest.'
    },
    {
      question: 'What is the highest battlefield in the world, located in India?',
      options: ['Dras', 'Siachen Glacier', 'Kargil', 'Leh'],
      answer: 'Siachen Glacier',
      explanation: 'Siachen Glacier is the highest battlefield in the world, located in India.'
    },
    {
      question: 'Which river is known as the "Lifeline of Madhya Pradesh"?',
      options: ['Tapi', 'Chambal', 'Betwa', 'Narmada'],
      answer: 'Narmada',
      explanation: 'The Narmada River is known as the "Lifeline of Madhya Pradesh."'
    },
    {
      question: 'What is the second-longest river in India?',
      options: ['Yamuna', 'Godavari', 'Krishna', 'Narmada'],
      answer: 'Godavari',
      explanation: 'The Godavari is the second-longest river in India.'
    },
    {
      question: 'Which is the largest coffee-producing state in India?',
      options: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'],
      answer: 'Karnataka',
      explanation: 'Karnataka is the largest coffee-producing state in India.'
    },
    {
      question: 'What is the largest brackish water lake in India?',
      options: ['Wular Lake', 'Loktak Lake', 'Chilika Lake', 'Dal Lake'],
      answer: 'Chilika Lake',
      explanation: 'Chilika Lake is the largest brackish water lake in India.'
    },
    {
      question: 'What is the capital of Andhra Pradesh?',
      options: ['Hyderabad', 'Vijayawada', 'Visakhapatnam', 'Amaravati'],
      answer: 'Amaravati',
      explanation: 'Amaravati is the capital of Andhra Pradesh.'
    },
    {
      question: 'What is the highest waterfall in India and where is it located?',
      options: ['Kunchikal Falls, Karnataka', 'Jog Falls, Karnataka', 'Dudhsagar Falls, Goa', 'Nohkalikai Falls, Meghalaya'],
      answer: 'Jog Falls, Karnataka',
      explanation: 'Jog Falls in Karnataka is the highest waterfall in India.'
    },
    {
      question: 'In which state is the famous Chilika Lake located?',
      options: ['Andhra Pradesh', 'Odisha', 'West Bengal', 'Tamil Nadu'],
      answer: 'Odisha',
      explanation: 'The famous Chilika Lake is located in Odisha.'
    }
  ],
  level3: [
    {
        question: 'Where did the Jallianwala Bagh Massacre take place?',
        options: ['Delhi', 'Amritsar', 'Lahore', 'Mumbai'],
        answer: 'Amritsar',
        explanation: 'The Jallianwala Bagh Massacre took place in Amritsar in 1919.'
    },
    {
        question: 'Who was the founder of the Gupta Empire?',
        options: ['Samudragupta', 'Chandragupta I', 'Chandragupta II', 'Kumaragupta'],
        answer: 'Chandragupta I',
        explanation: 'Chandragupta I was the founder of the Gupta Empire.'
    },
    {
        question: 'Who established the Indian National Army (INA) to fight against the British?',
        options: ['Bhagat Singh', 'Subhas Chandra Bose', 'Jawaharlal Nehru', 'Bal Gangadhar Tilak'],
        answer: 'Subhas Chandra Bose',
        explanation: 'Subhas Chandra Bose established the Indian National Army (INA) to fight against British rule in India.'
    },
    {
        question: 'In which state is the Kanchenjunga, the third highest mountain in the world, located?',
        options: ['Uttarakhand', 'Himachal Pradesh', 'Sikkim', 'Jammu and Kashmir'],
        answer: 'Sikkim',
        explanation: 'Kanchenjunga, the third highest mountain in the world, is located in Sikkim, India.'
    },
    {
        question: 'Which mountain range is also known as the "Blue Mountains"?',
        options: ['Aravalli Range', 'Western Ghats', 'Nilgiri Hills', 'Satpura Range'],
        answer: 'Nilgiri Hills',
        explanation: 'The Nilgiri Hills are also known as the "Blue Mountains."'
    },
    {
        question: 'Which Indian king fought against Alexander the Great in the Battle of the Hydaspes?',
        options: ['Chandragupta Maurya', 'Ashoka', 'Porus', 'Bindusara'],
        answer: 'Porus',
        explanation: 'King Porus fought against Alexander the Great in the Battle of the Hydaspes.'
    },
    {
        question: 'Which Indian mathematician is known for his contributions to number theory and has a famous "Notebook"?',
        options: ['Srinivasa Ramanujan', 'Aryabhata', 'Brahmagupta', 'Bhaskara II'],
        answer: 'Srinivasa Ramanujan',
        explanation: 'Srinivasa Ramanujan is known for his contributions to number theory and his famous "Ramanujan Notebook."'
    },
    {
        question: 'Who is the author of the famous book "The Discovery of India"?',
        options: ['Rabindranath Tagore', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'S. Radhakrishnan'],
        answer: 'Jawaharlal Nehru',
        explanation: 'Jawaharlal Nehru is the author of the famous book "The Discovery of India."'
    },
    {
        question: 'Which Indian state shares its border with the maximum number of other states?',
        options: ['Uttar Pradesh', 'Madhya Pradesh', 'Bihar', 'Rajasthan'],
        answer: 'Uttar Pradesh',
        explanation: 'Uttar Pradesh shares its border with 8 other states, the maximum in India.'
    },
    {
        question: 'Who is the current Chief Justice of India (as of 2024)?',
        options: ['N.V. Ramana', 'D.Y. Chandrachud', 'Ranjan Gogoi', 'S.A. Bobde'],
        answer: 'D.Y. Chandrachud',
        explanation: 'As of 2024, D.Y. Chandrachud is the current Chief Justice of India.'
    },
    {
        question: 'Which state in India is known as the "Spice Garden of India"?',
        options: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh'],
        answer: 'Kerala',
        explanation: 'Kerala is known as the "Spice Garden of India" for its wide variety of spices.'
    },
    {
        question: 'Which Indian cricketer was named the ICC Men\'s Cricketer of the Year in 2023?',
        options: ['Rohit Sharma', 'Virat Kohli', 'Jasprit Bumrah', 'Rishabh Pant'],
        answer: 'Jasprit Bumrah',
        explanation: 'Jasprit Bumrah was named the ICC Men\'s Cricketer of the Year in 2023.'
    },
    {
        question: 'In which Indian state is the Sundarbans mangrove forest located?',
        options: ['Odisha', 'West Bengal', 'Assam', 'Andhra Pradesh'],
        answer: 'West Bengal',
        explanation: 'The Sundarbans mangrove forest is located in West Bengal, India.'
    },
    {
        question: 'Who is the current Chairman of the Indian Space Research Organisation (ISRO) (as of 2024)?',
        options: ['K. Sivan', 'A.S. Kiran Kumar', 'S. Somanath', 'G. Madhavan Nair'],
        answer: 'S. Somanath',
        explanation: 'As of 2024, S. Somanath is the current Chairman of ISRO.'
    },
    {
        question: 'The patriotic poem "Sarfaroshi Ki Tamanna" was written by?',
        options: ['Kartar Singh Sarabha', 'Ram Prasad Bismil', 'Muhammad Iqbal', 'Bankim Chandra Chatterjee'],
        answer: 'Ram Prasad Bismil',
        explanation: 'Ram Prasad Bismil, a revolutionary and freedom fighter, wrote the patriotic poem "Sarfaroshi Ki Tamanna".'
    },
    {
        question: 'Who developed the "Drain of Wealth" theory?',
        options: ['Dadabhai Naoroji', 'Bal Gangadhar Tilak', 'Gopal Krishna Gokhale', 'Lala Lajpat Rai'],
        answer: 'Dadabhai Naoroji',
        explanation: 'Dadabhai Naoroji developed the "Drain of Wealth" theory, which highlighted the economic exploitation of India by the British.'
    },
    {
        question: 'What city in India is dubbed the "City of Prime Ministers"?',
        options: ['New Delhi', 'Prayagraj (Allahabad)', 'Varanasi', 'Lucknow'],
        answer: 'Prayagraj (Allahabad)',
        explanation: 'Prayagraj (Allahabad) is dubbed the "City of Prime Ministers" as it is the birthplace of several Indian Prime Ministers.'
    },
    {
        question: 'Which state is known as the "Rice Bowl of India"?',
        options: ['Tamil Nadu', 'Punjab', 'Andhra Pradesh', 'Bihar'],
        answer: 'Andhra Pradesh',
        explanation: 'Andhra Pradesh is known as the "Rice Bowl of India" due to its extensive rice production.'
    },
    {
        question: 'What is the largest freshwater lake in India?',
        options: ['Chilika Lake', 'Loktak Lake', 'Wular Lake', 'Dal Lake'],
        answer: 'Wular Lake',
        explanation: 'Wular Lake, located in Jammu and Kashmir, is the largest freshwater lake in India.'
    },
    {
        question: 'Which river is known as the "River of Gold"?',
        options: ['Brahmaputra', 'Son River', 'Yamuna', 'Ganga'],
        answer: 'Son River',
        explanation: 'The Son River is known as the "River of Gold" due to the yellowish color of its water.'
    },
    {
        question: 'In which state is the famous Virupaksha Temple located?',
        options: ['Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Kerala'],
        answer: 'Karnataka',
        explanation: 'The famous Virupaksha Temple is located in Hampi, Karnataka.'
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
