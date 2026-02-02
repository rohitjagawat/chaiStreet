from dotenv import load_dotenv
load_dotenv()

import os

def env(key: str, default: str | None = None) -> str | None:
    v = os.getenv(key, default)
    return v

JWT_SECRET = env("JWT_SECRET", "dev-change-me")
JWT_ALG = env("JWT_ALG", "HS256")

DISCORD_CLIENT_ID = env("DISCORD_CLIENT_ID", "")
DISCORD_CLIENT_SECRET = env("DISCORD_CLIENT_SECRET", "")
DISCORD_REDIRECT_URI = env("DISCORD_REDIRECT_URI", "http://localhost:8000/discord/callback")

DISCORD_BOT_TOKEN = env("DISCORD_BOT_TOKEN", "")
DISCORD_GUILD_ID = env("DISCORD_GUILD_ID", "")

ROLE_FREE_ID = env("ROLE_FREE_ID", "")
ROLE_PRO_ID = env("ROLE_PRO_ID", "")
ROLE_ELITE_ID = env("ROLE_ELITE_ID", "")

FRONTEND_URL = env("FRONTEND_URL", "http://localhost:5173")
