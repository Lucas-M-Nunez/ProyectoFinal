# Metodos 02 Exercise

Con este ejercicio está planteado para el uso de metodos de array sobre datos dados (array de objetos). implementando lógica, parte de HTML y manipulación del DOM

Este practica esta divida en dos partes, se hará visible sobre el archivo `index.html` .

sobre la carpeta ‘Metodos 02’ se encontran los siguientes archivos y carpetas

- src (carpeta)
    - img (carpeta que contiene las imagenes de las peliculas)
    - alumnos.js (archivo js, donde tendras que los ejercicios)
    - peliculas.js (archivo js, donde tendras que los ejercicios)
    - styles.css (no es necesario de modificacion)
- index.html (no es necesario de modificacion)
- [README.md](http://README.md)

## Alumnos ‘Escuela de Programacion’

Observando la primera seccion del archivo `html` saldra como titulo ‘Alumnos Escuela de Programacion’. dentro de el contiene un tabla vacia (la cual se llenará según lo pedido), y 5 botones. cada uno de ellos debe devolver la tabla según lo que corresponda.

- **Datos Alumnos:** Deberia devolver la tabla de alumnos con los datos personales de cada alumno (nombre, apellido, dni).

- **********************Promedios:** Deberia devolver la tabla de alumnos con el promedio de cada alumno, este consta en 3 notas (examen1, examen2, examen3).

- **************************Asistencias:** Deberia devolver la tabla de alumnos con la cantidad de asistencia de los alumnos sobre el total de 24 clases. `(ej: alumno asiste 13 clases. deberia devolver en la columna 13/24)`. Además deberás crear una **columna*** con el porcentaje de asistencias
    
    
    ***la columna se deberá eliminar si se selecciona otro boton**
    

- **********************Aprobados:** Deberia devolver la tabla de alumnos en ella solo aquellos que tengan aprobado el cursado, en base a las siguientes condiciones:
    - Un promedio ≥ 70 y un porcentaje de asistencia ≥ 70
    
- ********Reprobados:** Deberia devolver la tabla de alumnos con aquellos que no aprobaron el cursado.

Este ejercicio deberás completarlo dentro del archico `alumnos.js` . Dentro de este archivo se encontraran las funciones de cada boton. las cuales tienes que completar.

## Peliculas

Similar al ejercicio anterior, con la diferencia que acá se manipularán datos de peliculas (array de objetos). Este tambien cuenta con 6 botones. cada uno de ellos debe devolver la portada de las peliculas según lo que corresponda.

- ************Todos:** Debe devolver todas las portadas (img) de las peliculas que hay.

- **Estrenos:** Debe devolver las portadas (img) solo de las peliculas que esten en estreno `estreno: true`

- **Acción**: Debe devolver solo aquellas peliculas que contengan como genero ‘Acción’.

- **Drama**: Debe devolver solo aquellas peliculas que contengan como genero ‘Drama’.

- **Crimen**: debe devolver solo aquellas peliculas que contengan como genero ‘Crimen’.

- **Otros**: debe devolver aquellas peliculas que **NO** estén dentro de los generos anteriores.