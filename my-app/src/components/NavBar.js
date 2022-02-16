import React, {Component} from "react";

// export default class NavBar extends Component {

//     render() {
//         return(
//             <div>
//             <h2>Navbar</h2>
//             <p>Ukupan broj našeg niza je: {this.props.totalCounters}</p>
//             </div>
//         )
//     }
// }

const NavBar = ({totalCounters}) => {
    return (
        <div>
            <h2>Navbar</h2>
            <p>Ukupan broj našeg niza je: {totalCounters}</p>
        </div>
    )
};

export default NavBar;