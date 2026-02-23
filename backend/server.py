import os
from livekit import api
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import uuid

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/getToken", methods=["GET"])
def get_token():
    """Generate and return a LiveKit token"""
    try:
        name = request.args.get("name", "Guest")
        room = request.args.get("room", None)
        
        # If no room specified, generate one
        if not room:
            room = "room-" + str(uuid.uuid4())[:8]
        
        # Create access token - this is synchronous
        token = api.AccessToken(
            os.getenv("LIVEKIT_API_KEY"), 
            os.getenv("LIVEKIT_API_SECRET")
        ).with_identity(name).with_name(name).with_grants(
            api.VideoGrants(room_join=True, room=room)
        )
        
        jwt_token = token.to_jwt()
        return jwt_token
    except Exception as e:
        print(f"Error generating token: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@app.route("/health", methods=["GET"])
def health():
    """Health check endpoint"""
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    print("Starting Flask server on http://0.0.0.0:5001")
    app.run(host="0.0.0.0", port=5001, debug=True)