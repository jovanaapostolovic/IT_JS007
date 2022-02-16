import React, {Component} from "react";
class Counter extends Component {
    state = {
        counter: 0,
        imageURL: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
    }

    // constructor() {
    //     super();
    //     console.log("Constructor", this)
    //     this.formatCount = this.formatCount.bind(this)
    // }

    handleIncrement = () => {
        // console.log("handleIncrement")

        this.setState({counter: this.state.counter + 1})
    }

    handleDecrement = () => {
        this.setState({counter: this.state.counter - 1})
    }

    styles = {
        fontSize: "10px",
        fontWeight: "bold",
        color: "green",
        textAlign: "center"
    }

    // formatCount() {
    //     // treba nam constructor da bismo mogli da koristimo this.
    //     //destructuring
    //     const {counter} = this.state
    //     console.log(counter)
    // }

    formatCount = () => {
        //u arrow funkciji možemo da pristupimo this.
        const {counter} = this.state
        console.log(counter);
        return counter === 0 ? "Zero" : counter
    }

    getClass = () => {
        return this.state.counter <= 0 ? "warning" : "success"
    }

    checkSuccess = () => {
        return this.state.counter === 0 ?
        <p className="warning">{this.state.counter}</p> :
        <p className="success">{this.state.counter}</p>
    }

    render() {
        return (
            <div>
                <h2 style={this.styles}>Pozdrav iz Child komponente</h2>
                <p style={{ fontSize: 30 }}>Ja sam paragraf</p>

                <img src={this.state.imageURL}/>

                <button onClick={this.handleDecrement}>-</button>

                <p className={this.getClass()}>Count: {this.formatCount()}</p>

                <button onClick={this.handleIncrement}>+</button>

                <h1>Tagovi</h1>
                {
                    this.state.tags.map((tag, index) => (
                        <p key={index}>Ovo je moj tag: {tag}</p>
                    ))
                }
            </div>
        );

    }
}

export default Counter;