import { makeStyles } from "@material-ui/core/styles";

export const useCommonStyles = makeStyles(() => ({
    mainContainer: {
        minHeight: "calc(100vh - 112px)",
        margin: "56px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));
