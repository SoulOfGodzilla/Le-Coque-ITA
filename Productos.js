// Productos
var productos = [
  { nombre: "Coca Cola Cereza 355ml", descripcion: "Coca cola sabor cereza importada.", precio: "$27 Mx", imagen: "imagenes/1.png", url: "detalle.html" },
  { nombre: "Fanta Mora Azul 355ml", descripcion: "Fanta sabor mora azul importada.", precio: "$27 Mx", imagen: "imagenes/2.png", url: "detalle2.html" },
  { nombre: "Fanta Piña 355 ml", descripcion: "Date una oportunida y prueba la deliciosa fanta de piña", precio: "$27 Mx", imagen: "imagenes/3.png", url: "detalle3.html" },
  { nombre: "Mountain Dew 355ml", descripcion: "El original, el que lo empezó todo. Sacia con su sabor único y audaz. Disfruta de su refresco chuggable intenso color verde.", precio: "$27 Mx", imagen: "imagenes/4.png", url: "detalle4.html" },
  { nombre: "ChupaChups 250 ml", descripcion: "Refresco Coreano Sabor ChupaChups exquisito para el paladar", precio: "$27 Mx", imagen: "imagenes/5.png", url: "detalle5.html" },
  { nombre: "Felice Yogurth 355ml", descripcion: "Refresco japonés con sabor a yogur.", precio: "$32 Mx", imagen: "imagenes/6.png", url: "detalle6.html" },
  { nombre: "Milkis Sabor Original", descripcion: "Bebida carbonatada coreana con sabor original.", precio: "$60 Mx", imagen: "imagenes/7.png", url: "detalle7.html" },
  { nombre: "Bubble Tea Mango 370ml", descripcion: "Bubble Tea con sabor a mango.", precio: "$27 Mx", imagen: "imagenes/8.png", url: "detalle8.html" },
  { nombre: "HaiTai Bebida Pera", descripcion: "Bebida proveniente de corea sabor pera", precio: "$25 Mx", imagen: "imagenes/9.png", url: "detalle9.html" },
  { nombre: "Sparkling Soda Melon ", descripcion: "Refresco carbonatado con sabor a melón.", precio: "$38 Mx", imagen: "imagenes/10.png", url: "detalle10.html" }
];

function renderizarProductos() {
  var productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';
  productos.forEach(producto => {
      var card = document.createElement('div');
      card.classList.add('tarjeta-producto');
      var img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.title = producto.nombre;
      var content = document.createElement('div');
      content.classList.add('contenido');
      var name = document.createElement('h2');
      name.textContent = producto.nombre;
      var description = document.createElement('p');
      description.textContent = producto.descripcion;
      var price = document.createElement('p');
      price.classList.add('precio');
      price.textContent = producto.precio;
      var link = document.createElement('a');
      link.href = producto.url;
      var button = document.createElement('button');
      button.classList.add('boton');
      button.textContent = "Ver detalles";
      link.appendChild(button);
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(price);
      content.appendChild(link);
      card.appendChild(img);
      card.appendChild(content);
      productContainer.appendChild(card);
  });
}
/* Inicio de la funcion para ordenar */
function ordenarAZ() {
  productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); /* Comparamos alfaberticamente para agregar cual antes y despues */
  renderizarProductos(); /* Llamamos ala funcion de renderizar en la parte de arriba */
  alert('Productos ordenados de A a Z'); /* Mensaje que se aplico el cambio */
}
/* Fin de la funcion para ordenar */

/* Inicio de la funcion para ordenar de la Z -A */
function ordenarZA() {
  productos.sort((a, b) => b.nombre.localeCompare(a.nombre)); /* Comparamos cual es la utlima para ordenarla */
  renderizarProductos(); /* Llamamos a la funcion con la posibilidad de renderizar */
  alert('Productos ordenados de Z a A'); /* Mensaje de confirmación */
}
/* Fin de la funcion */

/* Inicio de la funcion para organizar por precios  */
function ordenarPrecioMayorMenor() {
  productos.sort((a, b) => {
      // Convertir el precio de string a número para compararlo
      let precioA = parseFloat(a.precio.replace('$', '').replace(' Mx', ''));
      let precioB = parseFloat(b.precio.replace('$', '').replace(' Mx', ''));
      return precioB - precioA;/* Retornamos el precio ya ordenado */
  });
  renderizarProductos(); /* Volvemos a renderizar */
  alert('Productos ordenados por precio de mayor a menor');/* Mensaje de confirmación */
}
/* Fin de la función */

/* Inicio de la funcion para ordenar el precio de menor a mayor */
function ordenarPrecioMenorMayor() {
  productos.sort((a, b) => {
      // Convertir el precio de string a número para compararlo
      let precioA = parseFloat(a.precio.replace('$', '').replace(' Mx', ''));
      let precioB = parseFloat(b.precio.replace('$', '').replace(' Mx', ''));
      return precioA - precioB; /* Retornammos el precio ordenado */
  });
  renderizarProductos(); /* Volvemos a renderizar */
  alert('Productos ordenados por precio de menor a mayor'); /* Mensaje de confirmacion */
}

/* Funcion para recargar la pagina y conservar los cambios */
window.onload = function() {
  mostrarAlerta();
  renderizarProductos(); /* Se renderiza */
  document.getElementById('sortAZButton').addEventListener('click', ordenarAZ);  /* Se obtiene la funcion del boton y se manda a llamar su funcion */
  document.getElementById('sortZAButton').addEventListener('click', ordenarZA); /* Se obtiene la funcion del boton y se manda a llamar su funcion */
  document.getElementById('sortPrecioButton').addEventListener('click', ordenarPrecioMayorMenor); /* Se obtiene la funcion del boton y se manda a llamar su funcion */
  document.getElementById('sortPrecioMenorButton').addEventListener('click', ordenarPrecioMenorMayor); /* Se obtiene la funcion del boton y se manda a llamar su funcion */
};

// Función para manejar la búsqueda de productos
function buscarProducto() {
  // Obtener el valor ingresado en el campo de búsqueda
  var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

  // Filtrar la lista de productos para encontrar coincidencias con el término de búsqueda
  var resultados = productos.filter(function(producto) {
    return producto.nombre.toLowerCase().includes(searchTerm);
  });

  // Mostrar los resultados de la búsqueda en la página HTML
  var productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  if (resultados.length > 0) {
    // Si se encontraron resultados, renderizar los productos coincidentes
    resultados.forEach(function(producto) {
      var card = document.createElement('div');
      card.classList.add('tarjeta-producto');

      var img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.title = producto.nombre;

      var content = document.createElement('div');
      content.classList.add('contenido');

      var name = document.createElement('h2');
      name.textContent = producto.nombre;

      var description = document.createElement('p');
      description.textContent = producto.descripcion;

      var price = document.createElement('p');
      price.classList.add('precio');
      price.textContent = producto.precio;

      var link = document.createElement('a');
      link.href = producto.url;

      var button = document.createElement('button');
      button.classList.add('boton');
      button.textContent = "Ver detalles";

      link.appendChild(button);
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(price);
      content.appendChild(link);
      card.appendChild(img);
      card.appendChild(content);
      productContainer.appendChild(card);
    });
  } else {
    // Si no se encontraron resultados, mostrar un mensaje en la página
    productContainer.textContent = 'No se encontraron resultados para la búsqueda: ' + searchTerm;
  }
}

// Asignar la función buscarProducto al evento click del botón de búsqueda
document.getElementById('searchButton').addEventListener('click', buscarProducto);

