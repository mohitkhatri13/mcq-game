import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
        selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

    return (
        <section
            className={` flex items-center justify-center h-[100vh] text-white w-[100vw] ${showQuiz ? 'block' : 'hidden'}`}
            style={{ background: 'linear-gradient(to right, #1E3A8A, #FFFFFF)' }}  >
            <div className=" lg:w-9/12  ">
                <div className="bg-slate-600 p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between gap-3">
                        <h5 className='mb-2 text-base leading-relaxed'>{question?.question}</h5>
                        <h5 className="text-[#00b9d6] w-24 text-right">{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                    </div>
                    <div>
                        {question?.options?.map((item, index) => (
                            <button
                                key={index}
                                className={`w-full text-start py-2 px-3 mt-3 rounded bg-gray-700 text-white ${correctAnswer === item && 'bg-green-400'}`}
                                onClick={(event) => checkAnswer(event, item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    {questionIndex + 1 !== quizs.length ? (
                        <button
                            className="w-full py-2 mt-3 bg-blue-600 text-white font-bold rounded hover:scale-95 duration-200 transition-all"
                            onClick={nextQuestion}
                            disabled={!selectedAnswer}
                        >
                            Next Question
                        </button>
                    ) : (
                        <button
                            className="w-full py-2 mt-3 bg-blue-600 text-white font-bold rounded hover:scale-95"
                            onClick={showTheResult}
                            disabled={!selectedAnswer}
                        >
                            Show Result
                        </button>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Quiz;
