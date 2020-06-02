import React from 'react';
import '../css/styles.css';

function DetailView({ match, location }) {
  return (
    <>
      <div>Match Props:</div>
      <div>
        {JSON.stringify(match, null, 2)}
      </div>

      <div>Location props:</div>
      <div>
        {JSON.stringify(location, null, 2)}
      </div>
    </>
  );
}

export default DetailView;
