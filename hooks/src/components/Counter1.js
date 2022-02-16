import React, {useEffect, useState} from "react";


const Counter1 = () => {

    const [state, setState] = useState({counter: 4, color: "blue"});
    console.log(state);
    const{ counter, color } = state;
    console.log(counter);
    console.log(state.color);

    const handleDecrement = () => {
        // setCounter1((prevState) => prevState - 1);
        setState((prevState) => {
            //spread operator
           return {...prevState, counter: prevState.counter - 1}; 
        });
        
    };

    const changeColor = () => {
        setState((prevState) => {
          return { ...prevState, color: "red" };
        });
    };

  //   useEffect(() => {
  //     console.log("Render");
  //   });

  //componentDidMount
  // useEffect(() => {
  //   console.log("Render");
  // }, []);

    useEffect(() => {
        console.log("Render");
    }, [state.color]);

    useEffect(() => {
        console.log("Render");
        if (state.counter === 0) alert("Stiglo je do 0"); 
    }, [state.color]);

    useEffect(() => {
        console.log("Hello World!");
    
        //  componentWillUnmount
        return () => {
            console.log("Do some cleanup!");
        };
    }, []);

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>
                {counter}
            </span>
            <span style={{marginLeft: 15}}>
                {color}
            </span>
            <button>+</button>
            <button 
                onClick={() => 
                    setState((prevState) => {
                        return {...prevState, color: "red"};
                    })
                }
            >
                change color
            </button>

        </div>
    );
};

export default Counter1;