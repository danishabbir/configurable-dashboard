import react, {useState, useEffect} from 'react';
import {Layout, Space} from 'antd';

import ExportButton from '../components/ExportButton';
import ImportButton from '../components/ImportButton';
import EditPanelItem from './EditPanelItem';
import TableView from './TableView';

const { Header, Content, Footer, Sider} = Layout;

function EditPanelTableProvider (props) {

    const [activeColumns, setActiveColumns] = useState([]);
    const {columns, data} = props;

    const [activeColumnsFilter, setActiveColumnsFilter] = useState([])

    useEffect(() => {
        columns.forEach((item) => {item.isActive = false})
        
        const initialState = columns; 
        setActiveColumns(initialState);
    }, [columns])

    // handle imported column config 
    const handleImportColumns = (importedColumns) => {
        // mark imported columns as active 
        const colImports = activeColumns
        colImports.forEach(obj => (importedColumns.some(item => item.title == obj.title ))? obj["isActive"] = true : obj)
        setActiveColumns(colImports)

        //send imported columns to table view
        setActiveColumnsFilter(importedColumns)
    
    }

    // handle Edit Panel click events 
    const handleChange = (e, state) => {

        //mark clicked column as active 
        const newArr = activeColumns 
        newArr.forEach(obj => obj.title == e ? obj["isActive"] = state : obj)
        setActiveColumns(newArr);

        //send active columns to table view 
        setActiveColumnsFilter(activeColumns.filter(item => item.isActive === true))
    }

    // handle values saved into filter modals
    const handleFilterChange = (column, values) => {
        const v = values["filterValue"]
        
        //sets the column's FILTER properties based on input from filter modal 
        activeColumnsFilter.forEach((obj) => {
            if (obj["title"] == column) {
                if (values["filterOperation"] == "Lesser") {
                    obj["filters"] = [{"text": values["filterOperator"] + "" + v, "value": v}]
                } else {
                obj["filters"] = [{"text": values["filterOperator"] + " " + v, "value": v}]

                }
            }
        })
        return (activeColumnsFilter) 
    }


    return (
        <>
        <Layout> 
            <Header style={{backgroundColor: 'white', borderBottom: "2px solid gray"}}>
            <Space style={{float: 'right'}}>
                <ImportButton handleImportColumns={handleImportColumns}/>
                <ExportButton exportData={JSON.stringify(activeColumnsFilter)}/>
            </Space>
            </Header>
        </Layout> 
        <Layout>
            <Sider style={{                     
                    background: '#F8F9FB', 
                    paddingTop: 24,
                    margin: 0,
                    minHeight: "100vh" }}width={300}>
                        <h4 style={{paddingLeft: 24, color: "#5E85D2"}}> Edit Panel </h4>
                        <div>
                        {columns.map((col, i)  => {

                            return (
                                <EditPanelItem 
                                key={i} 
                                column={col.title} 
                                // set active status to true if col appears in imported col config 
                                active={activeColumnsFilter.some(item => item.title === col.title)}
                                onChange={handleChange}
                                handleFilterChange={handleFilterChange}/>
                            )
                            }
                        )}
                        </div>
            </Sider> 
            <Layout style={{
                background: "#fff",
                paddingRight: 4,
                minHeight: "100vh"
            }}> 
                <TableView columns={activeColumnsFilter} dataSource={data} onChange={handleFilterChange}/> 
            </Layout>
        </Layout>
        </>

    )
}

export default EditPanelTableProvider;