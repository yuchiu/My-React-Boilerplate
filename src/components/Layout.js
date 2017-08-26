import React from 'react';
import '../../assets/scss/styles.scss';
class Layout extends React.Component {

  render() {
    return (
      <div id="container">
        <header>
          <h1 id='title'>Aloha World!</h1>
        </header>
        <section id="projects">
          <div className="wrapper">
            <h1>gallery</h1>
            <ul>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
              <li><img src="http://placehold.it/150x150"/></li>
            </ul>
          </div>
        </section>
      </div>
    )
  }

}

export default Layout;