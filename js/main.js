
let bienvenida= "ACEPTAR";
let carrito = [];
let opcion = "SI";
bienvenida = prompt("Te damos la bienvenida!,disponemos de las siguientes marcas: Adidas,Jordan o Vans, para seguir en el proceso de compra escriba, ACEPTAR, para terminar, ESC").toUpperCase();


while (bienvenida!="ESC" && bienvenida!="ACEPTAR"){

alert("Por favor ingrese ACEPTAR O ESC");
bienvenida = prompt("Disponemos de las siguientes marcas: Adidas,Jordan o Vans, para seguir en el proceso de compra escriba, ACEPTAR, para terminar, ESC").toUpperCase();

}



if (bienvenida == "ACEPTAR"){

   while(opcion!="NO" && bienvenida=="ACEPTAR"){

    let marca = prompt ("Ingrese la marca de la que le interesa ver modelos disponibles: vans, adidas o jordan?");

    if (marca=="vans"){
         marca = zapatillasVans;
    }
    
        else if (marca=="jordan"){
            marca = zapatillasJordan;
        }
    
            else if(marca=="adidas"){
               marca = zapatillasAdidas;
            }
        
    const mostrarArray = marca.map((item) => 
    
    item.modelo+" "+
    "$"+item.precio+"\n"
        
    )
    
    alert(mostrarArray.join(" - "));  
    
   let eleccion= prompt("Ingrese el modelo que le gusto");
    
   let encontrado = marca.filter(nombre=>(nombre.modelo).includes(eleccion));   

   alert("Los resultados encontrados segun su eleccion son: "+"\n"+JSON.stringify(encontrado, null, 4));

   let numId = Number(prompt("Ingrese el id del producto que selecciono"));     
    
   encontrado = encontrado.find(ident=>ident.id===numId);


const consulta = prompt("El producto elegido es: "+ JSON.stringify(encontrado, null, 4) +", desea añadirlo al carrito?, responda por favor SI o NO").toUpperCase();
    

    if (consulta == "SI"){
        carrito.push(encontrado);
        console.log(carrito);
    }
      else if(consulta == "NO"){
        alert("Gracias por buscar");
      }

opcion = prompt("Desea agregar mas productos a su carrito?, SI O NO").toUpperCase();
}

const precioTotal= carrito.reduce((acc,producto)=> acc + (producto.precio),0)
alert("El precio total de la compra es: $"+ precioTotal)


}

if (bienvenida == "ESC"){
alert("Gracias por entrar");
}





