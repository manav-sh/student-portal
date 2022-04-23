import React from 'react';
import {useHistory} from 'react-router-dom';

const Personal = () => {
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  }

  return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Enter your personal details here
      <br />
      <form onSubmit={(e) => {onSubmit(e)}}>
        <button type="submit">Finish</button>
      </form>
  </div>;
};

export default Personal;
