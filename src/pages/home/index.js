import React from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";
import AccordionComponent from "../../components/accordion";

const Home = ({ db }) => {
  console.log(db);
  return (
    <div>
      {db.Maharashtra.map((data) => (
        <AccordionComponent data={data} />
      ))}
      var x = JSON.stringify(db.Maharashtra); console.log(x);
    </div>
  );
};

Home.propTypes = {
  db: PropTypes.shape({
    sheet1: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("Maharashtra")(Home);
