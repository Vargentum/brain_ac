import React, {Component as ReactComponent} from 'react';

export default (Component) => {

  return class extends ReactComponent {

    state = {
      expandedItemId: null
    }
      
    render() {
      return (
        <Component {...this.props} 
                   {...this.state}
                   onExpand={this.handleItemExpand} />
      )
    }

    handleItemExpand = (id) => {
      this.setState({
          expandedItemId : id !== this.state.expandedItemId ? id : null
      });
    }
  }
}
