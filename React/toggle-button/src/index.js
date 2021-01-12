import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
    return(
    <button onClick={props.clickHandler}>
        {props.color}
    </button>
    )
}

class ButtonContainer extends React.Component {
    renderButton(color) {
        return(
            <Button clickHandler={() => this.props.clickHandler(color)} color={this.props.colorName[color]} />
        )
    }

    render(){
        return (
            <div className='Button-Container'>
               {this.renderButton(this.props.colorName.blue)}
               {this.renderButton(this.props.colorName.red)}
               {this.renderButton(this.props.colorName.yellow)}
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colorName: {
                blue: "blue",
                red: "red",
                yellow: "yellow",
            },
            // blueIsOn: false,
            // redIsOn: false,
            // yellowIsOn: false, //arrat button status and then check if both true certain color
        }
    }

    handleClick = (color) =>{
        console.log(color)
        document.body.style.backgroundColor = `${color}`
    }

    render(){
        return(
            <ButtonContainer colorName={this.state.colorName} clickHandler={(color) => this.handleClick(color)} />
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
  