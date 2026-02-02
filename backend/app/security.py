# backend/app/security.py
from datetime import datetime, timedelta, timezone
import os

from jose import jwt, JWTError
from passlib.context import CryptContext

pwd = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

def hash_password(p: str) -> str:
    return pwd.hash(p)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd.verify(plain, hashed)


# ---- JWT helpers ----
JWT_SECRET = os.getenv("JWT_SECRET", "dev-secret-change-me")
JWT_ALG = "HS256"
JWT_EXPIRES_MIN = int(os.getenv("JWT_EXPIRES_MIN", "10080"))  # default 7 days

def create_token(user_id: str) -> str:
    now = datetime.now(timezone.utc)
    payload = {
        "sub": user_id,
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=JWT_EXPIRES_MIN)).timestamp()),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALG)

def decode_token(token: str) -> dict:
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALG])
    except JWTError as e:
        raise ValueError("Invalid token") from e
