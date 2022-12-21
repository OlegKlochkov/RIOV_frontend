import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../actions/actions";
import Table from "../components/table/table";

export default function TableStructure(props) {
    const [data, setData] = useState([]);

    useEffect(() => {//для вызова запроса на сервер
        const fetchData = async () => {
            const response = await getData(props.path);
            
            setData(response.data);
        }

        fetchData();
    }, [])

    return (
        <Table
            head={props.labels} //название колонок в таблице
            body={props.keys}//название ключа объекта для отрисовки
            data={data}//массив объектов
        />
    )
}