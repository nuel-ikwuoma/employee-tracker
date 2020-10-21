import React from 'react';

// This component is purely presentational, wud remove it when routing has been implemented.
class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: React.Children.toArray(props.children)[0].props.name,
    };
  }

  setSelection = (ev) => {
    ev.persist();
    this.setState({ selection: ev.target.name });
  };

  render() {
    return (
      <div>
        <div>
          {React.Children.map(this.props.children, (c) => (
            <button
              name={c.props.name}
              onClick={this.setSelection}
              className={`btn btn-block m-2 ${
                this.state.selection === c.props.name
                  ? 'btn-primary active'
                  : 'btn-secondary'
              }`}
            >
              {c.props.name}
            </button>
          ))}
        </div>
        <div className='col'>
          {React.Children.toArray(this.props.children).filter(
            (c) => c.props.name === this.state.selection
          )}
        </div>
      </div>
    );
  }
}

export { Selector };
