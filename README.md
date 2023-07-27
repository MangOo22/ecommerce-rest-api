# Introduction

  Welcome to our ecommerce API! This document will guide you through the process of integrating with our API, including information on available endpoints, request and response formats, and authentication.

# Ecommerce API

  This API provides a simple and easy-to-use interface for creating, managing, and querying data about an online store. It includes endpoints for creating and managing users, categories, subcategories, brands, products, reviews, wishlists, addresses, coupons, carts, and orders.

## Getting Started

  To get started with the API, you will need to first create an account. Once you have created an account, you will be able to generate an API key. This key will be used to authenticate all requests to the API.

## Endpoints

  The API is divided into several endpoints, each of which provides a different set of operations. The following table lists the available endpoints:

| Endpoint | Description |
|---|---|
| `/users` | Create, read, update, and delete users |
| `/categories` | Create, read, update, and delete categories |
| `/subcategories` | Create, read, update, and delete subcategories |
| `/brands` | Create, read, update, and delete brands |
| `/products` | Create, read, update, and delete products |
| `/reviews` | Create, read, update, and delete reviews |
| `/wishlists` | Create, read, update, and delete wishlists |
| `/addresses` | Create, read, update, and delete addresses |
| `/coupons` | Create, read, update, and delete coupons |
| `/carts` | Create, read, update, and delete carts |
| `/orders` | Create, read, update, and delete orders |

## Authentication

  All requests to the API must be authenticated using an API key. The API key is a unique string that is generated when you create an account. To authenticate a request, you must include the API key in the `Authorization` header of the request. The following example shows how to authenticate a request:
  Authorization: Bearer <your_api_key>

## Errors

  If an error occurs while processing a request, the API will return an error response. The error response will include an error code and a message describing the error. The following table lists the possible error codes:

| Error Code | Description |
|---|---|
| `400` | Bad request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not found |
| `500` | Internal server error |

## Documentation
  The document appears to be a list of endpoints for an eCommerce API, along with a brief description of each endpoint and the HTTP methods that can be used to interact with it.
  Here is a summary of the endpoints listed:

Endpoints listed:
-----------------

### Users
  - access: Private (Admin-Manager): 
    * `GET /users`: Retrieve a list of all users.
    * `GET /users/{id}`: Retrieve a single user by ID.
    * `POST /users`: Create a new user.
    * `PUT /users/{id}`: Update a user.
    * `DELETE /users/{id}`: Delete a user.

### Categories
  - access: public
    * `GET /categories`: Retrieve a list of all categories.
    * `GET /categories/{id}`: Retrieve a single category by ID.
  - access: Private (Admin-Manager):
    * `POST /categories`: Create a new category.
    * `PUT /categories/{id}`: Update a category.
    * `DELETE /categories/{id}`: Delete a category.

### Subcategories
  - access: public
    * `GET /subcategories`: Retrieve a list of all subcategories.
    * `GET /subcategories/{id}`: Retrieve a single subcategory by ID.
  - access: Private (Admin-Manager):
    * `POST /subcategories`: Create a new subcategory.
    * `PUT /subcategories/{id}`: Update a subcategory.
    * `DELETE /subcategories/{id}`: Delete a subcategory.

### Brands
  - access: public
    * `GET /brands`: Retrieve a list of all brands.
    * `GET /brands/{id}`: Retrieve a single brand by ID.
  - access: Private (Admin-Manager):
    * `POST /brands`: Create a new brand.
    * `PUT /brands/{id}`: Update a brand.
    * `DELETE /brands/{id}`: Delete a brand.

### Products
  - access: public
    * `GET /products`: Retrieve a list of all products.
    * `GET /products/{id}`: Retrieve a single product by ID.
  - access: Private (Admin-Manager): 
    * `POST /products`: Create a new product.
    * `PUT /products/{id}`: Update a product.
    * `DELETE /products/{id}`: Delete a product.

### Auth
  - access: public
    * `POST /auth/login`: Login a user.
    * `POST /auth/register`: Register a new user.
    * `POST /auth/forgotPassword`: User forgot password.
    * `POST /auth/verifyResetCode`: Verify with ResetCode.
    * `POST /auth/resetPassword`: User reset his password.
    * `POST /auth/logout`: Logout a user.

### Reviews
  - access: public
    * `GET /reviews`: Retrieve a list of all reviews.
    * `GET /reviews/{id}`: Retrieve a single review by ID.
  - access: Private (Admin-Manager): 
    * `POST /reviews`: Create a new review.
    * `PUT /reviews/{id}`: Update a review.
    * `DELETE /reviews/{id}`: Delete a review.

### Wishlist
  - access: Protected
    * `GET /wishlist`: Retrieve a list of all products in the user's wishlist.
    * `POST /wishlist`: Add a product to the user's wishlist.
    * `DELETE /wishlist/{id}`: Remove a product from the user's wishlist.

### Addresses
  - access: Protected
    * `GET /addresses`: Retrieve a list of all addresses.
    * `POST /addresses`: Create a new address.
    * `DELETE /addresses/{id}`: Delete an address.

### Coupons
  - access: Private (Admin-Manager):
    * `GET /coupons`: Retrieve a list of all coupons.
    * `GET /coupons/{id}`: Retrieve a single coupon by ID.
    * `POST /coupons`: Create a new coupon.
    * `PUT /coupons/{id}`: Update a coupon.
    * `DELETE /coupons/{id}`: Delete a coupon.

### Cart
  - access: Private (User):
    * `GET /cart`: Retrieve the user's cart.
    * `POST /cart`: Add a product to the user's cart.
    * `PUT /cart/{id}`: Update the quantity of a product in the user's cart.
    * `PUT /cart/applayCoupon`: Apply coupon on a product of the user's cart.
    * `DELETE /cart/{id}`: Remove a product from the user's cart.
    * `DELETE /cart`: Clear all products from the user's cart.

### Orders
  - access: Private (User, Admin-Manager):
    * `GET /orders`: Retrieve a list of all orders.
    * `GET /orders/{id}`: Retrieve a single order by ID.
  - access: Private (User):
    * `GET /api/v1/orders/checkout-session/cartId`: Get checkout session from stripe and send it as response.
    * `POST /webhook-checkout`: This webhook will run when stripe payment success paid.
  - access: Private (Admin-Manager):
    * `PUT /api/v1/orders/:id/pay`: pdate order paid status to paid.
    * `PUT /api/v1/orders/:id/deliver`: Update order delivered status.


# Request Format

  All requests must be made using HTTPS and must include an authentication token. The token can be obtained by contacting our support team.
  
  All requests must be formatted in JSON.

# Response Format

  All responses will be returned in JSON format.

# Authentication

  To authenticate, please provide your authentication token in the Authorization header of your request.

# Error Handling

  If an error occurs, we will return a response with a 400 Bad Request status code and a JSON body containing the error message.

# Pagination

  Some endpoints may return a large amount of data. To paginate the data, we use the Limit and Offset query parameters.

  Limit: The number of items to return in the response.
  Offset: The number of items to skip before returning the response.
For example, to retrieve the first 10 products, you would set Limit=10 and Offset=0. To retrieve the next 10 products, you would set Limit=10 and Offset=10.
