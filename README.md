# Booking-on-a-Budget
A full-stack travel excursion planner that helps users discover, save, and generate custom itineraries based on real excursion APIs.

## 🔧 Tech Stack
- Node.js + Express + TypeScript
- PostgreSQL + Sequelize
- React + TypeScript
- JWT Auth
- External APIs: Amadeus, Viator
- Deployment: Render

## 📸 Screenshot
![screenshot](./tobeadded.png)

## 🔗 Live Demo
[https://your-app.onrender.com](https://your-app.onrender.com)

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