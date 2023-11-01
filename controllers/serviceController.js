const { Service: ServiceModel } = require("../models/service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
     const response = await ServiceModel.create(service);

     res.status(201).json({response, msg: "Serviço criado com sucesso"});

    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.status(200).json(services);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);
      res.status(200).json(service);

      if(!service){
        res.status(404).json({msg: "Serviço não encontrado"});
        return;
      }

      
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findByIdAndDelete(id);
      

      if(!service){
        res.status(404).json({msg: "Serviço não encontrado"});
        return;
      }
      const deletedService = await ServiceModel.findByIdAndDelete(id);
      res.status(200).json({deletedService, msg: "Serviço deletado com sucesso"});

      
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = serviceController;
