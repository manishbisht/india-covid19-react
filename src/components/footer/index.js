import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    To contribute to this project check out{" "}
                    <a
                        href="https://github.com/manishbisht/india-covid19-react"
                        target="_blank"
                    >
                        this
                    </a>{" "}
                    link.
                </Typography>
            </Container>
        </footer>
    );
}
