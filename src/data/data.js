const productos= [

    {
      id:1,
      nombre:"Mermelada de Naranja",
      descripcion:"Naranja y jugo de uva concentrado", 
      precio:"5425$",
      gramos:"475gr",
      categoria:"Citricas",
      stock:"10",
      imagen:"/img/naranja.jpg",
    },

    {
      id:2,
      nombre:"Mermelada de Frutilla",
      descripcion:"Frutilla y jugo de uva concentrado", 
      precio:"5425$",
      gramos:"475gr",
      categoria:"Rosaceas",
      stock:"10",
      imagen:"/img/frutilla.jpg",
    },
    
    {
      id:3,
      nombre:"Mermelada de Pomelo",
      descripcion:"Pomelo y jugo de uva concentrado", 
      precio:"5425$",
      gramos:"475gr",
      categoria:"Citricas",
      stock:"10",
      imagen:"/img/pomelo.jpg",
    },
    
    {
      id:4,
      nombre:"Mermelada de Mandarina",
      descripcion:"Mandarina y jugo de uva concentrado", 
      precio:"5425$",
      gramos:"475gr",
      categoria:"Citricas",
      stock:"10",
      imagen:"/img/mandarina.jpg",
    },
    {
      id:5,
      nombre:"Mermelada de Frutos Rojos",
      descripcion:"Arandano, mora, cereza y jugo de uva concentrado", 
      precio:"5425$",
      gramos:"475gr",
      categoria:"Rosaceas",
      stock:"10",
      imagen:"/img/frutosrojos.jpg",
    },

]

const obtenerProductos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        },2000 );

    });
};


export default obtenerProductos;