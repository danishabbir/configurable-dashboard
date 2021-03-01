import {Button, message} from 'antd';




const ExportButton = props => {
    const {exportData} = props;


    const onCopy = (exportData) => {
        navigator.clipboard.writeText(exportData)
        message.success("column config copied")
    }


    return (
        <Button
        onClick={() => {onCopy(exportData)}}
        size="large"
        > Export </Button>
    )
}

export default ExportButton;