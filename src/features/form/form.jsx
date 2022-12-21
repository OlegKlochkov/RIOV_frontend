import { useMemo } from 'react';
import { useState } from 'react'
import { createData } from '../../actions/actions';
import Input from '../../components/input/input'
import './form.css'

export default function Form(props) {
    const [title, setName] = useState('');
    const [status, setPass] = useState('');

    const memoDisabled = useMemo(() => {
        return (!title || !status);
    }, [title, status])

    const handleSubmit = (e) => {
        e.preventDefault();
        createData(props.path, {
            title: title,
            status: status,
        })
    }

    return (
        <form className="container_form" onSubmit={handleSubmit}>
            <Input label='title' change={(e) => setName(e.value)} />
            <Input label='Password' change={(e) => setPass(e.value)} />
            <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Submit</button>
        </form>
    )
}