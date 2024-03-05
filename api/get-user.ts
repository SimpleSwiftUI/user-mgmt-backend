import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
    const { userId } = req.query;
    console.log("getUser userId:", userId);
    const user = {
        userId,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com"
    };

    res.json(user);
}
