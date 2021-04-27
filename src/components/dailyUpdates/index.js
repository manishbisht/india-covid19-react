import React, { useState } from "react";
import axios from 'axios';

import Card from "@material-ui/core/Card";
import { CardHeader, Grid } from "@material-ui/core";

function dailyUpdates() {
    const [val, setVal] = useState();
    const apiURL = 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';

    const fetchData = async () => {
        const response = await axios.get(apiURL);
        setVal(response.data);
    }
  
    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <Card  variant="outlined">
                {val?.totalCases}
            </Card>
            <Card  variant="outlined">
                {val?.activeCases}
            </Card>
            <Card  variant="outlined">
                {val?.recovered}
            </Card>
            <Card  variant="outlined">
                {val?.deaths}
            </Card>
        </Grid>
    )
}




export default dailyUpdates;
