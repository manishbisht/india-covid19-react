import { makeStyles } from "@material-ui/core/styles";

export const useCommonStyles = makeStyles(() => ({
    mainContainer: {
        minHeight: "100vh",
        paddingTop: 64,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));
