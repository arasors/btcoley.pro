import React, {Component, memo} from "react";

class Market extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return(
            <section id="home" className="hero-section">
                ANASAYFA
            </section>
        )
    }

}

export default memo(Market);