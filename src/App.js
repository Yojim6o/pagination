import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pagination: [1, 2, 3, 4, 5, '...', 100],
      active: 0,
    };
  }

  resetPagination(a) {
    if (a < 4 || a > 96) {
      return null;
    }

    const newPagination = [1, a - 2, a - 1, a, a + 1, a + 2, 100];
    this.setState({ pagination: newPagination });
  }

  left() {
    const newActive = this.state.active - 1;

    this.resetPagination(newActive);
    this.setState({ active: newActive });
  }

  right() {
    const newActive = this.state.active + 1;

    this.resetPagination(newActive);
    this.setState({ active: newActive });
  }

  renderList() {
    const { pagination, active } = this.state;

    return pagination.map((item, i) => (
      <li key={i}>
        <a
          className={ active === i ? 'active' : null }
          href='#'
          onClick={ () => this.setState({ active: i }) }
        >
          { item }
        </a>
      </li>
    ));
  }

  render() {
    const { active, pagination } = this.state;

    return (
      <div className='App'>
        <ul className='pagination'>
          { pagination[1] === '...'
            ? <li><a href='#' onClick={ () => this.left() }>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a></li>
            : null
          }
          { this.renderList() }
          { pagination[5] === '...'
            ? <li><a href='#' onClick={ () => this.right() }>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a></li>
            : null
          }
        </ul>
      </div>
    );
  }
}

export default App;
