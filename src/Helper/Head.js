import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Movies | ' + props.title;
  }, [props]);
  return <></>;
};

export default Head;
