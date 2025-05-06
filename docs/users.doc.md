### USERS

## Register User

-   Method: POST
-   URL: /api/users/register
-   Body: {name, email, password}
-   Response: Un objeto con los datos del usuario registrado

## Login User

-   Method: POST
-   URL: /api/users/login
-   Body: {email, password}
-   Response: un objeto con el mensaje "login correcto" y un token que contiene el id y el rol del usuario logueado
