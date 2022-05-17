import { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

import './style.scss'

export default function FaqItem({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }
    
    return (
        <div className='faq-item'>
            <h1
                onClick={toggleAnswer}
                style={{
                    color: showAnswer ? '#379dc5' : '',
                }}
            >
                <BsQuestionCircle />
                {question}
            </h1>

            <p
                style={{
                    display: showAnswer ? 'block' : 'none'
                }}
            >
                {answer}
            </p>
        </div>
    );
}
