//RESERVA DE MESAS PARA UN RESTO

//Clase
class Reserva {
    constructor(nombre, apellido, celular, numMesa){
        this.nombre = nombre
        this.apellido = apellido
        this.celular = celular
        this.numMesa = numMesa
    }
}

let reservas = [] 


//Creo el localStorage
if (localStorage.getItem("reservas")){
    reservas =  JSON.parse(localStorage.getItem("reservas")) 

} else {
    localStorage.setItem("reservas", JSON.stringify(reservas))
}


//Consulto el form y las mesas
const form = document.getElementById("idForm")
const formButton = document.getElementById("formButton")
const mesa1 = document.getElementById("idMesa1")
const mesa2 = document.getElementById("idMesa2")
const mesa3 = document.getElementById("idMesa3")
const mesa4 = document.getElementById("idMesa4")
const mesa5 = document.getElementById("idMesa5")
const mesa6 = document.getElementById("idMesa6")
const mesa7 = document.getElementById("idMesa7")
const mesa8 = document.getElementById("idMesa8")
const mesa9 = document.getElementById("idMesa9")
const mesasOcupadas = document.getElementById("mesasOcupadas")

//Evento del form
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    //Creo un objeto a partir del form
    const dataForm = new FormData(e.target)
    
    //Objeto a partir de los datos del usuario
    const reserva = new Reserva(dataForm.get("nombre"), dataForm.get("apellido"), dataForm.get("celular"), dataForm.get("mesa"))

    
    //push al array reservas
    reservas.push(reserva)
    
    //actualizo mi localStorage pisandolo
    localStorage.setItem("reservas", JSON.stringify(reservas))
    
    if(dataForm.get("mesa") === "1"){
        mesa1.classList.add("noDisponible")
    }
    if(dataForm.get("mesa") === "2"){
        mesa2.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "3"){
        mesa3.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "4"){
        mesa4.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "5"){
        mesa5.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "6"){
        mesa6.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "7"){
        mesa7.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "8"){
        mesa8.classList.add("noDisponible") 
    }
    if(dataForm.get("mesa") === "9"){
        mesa9.classList.add("noDisponible") 
    }

    //reseteo form
    form.reset() 

})

formButton.addEventListener("click", () =>{
    const reservasStorage = JSON.parse(localStorage.getItem("reservas"))

    mesasOcupadas.innerHTML = ""

    reservasStorage.forEach((reserva, indice) => {
        mesasOcupadas.innerHTML += 
        `
        <tr id="reserva${indice} ">
            <td class="tbody__td"> ${reserva.nombre} </td>
            <td class="tbody__td">${reserva.apellido} </td>
            <td class="tbody__td">${reserva.celular} </td>
            <td class="tbody__td">${reserva.numMesa} </td>
        </tr>
        `
    })
})






