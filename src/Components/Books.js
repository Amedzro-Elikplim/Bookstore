import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { FETCHBOOKS } from '../redux/books/actions';

function Books() {
  const data = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FETCHBOOKS());
  }, []);

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
