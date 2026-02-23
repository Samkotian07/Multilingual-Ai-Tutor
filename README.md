***Multilingual AI Tutor***

Welcome to Multilingual AI Tutor — a voice-first AI language practice platform designed to help people learn and speak languages naturally. This project blends real-time speech interaction with intelligent language correction so you can practice speaking just like you would with a live tutor.
Whether you want to improve your Hindi, Tamil, Bengali, Telugu, Malayalam, or any other Indian language, Multilingual AI Tutor helps you speak with confidence through conversation.

***What This Project Does***

Learning a language is more than reading and answering questions. Real fluency comes from speaking, listening, and practicing conversation.
This project lets you talk to an AI tutor in real time. You speak, the tutor listens and responds, and you get helpful corrections and guidance tailored for spoken language practice.
It feels like a natural conversation rather than filling in blanks on a screen.

***Why Voice Matters***

Language learning apps often focus on vocabulary, grammar rules, or multiple-choice questions. That approach can help at the beginning, but it doesn’t train you to speak confidently.
This tutor is voice-first. That means:

>You can speak freely, like in a real conversation.

>The AI listens to your speech and responds naturally.

>You get gentle corrections and explanations as you talk.

This makes practicing speaking feel more real and less intimidating.

***Key Features***

This system brings together modern AI tools for natural language interaction:

> LiveKit powers live voice communication between you and the AI tutor.

> Sarvam AI handles speech-to-text and text-to-speech, supporting rich language and accent coverage.

> Gemini AI (Google RealtimeModel) is the engine behind intelligent, context-aware replies.

> A Python and Flask backend manages the voice agent and token generation.

> A modern React frontend gives you a smooth and interactive interface.

This combination makes voice conversation effortless, responsive, and intuitive.

***What You Can Do***

With this project you can:

> Start a real conversation in your target language.

> Practice speaking without worrying about grammar mistakes.

> Ask for help with vocabulary and phrasing.

> Get corrected gently and encouraged to speak again.

> Build confidence through natural dialogue.

This tool feels like practicing with a patient tutor who listens, responds, and guides you to speak better every time.

***How It Works***

Here’s what happens when you use the tutor:

1. You open the app and enter your name.

2. The frontend asks the backend for a LiveKit connection token.

3. You connect to a voice room and start speaking.

4. Sarvam AI turns your voice into text.

5. Gemini AI reads your text, understands it, and decides how to respond.

6. Sarvam AI turns the reply into spoken audio.

7. You hear the reply and continue the conversation.

All of this happens in real time so it feels like a natural spoken exchange.


***Project Structure***

This repository is organized into two main parts:

**Backend**

The backend handles AI agent logic and creates secure connection tokens for LiveKit. It includes:

> agents.py — defines the voice tutor behavior and instructions

> server.py — generates secure tokens for frontend to connect

> Environment configuration using .env

The backend runs with Python and includes:

> Sarvam AI for speech processing

> Gemini for intelligent replies

> LiveKit for real-time voice

**Frontend**

The frontend gives you a simple interface to:

> Connect to a voice session

> Speak with the AI tutor

> See live transcription of your speech and the AI’s replies

> Control your microphone and audio

It is built with React and uses LiveKit’s React SDK for voice transport.

***Setup and Run***
**Backend**

Create a .env file with your API keys:

LIVEKIT_API_KEY=your_livekit_key
LIVEKIT_API_SECRET=your_livekit_secret
LIVEKIT_URL=your_livekit_url
GOOGLE_API_KEY=your_google_gemini_key
SARVAM_API_KEY=your_sarvam_key

Install dependencies:

pip install -r requirements.txt

Run the server:

python server.py
Frontend

Go into the frontend folder:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser to http://localhost:5173 and start speaking.


***Behind the Scenes***

This project is not just a tool. It’s an exploration of how AI and voice can empower language learners. It demonstrates how technology can help people communicate more naturally across different languages without barriers.

It shows that with modern voice AI, learning to speak a new language doesn’t have to be intimidating. It can be fun, natural, and conversational.

***Acknowledgments***

This project brings together several powerful technologies:

> LiveKit for voice connection

> Sarvam AI for speech recognition and synthesis

> Google Gemini for conversational intelligence

> React and Vite for a smooth frontend experience

>Flask for backend logic and routing

Thank you to all these technologies for enabling natural voice interaction in modern web applications.
