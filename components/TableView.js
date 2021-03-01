import react, {useState, useEffect} from 'react';
import {Layout, Button, Space, Row, Table } from 'antd';

const { Header, Content, Footer, Sider} = Layout; 

function TableView (props) {
    const {columns, dataSource, handleChange} = props;

    const [filterColumns, setFilterColumns] = useState([])

    useEffect(() => {
        setFilterColumns(dataSource)

        // apply filter by HAND
        columns.forEach(col => {
            if ("filters" in col) {
                if (col["filters"].length > 0) {
                    const operator = col["filters"][0]["text"].split(" ")[0]
                    const value =  col["filters"][0]["value"]
                    switch(operator) {
                        case "Greater":
                            const newArr = dataSource.filter(obj => obj[col.dataIndex] > value)
                            setFilterColumns(newArr)
                            console.log("setting filter columns", filterColumns, value)
                            break
                        case "Lesser": 
                            const nArr = dataSource.filter(obj => obj[col.dataIndex] < value );
                            setFilterColumns(nArr)
                            console.log("setting filter columns", filterColumns, value)
                            break
                        case ("Equal"):
                            const cArr = dataSource.filter(obj => obj[col.dataIndex] == value)
                            setFilterColumns(cArr)
                            console.log("setting filter columns", filterColumns, value)
                            break
                        case ("Not"):
                            const dArr = dataSource.filter(obj => obj[col.dataIndex] != value)
                            setFilterColumns(dArr)
                            console.log("setting filter columns", filterColumns, value)
                    }
                }
                }
            })
    }, [columns])

    // show blank if no column selected 
    if (columns.length == 0) {
        return (<h1 style={{padding: 20, color: "blue"}}> Select a column to show table </h1>)

    }

    return (
        <Table pagination={false} columns={columns} dataSource={filterColumns} onChange={handleChange} size="small" />
    )
}

export default TableView;