const { MercadoPagoConfig, Preference } = require("mercadopago");

const postPreference = async (req, res) => {
  const client = new MercadoPagoConfig({ accessToken: process.env.YOUR_ACCESS_TOKEN });
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],

      back_urls: {
        success: "https://carrizobrebeca.github.io/ElRocio/",
        failure: "https://carrizobrebeca.github.io/ElRocio/",
        pending: "https://carrizobrebeca.github.io/ElRocio/",
      },

      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al crear la preferencia : (",
    });
  }
};

module.exports = {
  postPreference,
};
