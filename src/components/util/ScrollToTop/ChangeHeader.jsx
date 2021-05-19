import { Component } from 'react';
import { withRouter } from 'react-router-dom';

const isServicePage = (pathname) => {
  const firstPathParameter = pathname.split('/')[1].toLowerCase();
  return firstPathParameter === 'services' ? 'seller' : 'buyer';
};

class ChangeHeader extends Component {
  setCurrentApplication = () => {
    const currentApp = isServicePage(this.props.location.pathname);
    const { application, setApplication } = this.props;

    if (
      currentApp !== application &&
      this.props.location.pathname !== '/peer/chats'
    ) {
      // setApplication(currentApp);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setCurrentApplication();
    }
  }

  shouldComponentUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      return true;
    }

    return false;
  }

  render() {
    return null;
  }
}

export default withRouter(ChangeHeader);
