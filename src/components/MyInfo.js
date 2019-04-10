import React, { Component } from "react"; // ! Weirdly enough, some linters will say you don't need React because it's not used, YOU NEED THIS

/**
 * * Instead of using hard coded values always use props! (This can be called anything, but props is usually what its called)
 * * Call constructor(props) then you can pass these values to use in your component
 */
// ! This is the bad way to write a component
// class MyInfo extends React.Component {
//     render() {
//         return (
//             <div >
//                 <h1>Harrison Smith</h1>
//                 <p>Age: 25</p>
//                 <p>Fun fact: <i>I like fuzzy cats</i></p>
//             </div>
//         );
//     }
// }

class MyInfo extends Component {
    /**
     * note : Here usually you'd put a constructor. But it's useless (React will tell you, you don't need this)
     * note : So since we already have props you can just omit the whole constructor method
     * ? So when do you NEED constructor, only when you're planning on defining state and other methods bound to this class/component?
     */

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>Fun fact: <i>{this.props.funFact}</i></p>
            </div>
        );
    }
}

export default MyInfo; // ? What's the difference between this and the bellow comment
// ! export class MyInfo