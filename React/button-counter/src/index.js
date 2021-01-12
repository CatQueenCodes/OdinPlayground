import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
    return(
        <button onClick={props.handleClick}>{'+1'}</button>
    )
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        let currentCount = this.state.counter;
        let updatedCount = currentCount + 1;

        console.log(updatedCount)

        this.setState({
            counter: updatedCount
        })
    }

    render() {
        const count = this.state.counter;
        return(
            <div>
                <Button handleClick={this.handleClick} />
                <div>{count}</div>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
