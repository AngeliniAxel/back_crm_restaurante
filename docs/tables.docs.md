### TABLE

## Recuperar todas las mesas

-   Method: GET
-   URL: /api/tables
-   Headers: Authorization -> TOKEN
-   Body: XXXXX

-   Response: Array con todas las mesas

## Crear una mesa

-   Method: POST
-   URL: /api/tables
-   Headers: Authorization -> TOKEN
-   Body: {id, capacity}

-   Response: Un objeto con los datos de la mesa creada

## Editar una mesa

-   Method: PUT
-   URL: /api/tables/<tableId>
-   Headers: Authorization -> TOKEN
-   Body: {capacity}

-   Response: Un objeto con los datos de la mesa eliminada

## Recuperar mesa por ID

-   Method: GET
-   URL: /api/tables/<tableId>
-   Headers: Authorization -> TOKEN

Response: Un objeto con los datos de la mesa con el ID

## Eliminar una mesa

-   Method: DELETE
-   URL: /api/tables/<tableId>
-   Headers: Authorization -> TOKEN
-   Body: XXX

-   Response: Un objeto con los datos de la mesa eliminada
