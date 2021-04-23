import React, { useState } from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import AccordionComponent from "../../components/accordion";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import uniqBy from "lodash.uniqby";
import filter from "lodash.filter";

const Home = ({ db }) => {console.log(db)
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

    return (
        <div>
            {renderFilters()}
            {filter(stateData, (data) =>
                selectedFilters.includes(data.category)
            ).map((data, index) => (
                <AccordionComponent key={`filter-${index}`} data={data} />
            ))}
        </div>
    );
};

Home.propTypes = {
    db: PropTypes.shape({
        sheet1: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default withGoogleSheets("Rajasthan")(Home);
