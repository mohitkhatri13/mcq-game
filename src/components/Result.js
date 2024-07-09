import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver } = useContext(DataContext);
    return (
        <section
            className={ ` h-[100vh] text-white ${showResult ? 'block' : 'hidden'}`}
            style={{ background: 'linear-gradient(to right, #1E3A8A, #FFFFFF)' }}
        >
            <div className="container mx-auto px-4 py-16">
                <div className="flex  items-center justify-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-green-600' : 'bg-blue-600'}`}>
                            <h1 className='mb-2 font-bold'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 font-bold'>Your score is {marks} out of {quizs.length * 5}</h3>
                            <button onClick={startOver} className='btn py-2 px-4 bg-white text-dark font-bold rounded hover:scale-95 transition-all duration-200'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
