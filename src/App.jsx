import { useState } from 'react';
import './App.css';
import Form from './features/form/form';
import TableFirst from './features/table_first';

let dataSelect = [{ label: 'Форма' }, { label: 'Таблица' }]
function App() {
  const [select, setSelect] = useState('Форма');
  return (
    <div className="App">
      <div className="selector_container">
        {
          dataSelect.map(({ label }, index) => (
            <button className={`select_button ${select === label && 'active_select_button'}`} onClick={() => setSelect(label)} key={index}>{label}</button>
          ))
        }
      </div>
      <div className="content_container">
        {
          select === 'Форма' && <Form />
        }
        {
          select === 'Таблица' && <TableFirst />
        }
      </div>
    </div>
  );
}

export default App;
