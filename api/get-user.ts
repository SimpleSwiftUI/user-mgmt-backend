import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
    const { userId } = req.query;
    console.log("getUser userId:", userId);
    // call databaseGetUser(...)
    const user = {
        userId,
        firstName: "Robert",
        lastName: "Brennan",
        email: "john.doe@example.com"
    };

    res.json(user);
}
