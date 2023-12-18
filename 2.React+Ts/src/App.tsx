import React from 'react';
import List from './components/List';

const App: React.FC = () => {
  const handleSubmit = () => {
  };

  return (
    <>
      <List onSubmit={handleSubmit} />
    </>
  );
};

export default App;
