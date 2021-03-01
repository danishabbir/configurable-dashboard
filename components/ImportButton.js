import react, {useState} from 'react';
import {Button, Space, Modal, Input, Form} from 'antd';
const { TextArea } = Input;

const ImportButton = props => {

    const [isImportModalVisible, setImportModalVisible] = useState(false);

    const {handleImportColumns} = props;

    const [form] = Form.useForm()
    const showModal = (e) => {
        console.log(e.target.id)
        setImportModalVisible(true);
    };
    const handleClear = () => {
        form.resetFields();
    };

    
    const handleCancel = () => {
        setImportModalVisible(false);
    };

    const onFinish = (values) => {
        
        setImportModalVisible(false)
        const columnConfig = JSON.parse(values["ImportedJson"])
        console.log(columnConfig)
        handleImportColumns(columnConfig)
    }

    return (
        <>
         <Button     
                onClick={(e) => showModal(e)}
                type="primary"
                size="large"
                > Import </Button>
        <Modal 
                visible={isImportModalVisible} 
                onCancel={handleCancel} 
                width={400}
                footer={null}>
            <Space style={{padding: 20, paddingBottom: 0}} direction="vertical"> 
                <label> Json Import </label>
                <Form
                    form={form}
                    onFinish={onFinish}>

                    <Form.Item
                    name="ImportedJson">
                        <TextArea style={{width: 300}} name="data" rows={10} />       
                    </Form.Item>


                    <Space direction="horizontal">
                        <Form.Item>                   
                            <Button 
                            htmlType="submit"
                            type="primary"> Import </Button> 
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={handleClear}> 
                                    Clear 
                            </Button>
                        </Form.Item>
                    </Space>
                    
                </Form>
            </Space>

        </Modal> 
        </>
    )
}

export default ImportButton;