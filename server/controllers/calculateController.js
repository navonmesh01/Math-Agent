import { mathAgent } from '../services/mathAgent.js';

export const calculateController = async (req, res, next) => {
  try {

    const { message } = req.body;

    if(!message){
      res.status(200).json({ message: "no user input received" });
    }
    
    const responseMessage = await mathAgent(message);
    res.status(200).json({ message: responseMessage });

  } catch (error) {
    console.error('Error in calculateController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(); //so that server does not shutdown
  }
};