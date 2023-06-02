Feature: Multiplicacion de dos enteros

    Probamos la multiplicacion entre enteros

    Scenario: Multiplico dos enteros
        Given Tengo una calculadora
        When ingreso los numeros <numero1> y <numero2> para multiplicar
        Then el resultado debe ser <resultado>

        Examples:
            | numero1 | numero2 | resultado |
            | 3       | 4       | 12        |
            | 2       | 3       | 6         |
            | 1       | 8       | 8         |
            | 0       | 6       | 0         |
            | -1      | 3       | -3        |

