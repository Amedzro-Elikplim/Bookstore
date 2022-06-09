import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const data = useSelector((state) => state);

  return (
    <div>
      {data.map((item) => (
        <Book key={item.id} id={item.id} title={item.title} author={item.author} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
