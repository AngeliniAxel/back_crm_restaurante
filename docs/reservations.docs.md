### RESERVAS

## Recuperar todas las Reservas --- ok

- Method: GET
- URL: /api/tables
- Headers: Authorization -> TOKEN
- Body: XXXXX

- Response: Array con todas las mesas

## Crear una reserva --- ok

- Method: POST
- URL: /api/reservas
- Headers: Authorization -> TOKEN
- Body: {id, userId, tableId, reservationDay, reservationTime, specialRequest, status}

- Response: Un objeto con los datos de la reserva creada

## Editar una reserva (dejar para mas adelante)

- Method: PUT
- URL: /api/reserva/<reservaId>
- Headers: Authorization -> TOKEN
- Body: {id, userId, tableId, reservationDay, reservationTime, specialRequest, status}

- Response: Un objeto con los datos de la reserva editada

## Recuperar reserva por ID --- ok

- Method: GET
- URL: /api/reserva/<reservaId>
- Headers: Authorization -> TOKEN

Response: Un objeto con los datos de la reserva con el ID

## Eliminar una reserva ---ok(fatla agregar Authorization -> TOKEN)

- Method: DELETE
- URL: /api/reserva/<reservaId>
- Headers: Authorization -> TOKEN
- Body: XXX

- Response: Un objeto con los datos de la reserva eliminada
