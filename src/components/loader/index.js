import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useCommonStyles } from "../../common/commonStyle";

const Loader = () => {
    const commonClasses = useCommonStyles();

    return (
        <div className={commonClasses.mainContainer}>
            <CircularProgress />
        </div>
    );
};

export default Loader;
