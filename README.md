
# G2Tecnologia Ecommerce 

El proyecto consiste en una pagina de Ecommerce para la venta de articulos de informatica desarrollada con React, usando algunos componentes de Boostrap, toastify y sweetalert. Permite ver un catalogo completo de los productos o navegar por las diferentes categorias, ademas de poder seleccionar un item y ver la descripcion detallada del producto seleccionado.


![Logo](https://github.com/ggarcia06/PF2-GGarcia/blob/main/src/assets/logo.png?raw=true)


## Descripción del Sitio Web

![App Screenshot](https://github.com/ggarcia06/PF2-GGarcia/blob/main/src/assets/ECOMMERCEG2.png?raw=true)


## Autor

- [@ggarcia06](https://github.com/ggarcia06)  German Garcia


## Referencia de colores

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#4b6464](https://via.placeholder.com/10/4b6464?text=+) #4b6464 |
| Example Color | ![#555757](https://via.placeholder.com/10/555757?text=+) #555757 |
| Example Color | ![#cde4e3](https://via.placeholder.com/10/cde4e3?text=+) #cde4e3 |
| Example Color | ![#29514f](https://via.placeholder.com/10/29514f?text=+) #29514f |


## Instalación

Clonar proyecto de github

1- Copiar la direccion url del repositorio

2- Abrir Git bash

3- Cambiar el directorio actual a la direccion donde se va a guardar el repositorio

4- Escriba ```
git clone ``` 
y la direccion url que habia copiado anteriormente

5- Instalar las dependencias
```bash
  npm install 
  cd my-project
```
    
## Estructura del proyecto

### Componentes

* Cart: Hace uso de las variables generadas en el contexto para renderizar los elementos agregados al carrito, generar el total de la compra y recopilar datos del usuario para finalizar el proceso de compra, en caso de no tener ningun item, muestra el mensaje de carrito vacio y el boton para volver a la pagina principal donde se encuentran todos los productos

* CartWidget: Contiene el componente con el icono del carrito y muestra la varible totalWidget que indica el numero de elementos agregados.

* ItemDetailContainer: maneja la logica para traer el producto selecionado por el usuario para verlo en detalle.

* ItemDetail: renderiza el detalle del producto y es desde aqui donde se agrega el producto al carrito

* ItemCount: Corresponde al contador para agregar un numero de items al carrito, se muestra dentro del detalle del producto seleccionado.

* ItemListContainer: hace la solicitud a la base de datos en Firebase para traer todo el listado de productos.

* ItemList: Utiliza un map para renderizar todos los productos a traves del componente Item

* Item: Contiene un componente card de boostrap para mostrar la informacion de cada item

* Navbar: Contiene un componente de Boostrap para la barra de navegacion


### Contexts

Maneja la logica del carrito, como las variables y funciones que se requieren usar en otros componentes, como lo son: el numero de items agregados, la suma total de los valores de cada item, funciones de vaciar, remover o agregar.

### Services

Contiene el archivo con la configuracion de Firebase para acceder a las bases de datos donde alojamos toda la informacion de nuestros productos y  la base de datos con la informacion de cada compra realizada en nuestra web




