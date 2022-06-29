function sumarTickets() {
    const cantidad = document.getElementById('cantidad').value
    const categoria = document.getElementById('categoria').value

    let porcentajeCategoria = 0.15;
    const valorTicket = 200;
    let valorTickets = valorTicket * cantidad;
    let total = valorTickets-(valorTickets * porcentajeCategoria);
    
    if(categoria === 'Estudiante'){
        porcentajeCategoria = 0.8;
        total = valorTickets - (valorTickets * porcentajeCategoria);
    }else if(categoria === 'Trainee'){
        porcentajeCategoria = 0.5;
        total = valorTickets - (valorTickets * porcentajeCategoria);
    }
    document.getElementById("totalPago").innerHTML= "Total a pagar $" + total
}

function borrarValor(){
    let cantidad = document.getElementById('cantidad').value
    cantidad = 0;
    let categoria = document.getElementById('categoria');
    categoria.remove(categoria.selectedIndex);

    document.getElementById("totalPago").innerHTML= "Total a pagar $" + cantidad
}

document.getElementById("ComprarTickets").onclick = function () {
    location.href = "Ticket.html";
};
