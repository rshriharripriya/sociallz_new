/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/nextjs-material-dashboard/components/RightbarStyle.js";

export default function Rightbar(props) {
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
           <GridContainer>
        <GridItem xs={2} sm={12} >
          <CustomTabs
            // title="Tasks:"
            headerColor="transparent"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  // <Card>

              <Table
                tableHeaderColor="dark"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />

          // </Card>
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                                   // <Card>

              <Table
                tableHeaderColor="dark"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />

          // </Card>
                ),
              },

            ]}
          />
        </GridItem>
        {/*<GridItem xs={12} sm={12} md={6}>*/}
        {/*  <Card>*/}
        {/*    <CardHeader color="warning">*/}
        {/*      <h4 className={classes.cardTitleWhite}>Employees Stats</h4>*/}
        {/*      <p className={classes.cardCategoryWhite}>*/}
        {/*        New employees on 15th September, 2016*/}
        {/*      </p>*/}
        {/*    </CardHeader>*/}
        {/*    <CardBody>*/}
        {/*      <Table*/}
        {/*        tableHeaderColor="warning"*/}
        {/*        tableHead={["ID", "Name", "Salary", "Country"]}*/}
        {/*        tableData={[*/}
        {/*          ["1", "Dakota Rice", "$36,738", "Niger"],*/}
        {/*          ["2", "Minerva Hooper", "$23,789", "Curaçao"],*/}
        {/*          ["3", "Sage Rodriguez", "$56,142", "Netherlands"],*/}
        {/*          ["4", "Philip Chaney", "$38,735", "Korea, South"],*/}
        {/*        ]}*/}
        {/*      />*/}
        {/*    </CardBody>*/}
        {/*  </Card>*/}
        {/*</GridItem>*/}
      </GridContainer>
    </div>
  );
}

Rightbar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
     "red",
  ]),

};
