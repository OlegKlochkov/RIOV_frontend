import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { createData, editData } from '../../actions/actions';
import Input from '../../components/input/input';
import './form.css';

export default function Form({ path, type, id, callback, obj }) {
    // const [title, setName] = useState('');
    // const [status, setPass] = useState('');
    const [inputObj, setInputObj] = useState({});
    const [objUpdated, setObjUpdated] = useState(0);

    useEffect(() => {
        setInputObj(obj);
    }, [])

    const memoDisabled = useMemo(() => {
        for (let field in inputObj) {
            if (!inputObj[field]) {
                return true;
            }
        }

        return false;
    }, [objUpdated])

    const updateFields = (field, val) => {
        let obj = inputObj;
        console.log(isNaN(Number(val)))
        obj[field] = isNaN(Number(val)) ? val : Number(val);
        console.log(obj)
        setInputObj(obj);
        setObjUpdated(objUpdated + 1);//костыль для useMemo, т.к. изменение объекта не отследить (ссылка та же)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (type === 'edit') {
            await editData(path, id, inputObj);
            callback();
        } else {
            createData(path, inputObj);
        }
    }

    return (
        <form className="container_form" onSubmit={handleSubmit}>
            {
                Object.keys(inputObj).map((e, index) => (
                    <Input key={index} label={e} change={(input) => {
                        updateFields(e, input.value);
                    }} />
                ))
            }
            <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Submit</button>
        </form>
    )
}