# Evaluación Final Módulo 3 Eva Marco Domínguez.

## ¿En qué consiste?

En este ejercicio se nos pide hacer una llamada a una API de una serie y obtener una lista de personajes de la misma. Y plasmar esta información en la pantalla. 

Debemos realizar este proyecto usando el framework de React.

## Pasos iniciales

- Crear el repositorio
- Añadir react app
- Instalar dependencias para poder usar sass, prop types y el router
- Limpiar los archivos. 

## Siguientes Fases
### Fase 1 Pintar la lista

1. Crear un estado con la lista vacia.
2. Hacer la función fetch y el componenDidMount para llamarla.
3. Creamos un componente para sacarla.
4. En el archivo creado exportamos la función y lo importamos en app.
5. Hacemos un map con los elementos del estado.
7. Creamos componentes  de CharacterList y CharacterCard y dividimos nuestro map en esos elementos.
8. Le pasamos los props con destructuring a cada uno de los componentes.
9. Activamos las prop-types.

### Fase 2 Filter

1. Creamos un input en App.
2. Creamos una función para conseguir el valor del input.
3. Creamos en el estado una clave query con cadena vacia.
4. En la función de conseguir el valor, guardamos ese valor en el query del state.
5. Lo pasamos por pros hasta CharacterList.
6. Creamos un filter antes del map que ya teníamos. 
7. Para que no tenga problema con las mayúsculas todo lo ponemos a mayúsculas.
8. Creamos el input y un evento para corregir el valor. 
9. El evento se debe bindear porque lo ejecuta el navegador.
10. Este input puede sacar a un componente y lo podemos llamar filters. A este componente le pasamos la función y podemos al input ponerle el value si queremos que este controlado.  

### Fase 3 Router

Vamos a crear dos páginas: 
- La principal para la búsqueda.
- La secundaria para los detalles.

1. En index.js 
~~~
import {HashRouter} from 'react-router-dom';

... <HashRouter><App /></HashRouter> ...
~~~
2. Creamos 
~~~ 
<Home /> 
~~~
  y le pasamos lo q necesita Filter y CharacterList.
3. Luego lo creamos un Detail, por ahora no le pasamos nada. 
4. Importamos switch route y link 
5. Creamos un switch en app y creamos dos rutas.
6. Como tienen props tendremos que usar el render.
8. Luego creamos los links en cada parte. 

### Fase 4 Detalles

Queremos que ahora cada vez q clickamos en un personaje nos lleve al detalle de ESE personaje. 
Para identificarlo necesitamos la lista de todos los resultados y algo para identificarlo.

1. Vamos a hacer que la ruta del detalle sea única para cada elemento de la lista.
2. Debemos ahora recuperar ese id, por eso necesitmas al detalle pasarle los props y lo tendremos que poner con render. 
3. Tenemos que cambiar el path del detalle añadiendole /:id.
4. A ese componente le pasamos routerProps, si consoleamos esta variable nos damos cuenta que en match --> params --> tendremos los datos pasados a la url que coincide con nuestra id. 
5. Tambien le pasamos el array de todos los pokemon para sacar los datos del q buscamos. 
6. Usamos un findIndex para encontrar al pokemon.
7. Con el pokemon localizado podemos pintar sus elementos. 

### Fase 5 Mejoras

Vamos a solucionar el problema del error si recargar el detalle no tenemos los datos, o si se introduce una url erronea.
Para ello haremos un render condicional según el estado del elemento seleccionado.
