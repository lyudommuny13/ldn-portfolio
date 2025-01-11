export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the chat request
      const { messages } = req.body;
      console.log('Received messages:', messages);
  
      // Simulate a response
      res.status(200).json({ message: 'This is a response from the server' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }