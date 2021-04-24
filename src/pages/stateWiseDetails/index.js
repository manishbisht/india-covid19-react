import React, { useState } from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import AccordionComponent from "../../components/accordion";
import { FormGroup, FormControlLabel, Checkbox, Grid } from "@material-ui/core";
import uniqBy from "lodash.uniqby";
import filter from "lodash.filter";
// import { Autocomplete } from "@material-ui/lab";

const StateWiseDetails = ({ db }) => {
    console.log(db);
    const stateData = db.Rajasthan;
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filterChange = (event) => {
        const filterName = event.target.name;
        let newFilters = [...selectedFilters];
        const index = newFilters.indexOf(filterName);
        if (index > -1) {
            newFilters.splice(index, 1);
        } else {
            newFilters = [...newFilters, filterName];
        }
        setSelectedFilters(newFilters);
    };

    const renderFilters = () => {
        const uniqueOptions = uniqBy(stateData, "category");

        // return (
        //     <Autocomplete
        //         multiple
        //         id="tags-outlined"
        //         options={top100Films}
        //         getOptionLabel={(option) => option.title}
        //         defaultValue={[top100Films[13]]}
        //         filterSelectedOptions
        //         renderInput={(params) => (
        //             <TextField
        //                 {...params}
        //                 variant="outlined"
        //                 label="filterSelectedOptions"
        //                 placeholder="Favorites"
        //             />
        //         )}
        //     />
        // );

        return (
            <FormGroup row>
                {uniqueOptions.map((option, index) => (
                    <FormControlLabel
                        key={`filter-${index}`}
                        control={
                            <Checkbox
                                onChange={filterChange}
                                checked={selectedFilters.includes(
                                    option.category
                                )}
                                name={option.category}
                                color="primary"
                            />
                        }
                        label={option.category}
                    />
                ))}
            </FormGroup>
        );
    };

    const renderList = () => (
        <Grid container spacing={3}>
            {filter(stateData, (data) =>
                selectedFilters.includes(data.category)
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

StateWiseDetails.propTypes = {
    db: PropTypes.shape({
        sheet1: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default withGoogleSheets("Rajasthan")(StateWiseDetails);
