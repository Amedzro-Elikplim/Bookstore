import Book from './Book';
import Form from './Form';

function Books() {
  const data = [
    { id: 1, title: 'Hamlet', author: 'William Shakespear' },
    { id: 2, title: 'Romeo and Julliet', author: 'William Shakespear' },
    { id: 3, title: 'Silver spoon', author: 'William Shakespear' },
  ];

  return (
    <div>
      {data.map((item) => (
        <Book key={item.id} title={item.title} author={item.author} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
