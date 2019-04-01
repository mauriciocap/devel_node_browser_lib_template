# Plantilla para desarrollar una Librería Javascript para el browser usando Node

Con @GalileoCap <https://github.com/galileocap>

Podés copiar y usar de base esta plantilla, que nos resultó cómoda para desarrollar una aplicación bastante compleja que se ejecuta en navegadores y la webview de Apache Córdova.

* Se empaqueta todo en un solo archivo en dist/tuproyecto
* Se genera documentación en doc/ref incluyendo diagramas UML
* Podés ejecutar tests automáticamente y también desde cualquier navegador, de a uno para diagnosticar errores, etc.
* Podés ejecutar el mismo código desde la consola, para probar ideas más rápido.

Está enfocada en que el software sea mantenible a largo plazo, fácil de integrar y testear, en especial por equipos que no sean los que lo empezaron, como necesitan la mayoría de los productos comerciales y empresas.

## Cómo usar

### Código fuente 

* Está todo en ```src/```
* Podés hacer import de tus módulos con path relativos
    ```import * as example from './example';```
* Podés instalar otros con ```npm i``` e importarlos usando el mecanismo de resolución de ```node```
    ```import proj4 from 'proj4';```
* Los que tengan formatos de módulos sólo para browser los podés importar con path relativo:
    ```import xyz from '../node_modules/xyz/dist/xyz.js';```

Fijate que hay un ```.gitignore``` apropiado en esta carpeta, y si necesitas editarlo.

### Librería para distribuir 

* Se genera en ```dist/``` 
* Usando ```npm run build```
* Con [rollup](https://lengstorf.com/code/learn-rollup-js/)  según build_conf/rollup-config.js

### Documentación 

* Se genera en ```doc/ref```
* Se puede ver en ```doc/ref/index.html```
* Usando ```npm run doc```
* Con [jsdoc](http://usejsdoc.org/about-getting-started.html) y [PlantUml](http://plantuml.com/)
   (PlantUML requiere Java1.8, podés revisar la version que necesitan los ```.jar``` en ```node_modules/node-plantuml/vendor```)

### Tests

#### Escribir tests

* Están en ```spec/suites```
* Usan [mocha](https://mochajs.org/) y [expectjs](https://devhints.io/expectjs)

1. Hay que usar ```function``` y no ```=>``` para no perder acceso a las funciones de mocha como ```timeout``` 
1. Para los asíncronos podes devolver una promesa o recibir la función ```done``` como parámetro y llamarla con el resultado cuando terminas.
1. Si declaraste la función ```done``` como parámetro, la tenés que llamar, aunque tu test sea síncrono (sino falla el test)

* Además se pueden ejecutar cargando ```spec/index.html``` en el browser o webview (así los podés distribuir con tu app) o automáticamente con [karma](https://karma-runner.github.io)


### Ejecutar tests

Se pueden ejecutar 

* Cargando ```spec/index.html``` en el browser o webview (así los podés distribuir con tu app) 
* Automáticamente usando ```node run test```
   * Con [karma](https://karma-runner.github.io)
   * Está instalado y configurado Chromium vía [Puppeteer](https://pptr.dev/)
   * Podés agregar otros browsers en la configuración ```spec/karma.conf.js```
* Dirigiendo tu app o browser a la url de ```karma```
   * ```npx karma --log-level debug --singleRun true --no-browsers --port 8080 start ./spec/karma.conf.js```
   * Conectate a la url que te muestra en la consola, ej.   http://127.0.0.1:8080/ o http://127.0.0.1:18080/ si estas desde [la máquina virtual que usamos para desarrollar en Córdova](https://github.com/csernam/vagrant-ionic)

Los resultados se pueden ver en ```doc/test-results```

* Están linkeados desde ```doc/ref/index.html```
* Incluyen [coverage](https://en.wikipedia.org/wiki/Code_coverage)
    (es necesario al menos un ```import``` en ```src/index.js``` para que los nombres de los archivos coincidan en el reporte)


Si falla Chromium
```
node_modules/puppeteer/.local-chromium/linux-637110/chrome-linux/chrome
```
sudo apt-get install libxss1

### Debug y Desarrollar más rápido en la consola

* Ejecutar ES6 con babel
    ``` npx babel-node src/util/proj.js ```
* Ver el código generado
    ``` npx babel src/util/proj.js ``` 
* Transformar con babel
    ``` npx babel src --out-dir x_out ```

### Instalar, la primera vez

1. Cloná o descargá esta carpeta
    (borrá la carpeta ```.git``` para usar la de tu proyecto)
2. Editá package.json para poner el nombre de tu proyecto 
    (lo usa la configuración, reemplaza tuproyecto y TuProyecto, tiene que ser un nombre valido de archivo y de variable en javascript)
3. npm i 



