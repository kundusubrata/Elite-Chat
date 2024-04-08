// avatar = [],
// name,
// _id,
// groupChat = false,
// sameSender,
// isOnline,
// newMessageAlert,
// index = 0,
// handleDeleteChatOpen,

export const sampleChats = [
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1","2"],
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "John Boe",
    _id: "2",
    groupChat: false,
    members: ["1","2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Boi",
    _id: "2",
  },
];


export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "John Boi",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Hello, how are you?",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "user._id",
      name: "Krishna ",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "sfnsdjkfsdnfkdddjsbnd",
    sender: {
      _id: "adfsjds;",
      name: "Krishna 2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];


export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "Full Stack Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "DSA Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Hello, how are you?",
      _id: "11",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Jon ",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "12",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Jon 2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};