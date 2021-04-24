import React from "react";
import covidImg from "../../assets/covid.png";
import { MenuItem, Select } from "@material-ui/core";
import { STATES_LIST } from "../../common/constants";
import { useHistory } from "react-router-dom";
import { useCommonStyles } from "../../common/commonStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    selectContainer: {
        width: "100%",
    },
}));

const Home = () => {
    const history = useHistory();
    const commonClasses = useCommonStyles();
    const classes = useStyles();

    const handleStateChange = (e) => {
        history.push(`/${e.target.value}`);
    };

    return (
        <div className={commonClasses.mainContainer}>
            <img src={covidImg} />
            <Select
                classes={{ root: classes.selectContainer }}
                onChange={handleStateChange}
            >
                {STATES_LIST.map((stateName) => (
                    <MenuItem value={stateName.toLowerCase()}>
                        {stateName}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default Home;
