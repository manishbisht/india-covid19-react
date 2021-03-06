import React from "react";
import { useCommonStyles } from "../../common/commonStyle";

const ErrorComponent = () => {
    const commonClasses = useCommonStyles();

    return (
        <div className={commonClasses.mainContainer}>
            This page is not available.
        </div>
    );
};

export default ErrorComponent;
