import React, { Component } from 'react';

class AlphabetItem extends Component {
  componentDidMount() {
    this.props.registerPos(this.props.id, this.fix.offsetTop)
  }
  render() {
    const { id, headerSection, suffix } = this.props
    return (
      <div
        style={{
          textAlign: 'left',
        }}
        ref={(ref) => { this.fix = ref }}
      >
        {
          headerSection(id, suffix)
        }
        <div
          style={{
            marginTop: 4,
            marginBottom: 8
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default AlphabetItem;