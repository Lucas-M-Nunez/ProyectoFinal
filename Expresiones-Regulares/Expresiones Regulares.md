# Expresiones Regulares

Las expresiones regulares, también conocidas como "regex" o "regexp", son patrones utilizados para buscar y manipular cadenas de texto de manera eficiente. En JavaScript, puedes crear expresiones regulares utilizando la clase **`RegExp`** o utilizando una sintaxis literal entre barras **`/`**.

- **Creación de una expresión regular:**

Puedes crear una expresión regular utilizando la clase **`RegExp`** o la sintaxis literal. Por ejemplo:

```jsx
// Usando la clase RegExp
var regex = new RegExp("patrón");

// Usando la sintaxis literal
var regexLiteral = /patrón/;
```

- **Buscar coincidencias:**

Puedes utilizar el método **`test()`** para verificar si una cadena coincide con la expresión regular:

```jsx
var regex = /patrón/;
var texto = "Este es un patrón de ejemplo";

var coincidencia = regex.test(texto);
console.log(coincidencia);  // Output: true
```

- **Coincidencias múltiples:**

Para encontrar todas las coincidencias en una cadena, puedes usar el método **`match()`**:

```jsx
var regex = /patrón/g;
var texto = "patrón uno, patrón dos, patrón tres";

var coincidencias = texto.match(regex);
console.log(coincidencias);  // Output: ["patrón", "patrón", "patrón"]
```

- **Reemplazar coincidencias:**

Puedes usar el método **`replace()`** para reemplazar partes de una cadena que coincidan con el patrón:

```jsx
var regex = /patrón/g;
var texto = "patrón uno, patrón dos, patrón tres";

var nuevoTexto = texto.replace(regex, "reemplazo");
console.log(nuevoTexto);  // Output: "reemplazo uno, reemplazo dos, reemplazo tres"
```

- Los caracteres como **`.`**, **`+`**, **`*`**, **`?`**, **`\`**, **`[]`**, **`()`**, entre otros, tienen significados especiales en las expresiones regulares. Debes escaparlos con una barra invertida **`\`** si deseas tratarlos como caracteres literales.
- Caracteres especiales
    
    ```jsx
    Coincidencias Basicas
    .       - Cualquier Caracter, excepto nueva linea
    \d      - Cualquier Digitos (0-9)
    \D      - No es un Digito (0-9)
    \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
    \W      - No es un Caracter de Palabra.
    \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
    \S      - No es un Espacio, Tab o nueva linea.
    
    Limites
    \b      - Limite de Palabra
    \B      - No es un Limite de Palabra
    ^       - Inicio de una cadena de texto
    $       - Final de una cadena de texto
    
    Cuantificadores:
    
    *      - 0 o Más
    +      - 1 o Más
    
    ?       - 0 o Uno
    {3}     - Numero Exacto
    {3,4}   - Rango de Numeros (Minimo, Maximo)
    
    Conjuntos de Caracteres
    []      - Caracteres dentro de los brackets
    [^ ]    - Caracteres que NO ESTAN dentro de los brackets
    
    Grupos
    ( )     - Grupo
    |       - Uno u otro
    ```
    
    Puedes utilizar cuantificadores como **`+`** (una o más repeticiones), **`*`** (cero o más repeticiones), **`?`** (cero o una repetición) y **`{n, m}`** (entre n y m repeticiones) para especificar la cantidad de veces que un patrón debe repetirse.