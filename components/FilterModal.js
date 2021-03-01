import react, {useState} from 'react';
import {Layout, Button, Space, Row, Modal, Select, InputNumber, Form} from 'antd';
const { Option } = Select;


const FilterModal = props => {

    const {column, title, handleFilterUpdate } = props; 

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [form] = Form.useForm();
   
    const showModal = (e) => {
        console.log(e.target.id)
        setIsModalVisible(true);
        //set Modal Title 
      };

    const handleClear = () => {
        form.resetFields();
    }

    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        setIsModalVisible(false)
        handleFilterUpdate(column, values)
    }


    return (
        <>
        <div> 
        {/* show filter buttons on numerical columns... */}
            {(column == "MRR") ? 
            <Button id="MRR" 
                size="medium" 
                onClick={(e) => showModal(e)} 
                style={{right: -165, top: 7, verticalAlign: "middle", float: 'right'}}> Filter </Button> : ""
            }
            {column == "Invoice No."  ? 
            <Button 
                id="invoiceNo"
                onClick={(e) => showModal(e)}
                style={{right: -125, top: 7, float: 'right', alignContent:'flex-end'}}> Filter </Button> : ""
            }
            {column == "Term Length"  ? 
            <Button 
                id="termLength"
                onClick={(e) => showModal(e)}
                style={{right: -115, top: 7, float: 'right', alignContent:'flex-end'}}> Filter </Button> : ""
            }
        </div>

        {/*Filter Modal*/}

        <Modal 
            visible={isModalVisible} 
            onCancel={handleCancel} 
            width={350}
            footer={null}>
            <label> Filter for </label>
            <h3 style={{paddingBottom: 20}}> {column} </h3>
            <Form
                form={form}
                onFinish={onFinish}
                initialValues={{'filterOperator' : null, 'filterValues': null}}>
 
                <Row>
                    <Space style={{paddingRight: 20}} direction="vertical"> 
                    <label> Operator </label>
                        <Form.Item name="filterOperator">                  
                            <Select id={column} label="Operator" style={{ width: 150 }}>
                                <Option value="Greater"> Greater than </Option>
                                <Option value="Lesser"> Less than </Option>
                                <Option value="Equal"> Equal to </Option>
                                <Option value="Not Equal"> Not Equal </Option>
                            </Select>
                        </Form.Item>
                    </Space>

                    <Form.Item name="filterValue"> 
            
                    <Space direction="vertical">  
                        <label> Amount </label> 
                        <InputNumber id={column} placeholder="Enter a number"/>   
                    </Space>
                    </Form.Item>
                </Row> 

                <Form.Item> 
                <Space direction="horizontal">
                    <Button 
                        htmlType="submit"
                        type="primary"> Save </Button> 
                    <Button onClick={handleClear}> Clear </Button>
                </Space>
                </Form.Item>
            </Form>           
        </Modal> 
        </>
    )
}

export default FilterModal;