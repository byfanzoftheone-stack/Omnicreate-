# OmniCreate AI — System Contract

## CORE PURPOSE
This system is a production-ready AI media generation platform.

It is NOT a demo.
It is NOT a UI experiment.
It is a deployable backend + frontend product system.

---

## SYSTEM BEHAVIOR RULES

### 1. API CONTRACT (HARD RULE)
All generation endpoints MUST return:

{
  "track_id": string,
  "status": "completed",
  "style": string,
  "audio_url": string,
  "cost": number,
  "monetized": boolean
}

No deviations allowed.

---

### 2. BACKEND RESPONSIBILITY
- Must serve stable JSON contracts
- Must never break frontend expectations
- Must remain deployment-safe (Railway compatible)

---

### 3. FRONTEND RESPONSIBILITY
- Must ONLY consume API
- Must never simulate backend logic
- Must reflect real API state (loading, success, error)

---

### 4. DEPLOYMENT ARCHITECTURE

Frontend:
- Vercel
- React/Vite
- Env: VITE_API_URL

Backend:
- Railway
- FastAPI
- Single API entry: /api/generate-music

---

### 5. MONETIZATION LAYER (READY STATE)
Every generation response includes:
- cost
- monetized flag
This is required for future billing integration.

---

### 6. NON-NEGOTIABLE RULE
No mock systems in production routes.
All outputs must originate from backend API.

---

## GOAL STATE
This system evolves into:

- paid generation system
- user-based credit engine
- saved history layer
- scalable AI media pipeline

