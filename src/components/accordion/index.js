import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#ffffff",
    },
    bullet: {
        display: "flex",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 10,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({ data }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        🌆 {data.city}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {data.category}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {data.subCategory}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <div> 📞 {data.phone1}</div>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
