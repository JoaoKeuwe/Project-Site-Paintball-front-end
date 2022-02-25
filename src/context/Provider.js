import {useState} from 'react';
import FormContext from './FormContext.js';

const Provider = ({children}) => {
  const [player, setPlayer] = useState({});

  const context = {player, setPlayer}

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )
};

export default Provider;