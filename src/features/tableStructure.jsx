import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../actions/actions";
import Table from "../components/table/table";
import Form from "./form/form";

export default function TableStructure({ path, labels, keys }) {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState();

    const fetchData = async () => {
        const response = await getData(path);
        
        setData(response.data);
    }

    const handleUpdate = () => {
        fetchData();
        if (edit) {
            setEdit(0);
        }
    }

    useEffect(() => {//для вызова запроса на сервер
        fetchData();
    }, [])

    return (
        <div style={{width: '100%', height: '100%'}}>
            <Table
                head={labels} //название колонок в таблице
                body={keys}//название ключа объекта для отрисовки
                data={data}//массив объектов
                path={path}
                handleUpdate={handleUpdate}
                setEdit={setEdit}
            />
            {
                edit && <Form path={path} type='edit' id={edit} callback={handleUpdate}/>
            }
        </div>
        
    )
}