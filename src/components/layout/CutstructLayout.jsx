import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './HeaderCustruct/Header';

class CustructLayout extends Component {


    render() {

        return (
            <>
            <Header />
            {this.props.children}
            <Footer />
            </>
        );
    }
}

export default CustructLayout;
