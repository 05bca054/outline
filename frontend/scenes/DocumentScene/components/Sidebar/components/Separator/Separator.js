import React from 'react';

import styles from './Separator.scss';

class Separator extends React.Component {
  render() {
    return (
      <span className={ styles.separator }>
        &middot;
      </span>
    );
  }
}

export default Separator;
