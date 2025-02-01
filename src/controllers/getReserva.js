const { Reserva } = require('../db');


const getReserva= async () => {
 
  
  const reservas = await Reserva.findAll();

  // Formateamos la respuesta
  const formattedReservas = reservas.map(reserva => ({
    id: reserva.id,
    dateStart: reserva.dateStart,
    dateEnd: reserva.dateEnd,
    bookingPrice: reserva.bookingPrice,
    totalPrice: reserva.totalPrice,
    category: reserva.category,
    status: reserva.status,
    stock: reserva.stock,
  }));

  return formattedReservas;
 
};

module.exports = {getReserva};


