import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
    if (req.method === "POST") {
        const { appleUserId, firstName, lastName, email } = req.body;
  
        console.log(`Registering user: ${appleUserId}, ${firstName}, ${lastName}, ${email}`);

        // call databaseCreateUser(...)
        
        res.status(200).json({ message: `${firstName} ${lastName} registered successfully` });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
