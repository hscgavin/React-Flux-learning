import React from "react";
import { Link } from "react-router";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {

    render() {
        const {location} = this.props;
        const containerStyle = {
            marginTop:"60px"
        };
        return (
            <div>
                <Nav location={location} />

                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>KillerNews.net
                                {this.props.children}
                            </h1>
                        </div>
                    </div>
                </div>
                {this.props.children}
                <Link to="archives">archives</Link>
                <Link to="settings">settings</Link>
            </div>

        );
    }
}