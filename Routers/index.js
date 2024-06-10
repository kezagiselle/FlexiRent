import userRouter from "./user";
import tokenRouter from "./authToken";

Router.use('/users',userRouter);
Router.use('/tokens',tokenRouter);