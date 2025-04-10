# Booking-on-a-Budget
A full-stack travel excursion planner that helps users discover, save, and generate custom itineraries based on real excursion APIs.

## 🔧 Tech Stack
- Node.js + Express + TypeScript
- PostgreSQL + Sequelize
- React + TypeScript
- JWT Auth
- External APIs: Amadeus, Viator
- Deployment: Render

  ## External API used(4 used):
  - Amadeus & GEOAPIFY: Cities Information
  - Unsplash: images
  - Google: Embed Map

## 📸 Screenshot
![screenshot](./tobeadded.png)

## 🔗 Live Demo
[https://your-app.onrender.com](https://booking-on-a-budget-2.onrender.com/)

## Structure
booking-on-a-budget/
├── client/             # React front end
├── server/             # Express back end (Node.js + TypeScript)
├── .env.example        # Example env vars
├── README.md

server/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/        # external APIs logic
│   ├── utils/
│   ├── app.ts
│   └── index.ts
├── tsconfig.json


## ERD
<img width="1028" alt="image" src="https://github.com/user-attachments/assets/9dc3f4e3-93c6-433a-a81c-bc73d947f590" />


## 🛠 Setup Instructions

### Backend
```bash
cd server
npm install
cp .env.example .env
# Edit your DB_URL and keys
npm run dev

### Frontend
cd client
npm install
npm run dev
