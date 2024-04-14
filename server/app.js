import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./utils/features.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { v4 as uuid } from "uuid";
import { NEW_MESSAGE, NEW_MESSAGE_ALERT } from "./constants/events.js";
import { getSockets } from "./lib/helper.js";



import userRoutes from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { Message } from "./models/message.model.js";

dotenv.config({ path: "./.env" });
const mongoURI = process.env.MONGO_URI;
connectDB(mongoURI);
const port = process.env.port || 4000;
const adminSecretKey = process.env.ADMIN_SECRET_KEY || secretKey;
const userSocketIds = new Map();

const app = express();
const server = createServer(app);
const io = new Server(server, {});

// Using Middleware here
app.use(express.json());
// app.use(express.urlencoded())      // We use urlencoded to get data from {form-data} in postman but here we will use {multipart/form-data} so we will use multer instead of urlencoded
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/admin", adminRoutes);


io.use((socket, next) => {
  
})

io.on("connection", (socket) => {
  const user = {
    _id: "asdsfsd",
    name: "asdfjkdsl",
  };
  userSocketIds.set(user._id.toString(), socket.id);
  console.log(userSocketIds);
  console.log("User Connected", socket.id);
  socket.on(NEW_MESSAGE, async({ chatId, members, message }) => {
    const messageForRealTime = {
      content: message,
      _id: uuid(),
      sender: {
        _id: user._id,
        name: user.name,
      },
      chat: chatId,
      createdAt: new Date().toISOString(),
    };
    const messageForDB = {
      content: message,
      sender: user._id,
      chat: chatId,
    };

    const membersSockets = getSockets(members);
    io.to(membersSockets).emit(NEW_MESSAGE, {
      chatId,
      message: messageForRealTime,
    });
    io.to(membersSockets).emit(NEW_MESSAGE_ALERT, { chatId });
    // console.log("New Message", messageForRealTime);

    try {
      await Message.create(messageForDB);
    } catch (error) {
      
    } 
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    userSocketIds.delete(user._id.toString());
  });
});

app.use(errorMiddleware);

server.listen(port, () => {
  console.log(
    `Server is up and running on http://localhost:${port} in ${process.env.ENV_MODE} mode`
  );
});

export { adminSecretKey, userSocketIds };
