## Requirements:

Generate a unique shortened URL for a given long URL.
Redirect users from the shortened URL to the original long URL.
Handle millions of URL shortening requests and redirects per day.
Maintain high availability and fault tolerance.

## API Endpoints:

Create two primary API endpoints:
POST api/v1/url/shorten: Accepts a long URL as a request parameter and returns the shortened URL.
GET api/v1/url/:shortURL: Accepts the shortened URL as a path parameter and redirects to the original long URL with a 301 redirect. https://blog.bitsrc.io/must-read-and-lets-read-url-shortener-system-82c06424e770

## Encoding:

Use base62 encoding (a-z, A-Z, 0-9) to generate unique shortened URLs. For example, you can use a counter to generate unique IDs for each URL and then convert the ID to a base62 string. This will avoid collisions and help create short URLs. https://www.enjoyalgorithms.com/blog/design-a-url-shortening-service-like-tiny-url#Encoding

## Database:

Use a NoSQL database to store the mapping between the long URLs and the shortened URLs. This choice helps in easier scaling as the system grows.

## Caching:

Since there are more reads (redirects) than writes (shortening requests), use a cache to store the <shortURL, longURL> mapping. This will improve performance by reducing the need to query the database for each redirect request. blog.bitsrc.io

## Load Balancer:

Use a load balancer to distribute the load evenly among backend servers. This helps in scaling the system horizontally and maintaining high availability. enjoyalgorithms.com
