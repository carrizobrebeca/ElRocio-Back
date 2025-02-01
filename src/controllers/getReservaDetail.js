const { Reserva } = require('../db');


const getReservaDetail = async (id) => {
 
  
  const reserva = await Reserva.findByPk(id);

  // Formateamos la respuesta
  const formattedReserva = {
    id: reserva.id,
    dateStart: reserva.dateStart,
    dateEnd: reserva.dateEnd,
    bookingPrice: reserva.bookingPrice,
    totalPrice: reserva.totalPrice,
    category: reserva.category,
    status: reserva.status,
    stock: reserva.stock,
  
  };

  return formattedReserva;
 
};

module.exports = {getReservaDetail};


