import { divide, multiply, subtract, add } from './mathFunctions.js';
import { ChatVertexAI } from '@langchain/google-vertexai';
import { ChatPromptTemplate, PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { StructuredOutputParser } from 'langchain/output_parsers';


const model = new ChatVertexAI({
  modelName: "gemini-1.5-flash",
  temperature: 0,
});

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  result: "The final numerical result of the calculation",
  steps: "A list of steps taken to arrive at the result, including which functions were used and intermediate calculations",
  explanation: "A brief explanation of the calculation process, if needed"
});

//prompt for our agent so that it will give desired output according to our message
const prompt = ChatPromptTemplate.fromTemplate(`
  You are a precise math assistant. Use the provided functions to calculate the answer.
  Available functions: divide(a, b), multiply(a, b), subtract(a, b), add(a, b)
  
  User query: {query}
  
  Perform the calculation and provide the following:
  1. The final numerical result in the form: Answer is [result].
  2. A list of steps taken to arrive at the result, including which functions were used
  3. A brief explanation of the calculation process, if needed
  
  {format_instructions}
  
  Remember to be concise and clear in your explanation.
  `);
    
    // runnable sequence for execution
    const chain = RunnableSequence.from([
      {
        query: (input) => input.query,
        format_instructions: async () => parser.getFormatInstructions(),
      },
      prompt,
      model,
      parser,
    ]);
    
    // Binding the math functions into our model
    model.bind({
      divide: divide,
      multiply: multiply,
      subtract: subtract,
      add: add,
    });
    
    export const mathAgent = async (userMessage) => {
      try {
        const response = await chain.invoke({
          query: userMessage,
        });
        return {
          result: response.result,
          steps: response.steps,
          explanation: response.explanation
        };
      } catch (error) {
        console.error('Error in mathAgent:', error);
        throw error;
      }
    };