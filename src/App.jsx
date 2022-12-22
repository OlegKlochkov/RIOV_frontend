import { useState } from 'react';
import './App.css';
import Form from './features/form/form';
import TableStructure from './features/tableStructure';

const dataSelect = [{ label: 'Форма 1' }, { label: 'Таблица 1' }, { label: 'Форма 2' }, { label: 'Таблица 2' }]
function App() {
  const [select, setSelect] = useState('Форма 1');
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
          select === 'Форма 1' && <Form path='first/object' obj={{title: '', status: ''}}/>
        }
        {
          select === 'Таблица 1' && <TableStructure path='first/object' labels={ ['id', 'имя', 'статус'] } keys={ ['id', 'title', 'status'] } />
        }
        {
          select === 'Форма 2' && <Form path='second/object' obj={{title: '', status: ''}}/>
        }
        {
          select === 'Таблица 2' && <TableStructure path='second/object' labels={ ['id', 'имя', 'статус'] } keys={ ['id', 'title', 'status'] } />
        }
      </div>
    </div>
  );
}

export default App;
