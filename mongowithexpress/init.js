const mongoose =require("mongoose");
main().then(() =>{
    console.log("connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Chat  = require("./models/chats.js");


let  allChats= [
    {
      from: "Jaha",
      to: "Saha",
      message: "Send me the notes",
      created_at: new Date()
    },
    {
      from: "Aman",
      to: "Riya",
      message: "Did you complete the assignment?",
      created_at: new Date()
    },
    {
      from: "Ali",
      to: "Ahmed",
      message: "Let's meet after class",
      created_at: new Date()
    },
    {
      from: "Sara",
      to: "Noor",
      message: "Can you share the PDF?",
      created_at: new Date()
    },
    {
      from: "Rahul",
      to: "Priya",
      message: "I will send the file tonight",
      created_at: new Date()
    },
    {
      from: "Imran",
      to: "Zaid",
      message: "Are you coming to the meeting?",
      created_at: new Date()
    },
    {
      from: "Fatima",
      to: "Aisha",
      message: "Please check the document",
      created_at: new Date()
    },
    {
      from: "Kabir",
      to: "Arjun",
      message: "Let's work on the project tomorrow",
      created_at: new Date()
    }
  ];

Chat.insertMany(allChats);