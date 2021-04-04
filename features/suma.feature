Feature: Suma de dos enteros

Scenario: Cuando un usuario ingresa 2 numeros enteros
    Given Una calculadora
    When Se ingresan 6 y 4
    Then El resultado debe ser 10

Scenario Outline: Cuando un usuario ingresa 2 numeros enteros
    # Given Una calculadora
    When Se ingresan <num1> y <num2>
    Then El resultado debe ser <resultado>

    Examples:
        | num1 | num2 | resultado |
        |    1 |    2 |        3  |
        |   10 |  100 |      110  |
        | -100 |   50 |      -50  |