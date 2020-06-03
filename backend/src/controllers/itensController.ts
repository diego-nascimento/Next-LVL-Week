import knex from '../database/connection';
import {Request, Response} from 'express'

export default {
  async index(req: Request, res: Response){
    const items = await knex('itens').select('*');
    
    const serializedItens = items.map(item =>{
      return { 
        id: item.id,
        title: item.title,
        image_url: 'http://localhost:8081/uploads/' + item.image
      }
    })

    return res.json(serializedItens)
  }
}