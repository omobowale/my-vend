import { Link } from 'react-router-dom';


const Login = () => {
    return (
         <section className="container login">
            <div className="row">
                <div className="col-md-6 signup-pane">
                <div className="signup-title">
                    <h1> Login </h1>
                </div>
                <div className="signup-body">
                    <form className="signup-form container" onSubmit={submitForm}>
                        <div className="row">
                            <div className="col-12">
                            
                            </div>
                            <div className="col-12">
                            
                            </div>
                            <div className="col-12 forgot">
                                <Link to="/reset-password" className="blue-text">
                                    Forgot Password?
                                </Link>
                                <Button color="green" text="Enter" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="signup-bottom">
                    <Link to="/signup">Not yet registered? Sign-up here.</Link>
                </div>
                </div>
            </div>
            {loading && <TransparentSpinner />}
        </section> 
    )

}

export default Login;