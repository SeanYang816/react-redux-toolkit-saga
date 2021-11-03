import React, { PureComponent as Component } from "react";
import { connect } from "react-redux";

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apple: 'apple',
            banana: null,
            coconut: undefined,
            dragonFruit: 123,
            eggPlant: [],
            fruit: {},
        }
    this.handleChange = this.handleChange.bind(this);        
    }

    handleChange = () => {
        const { requestNothing } = this.props // this for the dispatch
        requestNothing()
        this.setState ({
            apple: 'not apple',
        })
    }

    render() {
        const { isLoading } = this.props // this for the selector
        console.log('render!')
        return (
            <div>
                <button onClick={this.handleChange}>change something</button>
                {this.state.apple}
                {isLoading && <h1>I request Nothing : )</h1> || <p>Not Loading...</p> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.randomUser.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestNothing: () => dispatch({type: 'randomUser/requestNothing'})
    }
}

// connect to the store with HOC
// then pass  down the selector and dispatch to the props
export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent); 