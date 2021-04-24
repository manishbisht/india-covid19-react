import React, { useState } from "react";
import { withGoogleSheets } from "react-db-google-sheets";
import Card from "../../components/card";
import { Grid, TextField } from "@material-ui/core";
import uniqBy from "lodash.uniqby";
import filter from "lodash.filter";
import { STATES_LIST } from "../../common/constants";
import { Autocomplete } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import { capitalCase } from "../../common/utils";
import ErrorComponent from "../../components/error";
import { useCommonStyles } from "../../common/commonStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    selectContainer: {
        margin: "30px",
        width: "95vw !important",
    },
}));

const StateWiseDetails = ({ db }) => {
    const commonClasses = useCommonStyles();
    const classes = useStyles();
    const { stateName = "" } = useParams();
    const [stateData, setStateData] = useState(
        db[capitalCase(stateName)] || []
    );
    const uniqueOptions = uniqBy(stateData, "category");
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleCategoryChange = (event, values) => {
        setSelectedFilters(values);
    };

    const renderFilters = () => {
        return (
            <Autocomplete
                classes={{
                    root: classes.selectContainer,
                }}
                multiple
                options={uniqueOptions}
                getOptionLabel={(option) => option.category}
                defaultValue={[]}
                filterSelectedOptions
                onChange={handleCategoryChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Select Filters"
                        placeholder="Select Filters"
                    />
                )}
            />
        );
    };

    const filteredList = filter(stateData, (data) =>
        selectedFilters.length
            ? selectedFilters.some(
                  (filter) => filter.category === data.category
              )
            : true
    );

    const renderList = () => (
        <Grid container spacing={2} style={{ padding: 15 }}>
            {filteredList.map((data, index) =>
                data.name ? <Card key={`filter-${index}`} data={data} /> : null
            )}
        </Grid>
    );

    if (filteredList.length > 1) {
        return (
            <div className={commonClasses.mainContainer}>
                {renderFilters()}
                {renderList()}
            </div>
        );
    }

    return <ErrorComponent />;
};

export default withGoogleSheets(STATES_LIST)(StateWiseDetails);
