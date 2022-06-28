function sumarTickets() {
    const cantidad = document.getElementById('cantidad').value
    const categoria = document.getElementById('categoria').value

    let porcentajeCategoria = 0.15;
    const valorTicket = 200;
    let total = valorTicket * porcentajeCategoria * cantidad;

    if(categoria === 'Estudiante'){
        porcentajeCategoria = 0.8;
        total = valorTicket * porcentajeCategoria * cantidad;
    }else if(categoria === 'Trainee'){
        porcentajeCategoria = 0.5;
        total = valorTicket * porcentajeCategoria * cantidad;
    }

}