import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { STATES_LIST } from "../../common/constants";
import { useHistory } from "react-router-dom";
import { useCommonStyles } from "../../common/commonStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    selectContainer: {
        width: "80vw !important",
        maxWidth: "500px !important",
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
            <FormControl>
                <InputLabel id="demo-simple-select-label">
                    Select State
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    classes={{
                        root: classes.selectContainer,
                    }}
                    onChange={handleStateChange}
                >
                    {STATES_LIST.map((stateName) => (
                        <MenuItem value={stateName.toLowerCase()}>
                            {stateName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Home;
