import React, { useState } from "react";
import { withGoogleSheets } from "react-db-google-sheets";
import AccordionComponent from "../../components/accordion";
import { Grid, TextField } from "@material-ui/core";
import uniqBy from "lodash.uniqby";
import filter from "lodash.filter";
import { STATES_LIST } from "../../common/constants";
import { Autocomplete } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import { capitalCase } from "../../common/utils";

const StateWiseDetails = ({ db }) => {
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

    const renderList = () => (
        <Grid container spacing={3}>
            {filter(stateData, (data) =>
                selectedFilters.length
                    ? selectedFilters.some(
                          (filter) => filter.category === data.category
                      )
                    : true
            ).map((data, index) => (
                <AccordionComponent key={`filter-${index}`} data={data} />
            ))}
        </Grid>
    );

    return (
        <div>
            {renderFilters()}
            {renderList()}
        </div>
    );
};

export default withGoogleSheets(STATES_LIST)(StateWiseDetails);
