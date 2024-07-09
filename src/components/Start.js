import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);

    return (
        <section
            className={`h-[100vh] text-white text-center ${showStart ? 'block' : 'hidden'}`}
            style={{ background: 'linear-gradient(to right, #1E3A8A, #FFFFFF)' }}
        >
            <div className="container mx-auto px-4 py-16">
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h1 className='font-bold text-4xl mb-4 '>Basic React JS Quiz</h1>
                        <button 
                            onClick={startQuiz} 
                            className="btn px-4 py-2 bg-white text-blue-800 font-bold rounded-full hover:scale-95"
                        >
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
