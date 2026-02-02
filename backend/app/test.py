import os
import requests

BASE = "http://localhost:8000"

EMAIL = os.getenv("TEST_EMAIL", "dev_test_001@gmail.com")
PASSWORD = os.getenv("TEST_PASSWORD", "12345678")  # >= 8 chars

s = requests.Session()

# 1) Signup (may fail if user already exists — that's okay)
r = s.post(f"{BASE}/auth/signup", json={"email": EMAIL, "password": PASSWORD}, timeout=15)
print("signup:", r.status_code, r.text)

# 2) Login
r = s.post(f"{BASE}/auth/login", json={"email": EMAIL, "password": PASSWORD}, timeout=15)
print("login:", r.status_code, r.text)
if r.status_code != 200:
    raise SystemExit("Login failed; check credentials / user exists / hashing.")

data = r.json()
token = data.get("access_token") or data.get("token")
print("token present:", bool(token))

# 3) Me
r2 = s.get(f"{BASE}/me", headers={"Authorization": f"Bearer {token}"}, timeout=15)
print("me:", r2.status_code, r2.text)
