import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  useTrackTranscription,
  useLocalParticipant,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import {useRef, useEffect, useState } from "react";
import "./SimpleVoiceAssistant.css";

const Message = ({ type, text }) => {
  return <div className="message">
    <strong className={`message-${type}`}>
      {type === "agent" ? "Agent: " : "You: "}
    </strong>
    <span className="message-text">{text}</span>
  </div>;
};

const SimpleVoiceAssistant = () => {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState([]);
  const conversationRef = useRef(null);


  useEffect(() => {
    const allMessages = [
      ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
      ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
    setMessages(allMessages);

     // 👇 Auto-scroll after messages update
  setTimeout(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, 100);
  }, [agentTranscriptions, userTranscriptions]);

  return (
    <div className="voice-assistant-container">
      <div className="visualizer-container">
        <BarVisualizer className="bar" state={state} barCount={7} trackRef={audioTrack} />
      </div>
      <div className="control-section">
        <VoiceAssistantControlBar />
        <div className="conversation" ref={conversationRef}>
          {messages.map((msg, index) => (
            <Message key={msg.id || index} type={msg.type} text={msg.text} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default SimpleVoiceAssistant;
