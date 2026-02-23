import React from "react";
import "./Modal.css"; // use the same styles

const LearnMoreModal = ({ setShowLearnMore }) => {
  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <h2>Why Lang Tutor Exists</h2>

<p>
India is one of the most linguistically diverse countries in the world. We grow up hearing multiple languages around us, yet language differences often become barriers instead of bridges. Instead of debating which language matters more, I believe we should make it easier to learn any language we choose.
</p>

<p>
Lang Tutor is a voice-first AI language learning experiment built around that idea. The goal is simple: help people speak confidently in the language they want to learn, without fear, hesitation, or judgment.
</p>

<p>
This project is also my exploration of how modern voice AI, especially Sarvam AI, can support India’s multilingual reality. If technology can understand us in our own accents and languages, it can help us connect better rather than divide us.
</p>

<h3>How It Works</h3>

<p>
Lang Tutor combines real-time voice technology with conversational AI to create a natural speaking experience.
</p>

<ul>
  <li>LiveKit powers real-time voice communication</li>
  <li>Gemini AI generates intelligent, context-aware responses</li>
  <li>Sarvam AI handles speech-to-text and text-to-speech with support for Indian languages</li>
  <li>A Python and Flask backend manages the voice agent</li>
  <li>A Vite and React frontend delivers a fast, responsive interface</li>
</ul>

<p>
Together, this setup allows you to have natural conversations with an AI agent, almost like speaking with a real tutor.
</p>

<h3>Why a Voice-First Agent?</h3>

<p>
Learning a language is not just about reading and tapping answers. Real progress happens when you speak, listen, make mistakes, and try again. Lang Tutor focuses on active conversation so you can improve pronunciation, build confidence, and start thinking in your target language.
</p>

<h3>Built as a Sarvam AI Experiment</h3>

<p>
This project explores how Sarvam AI’s multilingual speech capabilities can be used in real-world applications. In a country as diverse as India, tools that understand regional languages and accents can make learning more inclusive and accessible.
</p>

<h3>What You Can Do</h3>

<ul>
  <li>Speak freely in the language you want to learn</li>
  <li>Practice daily conversations, travel scenarios, or interviews</li>
  <li>Ask for grammar explanations and corrections</li>
  <li>Use it as your personal AI speaking partner</li>
</ul>

<h3>What’s Next?</h3>

<ul>
  <li>Personalized fluency tracking</li>
  <li>Accent-aware pronunciation feedback</li>
  <li>Conversation memory and long-term progress tracking</li>
  <li>Expanded support for more Indian languages</li>
</ul>

<p>
Instead of arguing about languages, start learning one. Speak it. Practice it. Make it yours.
</p>

<p>
Curious about the voice AI behind this project?
<br />
<a href="https://docs.livekit.io/" target="_blank" rel="noopener noreferrer">
Learn more about LiveKit Voice AI ↗
</a>
</p>

       
      </div>
       <button
          className="cancel-button"
          onClick={() => setShowLearnMore(false)}
        >
          Close
        </button>
    </div>
  );
};

export default LearnMoreModal;
