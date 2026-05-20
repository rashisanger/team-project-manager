# 🚀 Team Project Manager

A full-stack MERN Project Management System with authentication, Kanban workflow management, Docker containerization, Kubernetes deployment, and CI/CD automation.

Built using modern SaaS design principles inspired by Linear, Trello, Jira, and Notion.

---

# 🌐 Live Demo

## Frontend (Vercel)

Add your frontend deployment URL here

## Backend API (Render)

Add your backend deployment URL here

---

# ✨ Features

## 🔐 Authentication & Authorization

* User Registration & Login
* JWT Authentication
* Protected Routes
* Persistent Login State
* Secure API Access

---

## 📁 Project Management

* Create Projects
* View All Projects
* Delete Projects
* Project Details View

---

## ✅ Task Management

* Create Tasks
* Delete Tasks
* Update Task Status
* Kanban Workflow Board

Task statuses:

* Todo
* In Progress
* Done

---

## 📊 Dashboard

* Project Overview
* Workflow Analytics
* Task Tracking
* Productivity Insights

---

## 🎨 Modern SaaS UI

* Responsive Design
* Dark Sidebar Layout
* Tailwind CSS Styling
* Lucide React Icons
* Card-Based UI
* Smooth Transitions & Hover Effects

---

# 🛠️ Tech Stack

## Frontend

* React (Vite)
* React Router DOM
* Axios
* Context API
* Tailwind CSS
* Lucide React

---

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## DevOps & Cloud

* Docker
* Docker Compose
* Kubernetes
* Minikube
* Nginx
* Render
* Vercel
* GitHub Actions CI/CD

---

# 📁 Project Structure

```bash id="f7m2xa"
team-project-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .env
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
│
├── docker-compose.yml
└── README.md
```

---

# 🚀 Local Development Setup

## 1️⃣ Clone Repository

```bash id="e3t8wl"
git clone <your-repository-url>
cd team-project-manager
```

---

## 2️⃣ Install Backend Dependencies

```bash id="1y9rzc"
cd backend
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash id="h2xq9m"
cd ../frontend
npm install
```

---

## 4️⃣ Start Backend

```bash id="9v1wxa"
cd backend
npm run dev
```

Backend runs on:

```txt id="zw4l0k"
http://localhost:5000
```

---

## 5️⃣ Start Frontend

```bash id="e4m7pk"
cd frontend
npm run dev
```

Frontend runs on:

```txt id="v7y2nc"
http://localhost:5173
```

---

# 🐳 Docker Setup

## Build Containers

```bash id="ud4t7a"
docker compose build
```

---

## Run Containers

```bash id="mf2k8p"
docker compose up
```

---

## Stop Containers

```bash id="0p9qzr"
docker compose down
```

---

# ☸️ Kubernetes Setup (Minikube)

## Start Minikube

```bash id="iq3r5u"
minikube start
```

---

## Apply Kubernetes Configs

```bash id="mt4xpw"
kubectl apply -f k8s/
```

---

## Check Pods

```bash id="wo8k1n"
kubectl get pods
```

---

## Get Frontend URL

```bash id="yx7vmb"
minikube service frontend-service --url
```

---

# 🔄 CI/CD Pipeline

Implemented using GitHub Actions.

Pipeline automates:

* Dependency Installation
* Build Process
* Docker Image Build
* Deployment Workflow

---

# 🔐 Authentication Flow

```txt id="c7t4mx"
User Login/Register
        ↓
JWT Token Generated
        ↓
Stored in localStorage
        ↓
Axios Interceptor Attaches Token
        ↓
Backend Middleware Verifies JWT
        ↓
Protected APIs Accessible
```

---

# 🏗️ Application Architecture

```txt id="bh4m2p"
React Frontend
       ↓
Axios API Requests
       ↓
Express Backend
       ↓
MongoDB Atlas
       ↓
Response Returned
       ↓
UI Updates
```

---

# 🐳 Docker Architecture

```txt id="m0y4tk"
Frontend Container (Nginx)
        ↓
Backend Container (Node.js)
        ↓
MongoDB Atlas (Cloud Database)
```

---

# ☸️ Kubernetes Architecture

```txt id="r3v9xa"
Frontend Deployment
        ↓
Frontend Service (NodePort)
        ↓
Backend Deployment
        ↓
Backend Service (ClusterIP)
        ↓
MongoDB Atlas
```

---

# 📚 Concepts Implemented

* REST APIs
* JWT Authentication
* Protected Routes
* React Context API
* Axios Interceptors
* MongoDB Relationships
* Docker Containerization
* Multi-stage Docker Builds
* Nginx SPA Routing
* Kubernetes Deployments & Services
* CI/CD Automation
* Modern SaaS UI Design

---

# 🚀 Future Improvements

* Drag & Drop Tasks
* Team Collaboration
* Task Assignment
* Notifications
* Real-Time Updates
* Activity Logs
* Role-Based Access
* Redis Caching

---

# 👨‍💻 Author

Built by Rashi using MERN Stack + DevOps + Cloud Native technologies.

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
