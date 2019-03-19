Supongamos que se nos ha encargado el desarrollo de una aplicación que se encargue de gestionar los ensayos realizados en un laboratorio de control de calidad y emitir los informes pertinentes. Para realizar nuestra tarea, hemos de comenzar diseñando la base de datos que dará soporte a nuestra aplicación.

REQUISITOS:

· Nuestro laboratorio se encarga de hacerle controles de calidad a distintos productos. En concreto, la función del laboratorio consiste en realizar el control de calidad de muestras tomadas de un lote concreto del producto analizado.

· En control de calidad viene avalado por la realización de uno o varios ensayos (experimentos de laboratorio que se realizan expresamente sobre muestras del producto para certificar la calidad del lote analizado).

· Cada ensayo se realiza sobre una muestra del lote analizado del producto, la cual viene identificada por un código asignado por el jefe de laboratorio y, en ocasiones, puede reutilizarse para distintos ensayos.

· Cada ensayo toma una serie de medidas de la muestra analizada. Dichas medidas serán las que aparezcan en el informe final de control de calidad.

· Cuando los ensayos demuestren que el producto cumple con las exigencias de calidad establecidas por ley, nuestra aplicación se encargará de emitir un certificado que garantice la calidad del producto. Dicho certificado sólo tiene validez para el lote concreto analizado y deberá ir firmado por el director de laboratorio para que tenga validez.

· Cada ensayo de los realizados en el laboratorio es de un tipo concreto (especificado por la normativa vigente) y su tipo determina cuáles son las condiciones mínimas exigibles a los resultados obtenidos en el laboratorio para poder emitir el certificado de calidad.



Diseñe una base de datos relacional para el problema planteando siguiendo los siguientes pasos:

a) Identifique las entidades de nuestro modelo y los atributos correspondientes a cada una de tales entidades, indicando explícitamente cuáles de esos atributos forman las claves primarias de las distintas entidades.

b) Analice las relaciones existentes entre las distintas entidades y determinar su cardinalidad (uno a uno, uno a muchos, muchos a muchos). Cuando resulte necesario, especificar los atributos que puedan corresponder a las relaciones obtenidas.

c) Dibuje un diagrama entidad/relación que represente el esquema lógico correspondiente al\ modelo de datos definido por las entidades y relaciones obtenidas en los apartados anteriores.

d) A partir del diagrama, obtenga el conjunto de tablas que nos permitirá implementar nuestro modelo en un sistema gestor de bases de datos relacionales, indicando las claves primarias de cada una de las tablas. 






# quality_checker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
