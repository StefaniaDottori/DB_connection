# Proyectos
 
## 1. Para iniciar un proyecto en Node JS añadimos en el terminal el siguiente comando
``` npm init ```
## Este comando crea un archivo "package.json" que contiene la info de nuestro proyecto y las dependencias necesarias para su correcto funcionamiento.

## 2. Para instalar paquetes (dependencias) en nuestro proyecto, utilizamos en gestor de paquetes NPM. Un ejemplo sería con Express:
``` npm install express ```

## 3. Si iniciamos un proyecto clonado por primera vez desde Github, para que se instalen todos los paquetes necesarios (Irá a mirar el package.json): 
``` npm install ```

## 4. Para que el servidor se reinicie cada vez que detecta un cambio en el código, instalamos el paquete (modo desarrollo):
``` npm install nodemon -g -D ```

## 5. Para que funcione en Windows:
``` Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser ```
