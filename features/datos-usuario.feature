Feature: Mostrar confirmación de registro
    Como usuario de la plataforma, ingresa un nombre y ci
    y a partir de esto se genera un codigo como resultado
    de la inscripcion

    Scenario: Se registran datos válidos de nombre y ci
        Given Usuario ingresa a la plataforma
        When Ingresa nombre <nombre>
        And Ingresa CI <ci>
        And Envia los datos
        Then Debe recibir el codigo <resultado>

        Examples:
            | nombre | ci   | resultado  |
            | Luis   | 1234 | Luis-1234  |
            | Laura  | 0012 | Laura-0012 |
            | Pepe   | 2323 | Pepe-2323  |
