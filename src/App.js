import React from 'react';
// import ScrollGenerator from './components/ScrollGenerator'
// import ClassComponent from './components/ClassComponent'
import TryContext from './components/TryContext'
import ThemeContext from './ThemeContext'

function App() {
  return (
    <ThemeContext>
      <TryContext />
      {/* <ScrollGenerator /> */}
      {/* <ClassComponent /> */}
      </ThemeContext >
  )
}

export default App;
