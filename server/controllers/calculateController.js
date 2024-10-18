import { mathAgent } from '../services/mathAgent.js';
import logger from '../utils/logger.js';

export const calculateController = async (req, res, next) => {
  try {

    const { message } = req.body;

    if(!message){
      res.status(200).json({ message: "no user input received" });
    }

    logger.info(`Received calculation request: ${message}`);
    
    const responseMessage = await mathAgent(message);

    logger.info(`Calculation completed successfully`, {
      message,
      result: responseMessage.result,
      steps: responseMessage.steps
    });

    res.status(200).json({ message: responseMessage });

  } catch (error) {
    logger.error('Error in calculateController:', {
      error: error.message,
      stack: error.stack,
      userMessage: req.body.message
    });
    res.status(500).json({ error: 'Internal Server Error' });
    next(); //so that server does not shutdown
  }
};