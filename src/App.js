import React from 'react';
import './App.css';
import ComponentC from './ComponentC'


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
          <UserContext.Provider value={'Max'}>

              <ChannelContext.Provider value={'Youtubee'}>

                  <ComponentC />

</ChannelContext.Provider>

          </UserContext.Provider>

    </div>
  );
}

export default App;
