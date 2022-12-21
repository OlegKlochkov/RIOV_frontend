import './table.css'

export default function Table ({head = [], body = [], data = []}) {
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
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    )
}