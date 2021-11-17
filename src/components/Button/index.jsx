import P from 'prop-types';
import './styles.css';

import { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, bttnClicked, disabled = false } = this.props;

    return (
      <button disabled={disabled} className="bttn" onClick={bttnClicked}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  bttnClicked: P.func.isRequired,
  disabled: P.bool,
};
