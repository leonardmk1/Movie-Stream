import React from "react";
import {
  MDBContainer,
  // MDBListGroup,
  // MDBListGroupItem,
  // MDBRow,
  // MDBCol,
  MDBJumbotron,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import API from "../../lib/API";

API.Media.getAllOfType("show").then((response) => console.log(response));

export default function TopRatedTVShows() {
  return (
    <div>
      <MDBContainer className="mt-5">
        <MDBJumbotron className="shadow-lg">
          <h1 className="text-center">Top Rated TV Shows</h1>
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>All User Rating</th>
                <th>My Rating</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
            <tr>
                <td>1</td>
                <td>{}</td>
                <td>
                  {/* {[...Array(movie.rating)].map((e, i) => (
                    <FaStar
                      icon="star"
                      className="star"
                      size={20}
                      key={i}
                      color="ffe207"
                    />
                  ))} */}
                </td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBJumbotron>
      </MDBContainer>
    </div>
  );
}
