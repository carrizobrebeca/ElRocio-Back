const { getReserva } = require("../controllers/getReserva");
const { getReservaDetail } = require("../controllers/getReservaDetail");
const { postReserva } = require("../controllers/postReserva");

const getReservaHandler = async(req, res) => {
    try {
        const response = await getReserva();
    return res.status(200).json(response);
    }  catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
}
const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getReservaDetail(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const createReserva = async (req, res) => {
    const { id, dateStart, dateEnd, bookingPrice, totalPrice, category, status, stock } = req.body;

    try {
        const newReserva = await postReserva(
            id, dateStart, dateEnd, bookingPrice, totalPrice, category, status, stock
        );
        res.status(200).json(newReserva);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getReservaHandler,
    getDetailHandler,
    createReserva
}
