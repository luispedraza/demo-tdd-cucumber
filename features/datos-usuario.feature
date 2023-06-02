Feature: Mostrar confirmación de registro
    Como usuario de la plataforma, ingresa un nombre y ci
    y a partir de esto se genera un codigo como resultado
    de la inscripcion

    Scenario: Se registran datos válidos de nombre y ci
        Given Usuario ingresa a la plataforma
        When Ingresa nombre "Luis"
        And Ingresa CI 1234
        And Envia los datos
        Then Debe recibir el codigo "Luis-1234"


