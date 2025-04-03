import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FieldEditor = (props) => {
    return <ReactQuill theme="snow" value={props.value ?? ''} onChange={(value) => props.onChange && props.onChange(value)} />;
}

export default FieldEditor;