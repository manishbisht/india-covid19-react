import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { GitHub, HelpOutline, ArrowBackIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar>
                {location.pathname !== "/" ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => history.push("/")}
                    >
                        <ArrowBackIos />
                    </IconButton>
                ) : null}
                <Typography variant="h6" onClick={() => history.push("/")}>
                    COVID-19 Information
                </Typography>
                <Typography variant="h6" className={classes.title}></Typography>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() =>
                        window.open(
                            "https://github.com/manishbisht/india-covid19-react/issues/new",
                            "_blank"
                        )
                    }
                    color="inherit"
                >
                    <HelpOutline />
                </IconButton>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() =>
                        window.open(
                            "https://github.com/manishbisht/india-covid19-react",
                            "_blank"
                        )
                    }
                    color="inherit"
                >
                    <GitHub />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
