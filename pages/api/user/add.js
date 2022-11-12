import mongodb from '../../../utils/mongodb';
import UserModel from '../../../models/UserModel';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addUser(req, res) {
    const {name, email} = req.body;
    
    console.log('connecting');
    await mongodb();
    console.log('connected');
    
    console.log('create');
    const user = await UserModel.create(req.body);
    res.json({user});
}