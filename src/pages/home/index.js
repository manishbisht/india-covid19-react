import React from "react";
import covidImg from "../../assets/covid.png";
import { MenuItem, Select } from "@material-ui/core";
import { STATES_LIST } from "../../common/constants";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const handleStateChange = (e) => {
        history.push(`/${e.target.value}`);
    };

    return (
        <div>
            <div>
                <img src={covidImg} />
                <Select
                    // value={age}
                    onChange={handleStateChange}
                >
                    {STATES_LIST.map((stateName) => (
                        <MenuItem value={stateName.toLowerCase()}>
                            {stateName}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default Home;
