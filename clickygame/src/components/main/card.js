import React, {Component} from 'react';
// import "./card.css"

class Card extends Component {

    render() {
        return (
        
                <div className="img-container col-md-3 mx-3 mb-4 p-2">
                    <img className ="img-fluid" 
                        onClick={this.props.handleClick}
                        alt={this.props.id}
                        src={this.props.image}
                        id={this.props.id}/>
                </div>
        )
    }
}

// const Card = props =>(
//     <div onClick={()=>props.handleClick(props.id)} class="card">
//         <div class="img-container">
//             <img class ="img-fluid"
//               alt={props.id}
//                 src={props.image}/>
//         </div>
//     </div>
// );

export default Card;