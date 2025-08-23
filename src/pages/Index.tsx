
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AgeSelection from '../components/AgeSelection';
import FeaturesPreview from '../components/FeaturesPreview';

const Index = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleAgeSelect = (age: string) => {
    setSelectedAge(age);
  };

  const handleContinue = () => {
    if (selectedAge) {
      navigate(`/quiz/${selectedAge}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>
        <AgeSelection 
          selectedAge={selectedAge}
          onAgeSelect={handleAgeSelect}
          onContinue={handleContinue}
        />
        <FeaturesPreview />
      </main>
    </div>
  );
};

export default Index;
