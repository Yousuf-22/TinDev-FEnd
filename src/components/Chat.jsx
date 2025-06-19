import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchChatMessages = async () => {
    try {
      const chat = await axios.get(
        "http://localhost:7777/chat/" + targetUserId,
        { withCredentials: true }
      );

      const chatMessages = chat?.data?.messages.map((msg) => {
        return {
          firstName: msg?.senderId?.firstName,
          lastName: msg?.senderId?.lastName,
          text: msg.text,
        };
      });
      setMessages(chatMessages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll when messages update
  }, [messages]);

  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((prev) => [...prev, { firstName, lastName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });

    setNewMessage("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-base-200 rounded-lg shadow-md mt-8 flex flex-col h-[75vh] border border-gray-600">
      <h1 className="text-xl font-bold p-4 border-b border-gray-600">Chat</h1>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => {
          const isOwnMessage = msg.firstName === user.firstName;
          return (
            <div
              key={index}
              className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-header text-sm text-gray-400 mb-1">
                {msg.firstName + " " + msg.lastName}
                <time className="ml-2 text-xs opacity-50">2 hours ago</time>
              </div>
              <div
                className={`chat-bubble ${
                  isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
        {/* Auto-scroll target */}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-600 flex items-center gap-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="btn btn-secondary px-6 py-2 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
