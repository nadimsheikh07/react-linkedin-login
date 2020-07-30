import React from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
class Index extends React.Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    console.log('handleSuccess', data)
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    console.log('handleFailure', error)
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  render() {
    const { code, errorMessage } = this.state;
    return (
      <React.Fragment>
        <LinkedIn
          clientId="86qrkhmupyp1tv"
          state="V%23JKVH@KJV@"
          scope="r_liteprofile r_emailaddress"
          onFailure={(data) => this.handleFailure(data)}
          onSuccess={(error) => this.handleSuccess(error)}
          redirectUri="http://localhost:3000/linkedin"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzTU00PbM-0Lni0ylwR29YRkAC3ukV20iTGg&usqp=CAU" alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </React.Fragment>
    )
  }
}


export default Index;
