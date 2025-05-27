// 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  return <ReactQuill value={value} onChange={onChange} />;
}
