import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: '#ffffff',
    display:"inline-flex"
  },
  bullet: {
    display:"flex",
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  );
}



//     <div className={classes.root}>
//       <Accordion defaultExpanded>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1c-content"
//           id="panel1c-header"
//         >
//           <div className={classes.column}>
//             <Typography className={classes.heading}> </Typography>
//           </div>
//           <div className={classes.column}>
//             <Typography className={classes.heading}>
//               {" "}
//               
//             </Typography>
//           </div>
//           <div className={classes.column}>
//             <Typography className={classes.heading}>
//               {" "}
//              
//             </Typography>
//           </div>
//           <div className={classes.column}>
//             <Typography className={classes.secondaryHeading}>
//               {data.name}
//             </Typography>
//           </div>
//           <div className={classes.column}>
//             <Typography className={classes.secondaryHeading}>
//               {data.description}
//             </Typography>
//           </div>
//           <div className={classes.column}>
//             <Typography className={classes.secondaryHeading}>
//               {data.address}
//             </Typography>
//           </div>
//         </AccordionSummary>

//         <Typography>
//           
//         </Typography>

//         <AccordionActions>
//           <Button size="small">Close</Button>
//         </AccordionActions>
//       </Accordion>
//     </div>
//   );
// }
