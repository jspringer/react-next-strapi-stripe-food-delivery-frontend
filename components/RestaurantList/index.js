/* components/RestaurantList/index.js */
import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import {
  Card,
  CardBody,
  CardImg
} from "reactstrap";
import { CardText, CardTitle } from "reactstrap";

const RestaurantList = (
  { data: { loading, error, restaurants }, search },
  req
) => {
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (restaurants && restaurants.length) {
    //searchQuery
    const searchQuery = restaurants.filter(query =>
      query.name.toLowerCase().includes(search)
    );
    if (searchQuery.length != 0) {
      return (
        <div className="text-center">
          <div className="h-100">
            {searchQuery.map(res => (
              <Card
                style={{ width: "250px", margin: "0 10px 20px 10px"}}
                className="h-100 main-height"
                key={res._id}
              >
                <Link
                      as={`/restaurants/${res._id}`}
                      href={`/restaurants?id=${res._id}`}
                ><a>
                  <CardImg
                    top={true}
                    style={{ height: 250 }}
                    src={res.image.url}
                  />                
                  <CardBody className="text-left">
                  <CardTitle style={{ fontSize: "1.3rem", color: "black" }}>{res.name}</CardTitle>
                  <CardText className="hide-block card-text" style={{ fontSize: "0.9rem"}}>{res.description}</CardText>
                </CardBody></a>
                </Link>
              </Card>
            ))}
          </div>

          <style jsx global>
            {`
              .card-columns {
                column-count: 3;
              }
              .main-height {
                min-height: 510px;
              }
              .card-text {
                color: black;
              }
            `}
          </style>
        </div>
      );
    } else {
      return <span style={{ fontSize: "1rem", fontWeight: "500" }}>No Restaurants Found</span>;
    }
  }
  return <span style={{ fontSize: "1rem", fontWeight: "500" }}>Waiting for backend to boot (demo)</span>;
};

const query = gql`
  {
    restaurants {
      _id
      name
      description
      image {
        url
      }
    }
  }
`;
RestaurantList.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(RestaurantList);