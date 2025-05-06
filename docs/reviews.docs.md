### REVIEWS

## Recuperar todas las reviews

-   Method: GET
-   URL: /api/reviews
-   Headers: Authorization -> TOKEN
-   Body: XXXXX

-   Response: Array con todas las reviews

## Crear una review

-   Method: POST
-   URL: /api/reviews
-   Headers: Authorization -> TOKEN
-   Body: {user_id, message, rating}

-   Response: Un objeto con los datos de la review creada
