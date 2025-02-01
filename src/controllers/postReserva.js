const { Reserva } = require('../db');
const { Op } = require('sequelize');

const postReserva = async (id, dateStart, dateEnd, bookingPrice, totalPrice, category, status, stock) => {
  let whereClause = {};  // Declaramos una cláusula where vacía

  // Si se pasa el nombre, agregamos el filtro a la cláusula where
  if (category) {
    whereClause = {
      category: category  // Filtramos por el nombre que viene como argumento
    };
  }



  // Verificamos si ya existen reservas con fechas que se solapan con las fechas propuestas
  const existingReservations = await Reserva.findAll({
    where: {
      ...whereClause,  // Filtro por categoría
      dateStart: {
        [Op.lt]: dateEnd  // La fecha de inicio de la reserva debe ser menor que la fecha de fin de la nueva reserva
      },
      dateEnd: {
        [Op.gt]: dateStart  // La fecha de fin de la reserva debe ser mayor que la fecha de inicio de la nueva reserva
      }
    }
  });

  if (existingReservations.length > 0) {
    // Si hay reservas existentes que se solapan, no permitimos crear la nueva reserva
    throw new Error('Las fechas seleccionadas ya están ocupadas para esta categoría.');
  }

  // Si no hay superposición de fechas, creamos la nueva reserva
  return await Reserva.create({
    id,
    dateStart,
    dateEnd,
    bookingPrice,
    totalPrice,
    category,
    status,
    stock
  });

};

module.exports = {postReserva};
