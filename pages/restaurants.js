/* /pages/restaurants.js */

import gql from "graphql-tag";
import { withRouter } from "next/router";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { withContext } from "../components/Context/AppProvider";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import Cart from "../components/Cart/Cart";
import defaultPage from "../hocs/defaultPage";

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    this.props.context.addItem(item);
  }
  render() {
    const {
      data: { loading, error, restaurant },
      router,
      context,
      isAuthenticated
    } = this.props;
    if (error) return "Error Loading Dishes";

    if (restaurant) {
      return (
        <>
          <div>
            <span style={{ fontSize: "1.3rem", fontFamily: "'Gothic A1', Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "500" }}> - {restaurant.name}</span>
          </div>
          <Row style={{ width: "100%", textAlign: "center", paddingTop: "2px", paddingLeft: "20px" }}>
            <Col xs="9" style={{ padding: 0 }}>
              <div style={{ display: "inline-block" }} className="h-100">
                {restaurant.dishes.map(res => (
                  <Card
                    style={{ width: "250px", margin: "0 10px 30px 10px", height: "520px" }}
                    key={res._id}
                  >
                    <CardImg
                      top={true}
                      style={{ height: 250 }}
                      src={res.image.url}
                    />
                    <CardBody>
                      <CardTitle className="card-title" style={{ textAlign: "left", fontSize: "1.3rem", color: "black", fontFamily: "'Gothic A1', Helvetica, Arial", fontWeight: "900" }}>{res.name}</CardTitle>
                      <CardText className="card-description" style={{ textAlign: "left", fontSize: "0.9rem", color: "black", fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'", fontWeight: "500" }}>{res.description}</CardText>
                    </CardBody>
                    <div className="card-footer cardfooter">
                      <div style={{ width: "100%", alignContent: "center", alignItems: "center" }}>
                        <Button
                          onClick={this.addItem.bind(this, res)}
                          outline
                          color="primary"
                          style={{ width: "100%", textAlign: "center" }}
                        >
                          + Add To Cart (${res.price})
                        </Button>
                      </div>
                      <style jsx>
                        {`
                          a {
                            color: white;
                          }
                          a:link {
                            text-decoration: none;
                            color: white;
                          }
                          .container-fluid {
                            margin-bottom: 30px;
                          }
                          .btn-outline-primary {
                            color: #007bff !important;
                          }
                          a:hover {
                            color: white !important;
                          }
                          .cardfooter {
                            position:absolute;
                            bottom:0;
                            width:100%;
                          }
                        `}
                      </style>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
            <Col xs="3" style={{ padding: 0 }}>
              <div>
                <Cart isAuthenticated={isAuthenticated} />
              </div>
            </Col>
          </Row>
        </>
      );
    }
    return <h1>Loading</h1>;
  }
}

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      _id
      name
      dishes {
        _id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

export default compose(
  withRouter,
  defaultPage,
  withContext,
  graphql(GET_RESTAURANT_DISHES, {
    options: props => {
      return {
        variables: {
          id: props.router.query.id
        }
      };
    },
    props: ({ data }) => ({ data })
  })
)(Restaurants);