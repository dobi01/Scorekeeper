import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {

    let input;

  const onSubmit = (event) => {
    event.preventDefault();
    props.onPlayerAdd(input.value);
    input.value = '';
  }

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      <input type="text" required maxlength="25" className="AddPlayer__input" ref={(node) => input = node} />
      <input type="submit" className="AddPlayer__submit" value="+" />
    </form>
  )
};

export default AddPlayer;