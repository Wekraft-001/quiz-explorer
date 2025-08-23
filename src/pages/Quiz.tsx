
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Quiz6to8 from '../components/Quiz6to8';
import Quiz9to12 from '../components/Quiz9to12';
import Quiz13to15 from '../components/Quiz13to15';
import Quiz16to17 from '../components/Quiz16to17';

const Quiz = () => {
  const { ageRange } = useParams<{ ageRange: string }>();

  const renderQuiz = () => {
    switch (ageRange) {
      case '6-8':
        return <Quiz6to8 />;
      case '9-12':
        return <Quiz9to12 />;
      case '13-15':
        return <Quiz13to15 />;
      case '16-17':
        return <Quiz16to17 />;
      default:
        return <div>Quiz not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>
        {renderQuiz()}
      </main>
    </div>
  );
};

export default Quiz;
