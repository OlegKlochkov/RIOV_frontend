import { useMemo } from 'react';
import { useState } from 'react';
import { createData, editData } from '../../actions/actions';
import Input from '../../components/input/input';
import './form.css';

export default function Form({ path, type, id, callback }) {
    const [title, setName] = useState('');
    const [status, setPass] = useState('');

    const memoDisabled = useMemo(() => {
        return (!title || !status);
    }, [title, status])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (type === 'edit') {
            await editData(path, id, {
                title: title,
                status: status,
            });
            callback();
        } else {
            createData(path, {
                title: title,
                status: status,
            })
        }
    }

    return (
        <form className="container_form" onSubmit={handleSubmit}>
            <Input label='title' change={(e) => setName(e.value)} />
            <Input label='status' change={(e) => setPass(e.value)} />
            <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Submit</button>
        </form>
    )
}