import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader, Grid, IconButton } from "@material-ui/core";
import { Call, Language, VerifiedUser } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#ffffff",
        height: "100%",
    },
    topTitle: {
        fontSize: 14,
    },
    title: {
        textTransform: "capitalize",
    },
    pos: {
        marginBottom: 12,
    },
    phoneNumberContainer: {
        "& > a": {
            color: "inherit",
            textDecoration: "none",
        },
    },
});

const CardComponent = ({ data }) => {
    const classes = useStyles();
    const {
        category,
        subCategory,
        city,
        description,
        address,
        name,
        sourceUrl,
        phone1,
        phone2,
        phone3,
        verified,
    } = data;

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {name[0]}
                        </Avatar>
                    }
                    action={
                        verified ? (
                            <IconButton aria-label="settings">
                                <VerifiedUser />
                            </IconButton>
                        ) : null
                    }
                    title={category || ""}
                    subheader={city || ""}
                />
                <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
                    {subCategory ? (
                        <Typography
                            className={classes.topTitle}
                            color="textSecondary"
                            gutterBottom
                        >
                            {subCategory}
                        </Typography>
                    ) : null}
                    {name ? (
                        <Typography
                            className={classes.title}
                            variant="h5"
                            component="h2"
                        >
                            {name}
                        </Typography>
                    ) : null}
                    {address ? (
                        <Typography variant="body2" component="p">
                            {address}
                        </Typography>
                    ) : null}
                    {description ? (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {description}
                        </Typography>
                    ) : null}
                    {phone1 || phone2 || phone3 ? (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.phoneNumberContainer}
                        >
                            {phone1 ? (
                                <a href={`tel:+91${phone1}`}>{phone1}</a>
                            ) : null}
                            {phone2 ? (
                                <a href={`tel:+91${phone2}`}>, {phone2}</a>
                            ) : null}
                            {phone3 ? (
                                <a href={`tel:+91${phone3}`}>, {phone3}</a>
                            ) : null}
                        </Typography>
                    ) : null}
                </CardContent>
                <CardActions disableSpacing>
                    {sourceUrl ? (
                        <a href={sourceUrl} target="_blank">
                            <IconButton aria-label="share">
                                <Language />
                            </IconButton>
                        </a>
                    ) : null}
                    {phone1 ? (
                        <a href={`tel:+91${phone1}`}>
                            <IconButton aria-label="share">
                                <Call />
                            </IconButton>
                        </a>
                    ) : null}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardComponent;
