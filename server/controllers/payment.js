import Payment from "../models/Payment.js";

export const payment = async (req, res) => {
  const {
    orderId,
    name,
    amount,
    status,
    first_name,
    last_name,
    email,
    phone,
    address,
    city,
  } = req.body;

  if (
    !orderId ||
    !name ||
    !amount ||
    !status ||
    !first_name ||
    !last_name ||
    !email ||
    !phone ||
    !address ||
    !city
  ) {
    res.status(422).json({ error: "Please add all the fields" });
  }

  try {
    const payment = await Payment.create({
      orderId,
      itemName: name,
      amount,
      status,
      firstname: first_name,
      lastname: last_name,
      email,
      phone,
      address,
      city,
    });

    res
      .status(201)
      .json({ message: "The payment created successfully", payment });
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
};

export const getPayment = async (req, res) => {
  const payment = await Payment.findAll();

  try {
    res.status(201).json(payment);
  } catch (error) {
    res.status(422).json({
      error: error,
    });
  }
}

export const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findOne({ where: { id: req.params.id } });
    if (!payment) {
      return res.status(422).json({ error: "Payment not found" });
    }
    await payment.destroy();
    res.status(201).json({ message: "Successfully deleted" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the payment" });
  }
};