import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../actions/actions";
import Table from "../components/table/table";

export default function TableFirst() {
    const [data, setData] = useState([])

    useEffect(() => {//для вызова запроса на сервер
        const fetchData = async () => {
            const response = await getData();
            
            setData(response.data);
        }

        fetchData();
    }, [])

    return (
        <Table
            head={['id', 'имя', 'статус']} //название колонок в таблице
            body={['id', 'title', 'status']}//название ключа объекта для отрисовки
            data={data}//массив объектов
        />
    )
}