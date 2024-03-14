import React, { useState, useEffect } from "react";
import FlashCard from "./Flashcards";


function Cards() {
    const pairings = [
        {"Question": "What is the capital of the United States?", "Answer": "Washington, D.C."},
        {"Question": "Where is the Eiffel Tower located?", "Answer": "Paris, France"},
        {"Question": "What is the most populated country in the world?", "Answer": "China"},
        {"Question": "What is the smallest country in the world?", "Answer": "Vatican City"},
        {"Question": "What is the largest country in the world?", "Answer": "Russia"},
        {"Question": "Where is Mount Everest located?", "Answer": "Nepal"},
        {"Question": "What is the largest ocean in the world?", "Answer": "Pacific Ocean"},
        {"Question": "How many continents are there?", "Answer": "7"},
        {"Question": "What is the capital of Australia?", "Answer": "Canberra"},
        {"Question": "What is the deepest point in the ocean?", "Answer": "Mariana Trench"}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputClass, setInputClass] = useState("");

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % pairings.length);
        setInputClass("");
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + pairings.length) % pairings.length);
        setInputClass("");
    };

    const handleAnswer = () => {
        let answer = document.querySelector('.answer').value;
        if (answer.toLowerCase() === pairings[currentIndex].Answer.toLowerCase()) {
            setInputClass("correct");
        } else {
            setInputClass("incorrect");
        }
    };

    return (
    <div className="cards-container">
        <div className="flashcard-container">
            <div className="flashcard-content">
                <div className="flashcard">
                    <FlashCard
                        question={pairings[currentIndex].Question}
                        answer={pairings[currentIndex].Answer}
                    />
                </div>
            </div>
        </div>
        <div className="input">
            <p>Guess the Answer here: </p>
            <input className={`answer ${inputClass}`} type="text" ></input>
        </div>
        <div className="submit">
            <button className="submit" onClick={handleAnswer}>Submit</button>
        </div>
        <div className="navigation">
            <button className="previous" onClick={handlePrevious}>&lt;</button>
            <button className="next" onClick={handleNext}>&gt;</button>
        </div>
    </div>
    );
}

export default Cards;

