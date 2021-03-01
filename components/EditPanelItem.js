import react, {useState, useEffect} from 'react';
import {Row} from 'antd';

import FilterModal from './FilterModal';



function EditPanelItem (props) {

    // correct the names of things!! 
    const [isInactive, setInactive] = useState(true)
    const { key, column, active, onChange, handleFilterChange} = props

    useEffect(() => {
        setInactive(!active);
        
    }, [active])


    function handleChange(event) {
        
        setInactive(!isInactive)
    
        onChange(event.target.id, isInactive)
    }

    
    return (
    <div style={{paddingBottom: 8}} > 
        <Row style={{backgroundColor: isInactive? "": "#E6EAF8", display: "flex", verticalAlign: "middle"}} 
            onClick={(e) => handleChange(e)}>
            
            <div style={{
                paddingLeft: 24, 
                alignContent:"center", 
                verticalAlign: "middle"}} > 

                <p style={{
                    paddingTop: 10, 
                    alignContent:"center", 
                    verticalAlign: "middle"}} 
                    id={column}> 
                        {column}  
                </p>
            </div>
            
            <FilterModal 
                column={column}
                title="MRR" 
                handleFilterUpdate={handleFilterChange}/> 
        </Row>
    </div>
    )
}

export default EditPanelItem;