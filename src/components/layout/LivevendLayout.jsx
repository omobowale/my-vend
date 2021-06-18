import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

class LivevendLayout extends Component {


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

export default LivevendLayout;
