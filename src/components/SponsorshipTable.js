import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: "white",
    minWidth: "16rem",
    fontFamily: "Neue Plak Extended",
    fontSize: "1.4rem",
  },
  body: {
    fontSize: 14,
    color: "white",
    fontFamily: "NB International Pro",
    padding: "3rem",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
  },
}))(TableRow);

function createData(name, friends, supporters, partners, collab, premier) {
  return { name, friends, supporters, partners, collab, premier };
}

const marketing_rows = [
  createData(
    <p>
      Some or all:
      <br />
      + Speaker Spotlights <br />
      + General Post <br />
      + Email blast <br />+ Instructional / Teaching Assistants help market
      through classrooms <br />
      + Collaboration with other universities <br />
      <br />
      Number of posts on social media platforms (Facebook, Instagram, Linkedin)
    </p>,
    true,
    true,
    true,
    true,
    true
  ),
  createData(
    <p>
      Company Logo on our Digital Platforms (Design Co website, Facebook,
      Instagram, LinkedIn, Slide Decks, Newsletters)
    </p>,
    true,
    true,
    true,
    true,
    true
  ),
];

const recruitment_rows = [
  createData(
    <p>Post internship & job opportunities to our students</p>,
    true,
    true,
    true,
    true,
    true
  ),
  createData(
    <p>Distribute company promotional material</p>,
    false,
    true,
    true,
    true,
    true
  ),
  createData(
    <p>Digital Access to Student Resumes and Portfolios</p>,
    false,
    true,
    true,
    true,
    true
  ),
];

const talks_rows = [
  createData(
    <p>Host Recruiting Events, Talks, and Workshops</p>,
    false,
    true,
    true,
    true,
    true
  ),
  createData(
    <p>Design Frontiers (Company Sponsored Design-a-thon)</p>,
    false,
    false,
    false,
    false,
    true
  ),
  createData(
    <p>Diversity, Equity, and Inclusion sponsorship / events</p>,
    false,
    false,
    false,
    true,
    true
  ),
  createData(
    <p>Personalized post-event social media content articles (Medium)</p>,
    false,
    false,
    false,
    false,
    true
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TablePage() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center" className="grey_table">
              <p>Friends of Design Co</p>
              <br />
              {/* <p className="numbers">
                <span className="strike">$500 - $1,000</span>
                <br />
                $250 - $500
              </p> */}
            </StyledTableCell>
            <StyledTableCell align="center">
              <p>Supporter</p>
              <br />
              {/* <p className="numbers">
                <span className="strike">$1,500 - $3,000</span>
                <br />
                $1,000 - $2,000
              </p> */}
            </StyledTableCell>
            <StyledTableCell align="center" className="grey_table">
              <p>Partner</p>
              <br />
              {/* <p className="numbers">
                <span className="strike">$3,500 - $5,000</span>
                <br />
                $2,500 - $3,500
              </p> */}
            </StyledTableCell>{" "}
            <StyledTableCell align="center">
              <p>Collaborator</p>
              <br />
              {/* <p className="numbers">
                <span className="strike">$3,500 - $7,000</span>
                <br />
                $4,000 - $5,000
              </p> */}
            </StyledTableCell>{" "}
            <StyledTableCell align="center" className="grey_table">
              <p>Premier Collaborator</p>
              <br />
              {/* <p className="numbers">
                <span className="strike">$7,500+</span>
                <br />
                $5,500+
              </p> */}
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            <StyledTableCell class="styledHeader">
              <h4>Marketing Campaigns & Brand Presence</h4>
            </StyledTableCell>
          </StyledTableRow>
          {marketing_rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {row.friends && (
                  <img
                    src={require("../images/partnership/yellow.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.supporters && (
                  <img
                    src={require("../images/partnership/purple.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {" "}
                {row.partners && (
                  <img
                    src={require("../images/partnership/blue.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.collab && (
                  <img
                    src={require("../images/partnership/pink.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {" "}
                {row.premier && (
                  <img
                    src={require("../images/partnership/green.svg").default}
                  ></img>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell class="styledHeader">
              <h4>Recruitment & Promotions</h4>
            </StyledTableCell>
          </StyledTableRow>
          {recruitment_rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {row.friends && (
                  <img
                    src={require("../images/partnership/yellow.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.supporters && (
                  <img
                    src={require("../images/partnership/purple.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {" "}
                {row.partners && (
                  <img
                    src={require("../images/partnership/blue.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.collab && (
                  <img
                    src={require("../images/partnership/pink.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {" "}
                {row.premier && (
                  <img
                    src={require("../images/partnership/green.svg").default}
                  ></img>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}

          <StyledTableRow>
            <StyledTableCell class="styledHeader">
              <h4>Events, Talks, and Workshops</h4>
            </StyledTableCell>
          </StyledTableRow>
          {talks_rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {row.friends && (
                  <img
                    src={require("../images/partnership/yellow.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.supporters && (
                  <img
                    src={require("../images/partnership/purple.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {" "}
                {row.partners && (
                  <img
                    src={require("../images/partnership/blue.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                {row.collab && (
                  <img
                    src={require("../images/partnership/pink.svg").default}
                  ></img>
                )}
              </StyledTableCell>
              <StyledTableCell align="center" className="grey_table">
                {" "}
                {row.premier && (
                  <img
                    src={require("../images/partnership/green.svg").default}
                  ></img>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
