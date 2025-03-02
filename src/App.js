import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    // Créer la référence avec createRef
    this.scrollReveal = React.createRef();
  }

  componentDidMount() {
    document.body.classList.add('is-loaded');
    this.scrollReveal.current.init(); // Utiliser la ref avec current
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.scrollReveal.current.init(); // Utiliser la ref avec current
    }
  }

  render() {
    return (
      <ScrollReveal
        ref={this.scrollReveal} // Assigner la ref
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
        )}
      />
    );
  }
}

export default withRouter(props => <App {...props} />);
