const itemsData = (product) => [
  {
      id: "1234",
      title: product.title,
      description: "Dispositivo móvil de Tienda e-commerce",
      picture_url: product.image,
      quantity: 1,
      unit_price: product.price,
      external_reference: "stupacode@gmail.com"
  },
  {
    "id": "item-ID-1234",
    "title": "Title of what you are paying for. It will be displayed in the payment process.",
    "currency_id": "CLP",
    "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
    "description": "Item description",
    "category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
    "quantity": 1,
    "unit_price": 100
  }
];

module.exports = itemsData;