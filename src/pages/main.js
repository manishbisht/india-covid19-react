import React from "react";
import covidImg from "../assets/covid.png";

const Main = () => {
    const onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
    };

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
    );
};

export default Main;
