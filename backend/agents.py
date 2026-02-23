from dotenv import load_dotenv
import os

from livekit import agents
from livekit.agents import Agent, AgentSession, RoomInputOptions
from livekit.plugins import sarvam, google

from prompts import SESSION_INSTRUCTION, AGENT_INSTRUCTION

# Load environment variables
load_dotenv()


class CollectionAgent(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions=AGENT_INSTRUCTION,
            # Sarvam STT
            stt=sarvam.STT(
                language="unknown",     # auto detect language
                model="saaras:v3", 
                mode="transcribe"
            ),
            # Gemini for text reasoning
            llm=google.LLM(
                model="gemini-2.5-flash"
            ),
            # Sarvam TTS
            tts=sarvam.TTS(
                target_language_code="en-IN",   # or "hi-IN" for Hindi
                model="bulbul:v3",               # Sarvam voice
                speaker="aditya"                 # voice name
            ),
        )

    async def on_enter(self):
        """When user joins room, send greeting."""
        self.session.generate_reply()


async def entrypoint(ctx: agents.JobContext):
    session = AgentSession()

    await ctx.connect()  # connect to LiveKit room

    await session.start(
        room=ctx.room,
        agent=CollectionAgent(),
        room_input_options=RoomInputOptions(
            video_enabled=True
        ),
    )

    # start conversation with a greeting
    await session.generate_reply(
        instructions=SESSION_INSTRUCTION
    )


if __name__ == "__main__":
    agents.cli.run_app(
        agents.WorkerOptions(entrypoint_fnc=entrypoint)
    )