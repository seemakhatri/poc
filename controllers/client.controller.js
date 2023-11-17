import Client from "../models/Client.js";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

export const createClient = async (req, res, next) =>{
    try {
      if(req.body){
          const newClient = new Client(req.body);
          await newClient.save();
          return next(CreateSuccess(200, "Client Created Successfully !"))
      }else{
          return next(CreateError(400, "Bad Request"))
      }
    } catch (error) {
      return next(CreateError(500, "Internal Server Error !"))
    }
}

export const updateClient = async (req, res, next) =>{
    try {
        const client = await Client.findById({_id: req.params.id});
        
        if(client){
            const newData = await Client.findByIdAndUpdate(
                req.params.id,
                {$set: req.body.client},
                { new: true}
            );
            return next(CreateSuccess(200, "Client Updated !"))
        }else{
            return next(CreateError(404, "Client not found"))
        }
    } catch (error) {
        return next(CreateError(500, "Internal Server Error !") )
    }
}

export const getAllClients = async (req, res, next)=>{
    try {
        const clients = await Client.find({});
        return res.status(200).send(clients);
    } catch (error) {
        return next(CreateError(500, "Internal Server Error !") )
    }
}

export const deleteClient = async (req, res, next)=>{
    try {
        const clientId = req.params.id;
        const client = await Client.findById({_id: clientId});
        if(client){
            await Client.findByIdAndDelete(clientId);
            return next(CreateSuccess(200, "Client Deleted !"))
        }else{
            return next(CreateError(404, "Client not found !") )
        }
    } catch (error) {
        return next(CreateError(500, "Internal Server Error !") )
    }
}

