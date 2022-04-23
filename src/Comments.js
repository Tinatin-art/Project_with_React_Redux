import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';
import uniqid from 'uniqid';
import {commentCreate, commentLoad} from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
function Comments() {

  const dispatch = useDispatch();

  const [textComment, setTextComment] = useState('');
  const comments = useSelector(state => {

    const {commentsReducer} = state;
    return commentsReducer.comments;
  })

  const habdleInput = (e) => {
    setTextComment(e.target.value);
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    const id = uniqid();
    dispatch(commentCreate(textComment, id))
  }

  useEffect(() => {
    dispatch(commentLoad());
  }, [dispatch]);

  return (
    <div className='card-comments'>
        <form onSubmit={handleSumbit} className='comments-item-create'>
            <input type="text" value={textComment} onChange={habdleInput}/>
            <input type="submit" hidden />
        </form>
        {!! comments.length && comments.map(res => {
    
          return <SingleComment key={res.id} data={res}/>
        })}
        
    </div>
  )
}

export default Comments