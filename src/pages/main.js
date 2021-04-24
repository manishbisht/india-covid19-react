import React from 'react';
import covidImg from '../assets/covid.png';


class Main extends Component {
    onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
      }
      render(){
        return (
            <div>
                <div>
                    <img src={covidImg} />
                    <select onChange={this.onChange}>
    
                        <option value="Mumbai">Mumbai</option>
                        <option value="Jaipur">Jaipur</option>
    
                    </select>
                </div>
            </div>
        )
      }
    
}

export default Main;