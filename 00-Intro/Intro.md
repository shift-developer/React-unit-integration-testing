[Volver al Readme principal](../README.md)

# Introducción al testing

## Características de las pruebas
1. Fáciles  de escribir
2. Fáciles de leer
3. Confiables
4. Rápidas 
5. Principalmente unitarias

### Unitarias
Enfocadas en únicas pequeñas piezas. Por ejemplo probar un solo componente.

### Integración 
Enfocada en varias piezas. Por ejemplo probar todo un grupo de componentes trabajando en conjunto.




## AAA (Arrange, Act, Accert)

### Arrange (Arreglar)

Establecemos el estado inicial. Conocido como el "sujeto a probar".
 - Inicializamos variables
 - Importaciones necesarias
 
 
### Act (Actuar)
 
Aplicamos acciones o estímulos al sujeto de pruebas.
- Llamar métodos 
- Simular clicks
- Realizar acciones sobre el paso anterior


### Assert (Afirmaciones)

Observar el comportamiento resultante.
- Son los resultados esperados
- Ejemplo: que algo cambie, que algo incremente o que no suceda nada


