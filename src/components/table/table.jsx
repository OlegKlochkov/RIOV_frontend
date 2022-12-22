import './table.css'
import { deleteData } from '../../actions/actions'
import { useState } from 'react';

export default function Table ({ head = [], body = [], data = [], path, handleUpdate, setEdit }) {
    const handleDelete = async (id) => {
        await deleteData(path, id);
        handleUpdate();
    }

    return(
        <table>
            <thead>
                <tr>
                    {
                        head.map((el, index)=>(
                            <td key={index}>{el}</td>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                    {
                        data.map((obj, index)=> (
                            <tr key={index}>
                                {
                                    body.map((element, i)=>(
                                        <td key={i}>{obj[element]}</td>
                                    )) 
                                }
                                <button onClick={() => setEdit(obj.id)}>Edit</button>
                                <button onClick={() => handleDelete(obj.id)}>Delete</button>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    )
}