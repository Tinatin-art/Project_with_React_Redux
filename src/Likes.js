import React from 'react';
import {connect} from 'react-redux';
import {incrementLikes, decrementLikes} from './redux/actions';


function Likes(props) {
  return (
    <div className='button-controls'>
        <button onClick={props.onIncrementLikes}>❤{props.likes}</button>
        <button onClick={props.onDecrementDislikes}>♡{props.dislike}</button>
    </div>
  )
}


function mapStateToProps(state){
    const {likesReducer} = state

    return{
        likes: likesReducer.likes,
        dislike: likesReducer.dislike
    }
}


function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementDislikes: () => dispatch(decrementLikes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes);