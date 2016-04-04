import React, {PropTypes} from 'react';
import connect from 'redux'

class ArticleListUI extends React.Component {
  static propTypes = {}

  // state = {}
  // methodName = () =>
  //   <div></div>
    
  render() {
    const {
        entities
    } = this.props

    const

    return (
        <ul></ul>
    )
  }
}

export default ArticleListUI;



class ArticleList extends React.Component {
  static propTypes = {}

  render() {
    return (
      <ArticleListUI {...this.props} />
    )
  }
}

export default connect((store) => {

}, {

})(ArticleList);
