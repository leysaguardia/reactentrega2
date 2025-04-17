import "../data/data.css";


const productos= [

    // {
    //id:1,
    //  nombre:"Mermelada de Naranja",
    //  descripcion:"Naranja y jugo de uva concentrado", 
    //precio:"525$",
    //gramos:"475gr",
    // categoria:"Citricas",
    // stock:"10",
    //imageUrl: "https://res.cloudinary.com/dsnpwkqjb/image/upload/v1744850010/naranja_jjwtyw.jpg",
    //},

    {
      //id:2,
      nombre:"Mermelada de Frutilla",
      descripcion:"Frutilla y jugo de uva concentrado", 
      precio:"525$",
      gramos:"475gr",
      categoria:"Rosaceas",
      stock:"10",
      imageUrl: "https://res.cloudinary.com/dsnpwkqjb/image/upload/v1744850028/frutilla_dyr3c9.jpg"
    },
    
    {
      //id:3,
      nombre:"Mermelada de Pomelo",
      descripcion:"Pomelo y jugo de uva concentrado", 
      precio:"525$",
      gramos:"475gr",
      categoria:"Citricas",
      stock:"10",
      imageUrl:"https://res.cloudinary.com/dsnpwkqjb/image/upload/v1744850016/pomelo_vjauqe.jpg",
    },
    
    {
      //id:4,
      nombre:"Mermelada de Mandarina",
      descripcion:"Mandarina y jugo de uva concentrado", 
      precio:"525$",
      gramos:"475gr",
      categoria:"Citricas",
      stock:"10",

      imageUrl:"https://res.cloudinary.com/dsnpwkqjb/image/upload/v1744850010/mandarina_azqfqm.jpg",
    },
    {
      //id:5,
      nombre:"Mermelada de Frutos Rojos",
      descripcion:"Arandano, mora, cereza y jugo de uva concentrado", 
      precio:"545$",
      gramos:"475gr",
      categoria:"Rosaceas",
      stock:"10",
      imageUrl:"https://res.cloudinary.com/dsnpwkqjb/image/upload/v1744850016/frutosrojos_gtov58.jpg",
    },

];

const obtenerProductos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        },2000 );

    });
};


export default obtenerProductos;