/*
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




let seccionCompra = document.createElement("section");

seccionCompra.innerHTML = `<h2> Gracias por realizar su compra!</h2>
                           <h2> Descripcion de compra: </h2>`+ JSON.stringify(carrito, null, 4);

document.body.appendChild(seccionCompra);



let info = document.getElementById('informacion');

info = document.createElement("div");

info.innerHTML = `<p>Conforme a su compra realizada usted recibira el mejor producto en la puerta de su casa</p>`

document.body.appendChild(info);

}

if (bienvenida == "ESC"){
alert("Gracias por entrar");
}

*/

/*PARTE DE EVENTOS, FORMULARIOS */

let name = document.getElementById("nombre");
let surname = document.getElementById("apellido");
let mail = document.getElementById("email");
let boton = document.getElementById("btn");
let space = document.getElementById("view");

boton.addEventListener("click",(e)=>{
e.preventDefault();

alert("Excelente "+ name.value+" "+surname.value+", en los proximos minutos estaras recibiendo un email con informacion al mail: "+ mail.value);

space.innerHTML =`<h3>Informacion enviada con exito!<h3/>`+`<br>`+ "El nombre enviado fue: " + name.value + `<br>`+"El apellido enviado fue: " + surname.value +`<br>`+ "Email: "+ mail.value+`<br>`+"En caso de existir algun error en el formulario ya enviado, solo vuelva a completar el mismo, con el mismo email, de esa manera podremos solucionar los errores, Muchas Gracias";

});
