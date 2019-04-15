# Food Delivery Website

Food delivery website similar to Seamless/Grubhub/Deliveroo. State handled with Context. Content managed via Strapi and payments via Stripe.

[Demo](https://jsnspr-react-next-strapi-stripe-food-delivery.herokuapp.com)

This is not set up as a fully built out eccommerce site. There is no communication with the example restaurants used. 

## Notes on Repos

This project is split into 2 reposotories (this one and [backend](https://github.com/jspringer/react-next-strapi-stripe-food-delivery-backend)) to mimick the deployment process and reduce confusion. 

## Fixes/Features still being worked on: 

1. Add check when end user adds item to cart to make sure the restaurant the item is being added from matches the restaurant of the items already in the cart. If not, alert user and ask them if they wish to clear the cart and add the new item. 

2. A cart icon needs to be added to the front page menu so it can be accessed if the end user returns to the main page. 

3. The dishes and checkout pages need to be edited to be mobile friendly. 

4. Once an order is submitted, the page should clear of the order form an display success and a link to the front page. 

5. If the submission failed, the page needs to remain current and inform the end user of the failure and what the issue is. 

6. Once the order is submitted successfully, the cart needs to be cleared. 

## How to Use 

If testing the order process, use [fake CC information](https://stripe.com/docs/testing) (such as: 4242-4242-4242-4242, 04/24, 242).

...

## Set up Instructions

- Copy files
- Follow [Strapi installation instructions](https://strapi.io/documentation/3.x.x/getting-started/introduction.html).


If running locally, edit frontend/components/RestaurantList/index.js cand pages/restaurants.js, replacing `{res.image.url}` with ``{`localhost:1337${res.image.url}`}``. 

If you want to run it on a hosting platform such as Heroku, you 