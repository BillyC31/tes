const {Cars} = require("./models")

async function handleCreateCar(req, res) {
  try{
  const car = await Cars.create(req.body);

  res.status(201).json(car);
  }catch(err){
    console.log(err)
  }
}

async function handleListCars(req, res) {
  const cars = await Cars.findAll();

  res.status(200).json(cars);
}

function handleGetCar(req, res) {
  const car = req.car;

  res.status(200).json(car);
}

function handleUpdateCar(req, res) {
  const car = req.car;

  car.update(req.body);

  res.status(200).json(car);
}

function handleDeleteCar(req, res) {
  const car = req.car;

  car.delete();

  res.status(204).end();
}

module.exports = {
  handleCreateCar,
  handleListCars,
  handleGetCar,
  handleUpdateCar,
  handleDeleteCar,
};
