import {useState} from 'react';
import FormContext from './FormContext.js';
import { initiaFormState } from '../helpers/constans.js';

const Provider = ({children}) => {
  const [form, setForm] = useState(initiaFormState);
  const [player, setPlayer] = useState({});
  const [data, setData] = useState([]);
  const [dataBase, setDataBase] = useState([]);

  const context = {player, setPlayer, form, setForm, data, setData, dataBase, setDataBase}

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )
};

export default Provider;
