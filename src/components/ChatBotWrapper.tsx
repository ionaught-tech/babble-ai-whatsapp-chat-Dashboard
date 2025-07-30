"use client";
import { ChatBox } from "@ionaught-tech/babble-ai-chat-box";
import apiUrl, { socketUrl } from "../apiUrl";

const ChatBotWrapper = () => {
  console.log("ChatBotWrapper rendered with apiUrl:", apiUrl);

  return (
    <div>
      <h1>Chat Bot Wrapper</h1>
      <ChatBox
        theme={"light"}
        primaryColor={"hsl(217, 54%, 0%)"}
        tokenKey="babble-ai-chat-token"
        apiUrl={apiUrl}
        socketUrl={socketUrl}
        themeName="light"
        disclaimerUrl=""
        liveAgent={{
          status: false,
          type: 1,
          dataCollectEnabled: false,
        }}
        freeTier={true}
      />
    </div>
  );
};
export default ChatBotWrapper;
