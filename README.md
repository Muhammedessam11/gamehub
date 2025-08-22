# GameHub

GameHub is a web application that allows users to sign up, log in, and play multiplayer games like Tic-Tac-Toe. It provides authentication, a leaderboard system, and a simple UI to interact with the backend API.

## Features

- **User Authentication:** Sign up and log in using JWT tokens.
- **Multiplayer Games:** Currently supports Tic-Tac-Toe, easily extendable for more games.
- **Leaderboard:** Displays scores and rankings for players.
- **Health Monitoring:** API health check endpoint for monitoring.
- **Responsive UI:** Simple and clean interface built with React.

## Tech Stack

- **Frontend:** React, Fetch API, Nginx for serving static files.
- **Backend:** Node.js, Express.js.
- **Database:** MySQL.
- **Authentication:** JWT.
- **Deployment:** Docker & Kubernetes (NodePort services for external access).

## API Endpoints

- `GET /api/health` – Check backend health.
- `POST /api/auth/signup` – Register a new user.
- `POST /api/auth/login` – Authenticate user and return JWT.
- `GET /api/games/scores/:gameName` – Get leaderboard scores.

  
## Environment Variables

### Backend `.env`
- PORT=5000
- DB_HOST=mysql
- DB_USER=root
- DB_PASSWORD=root
- DB_NAME=gamehub
- JWT_SECRET=supersecretkey

  ## Deployment with Docker & Kubernetes :
  ### 1. Build Docker Images:
  ```bash
   docker build -t your-dockerhub-user/frontend-gamehub ./frontend
   docker build -t your-dockerhub-user/backend-gamehub ./backend
  ### 2. Push Images:
   ```bash
   docker push your-dockerhub-user/frontend-gamehub
   docker push your-dockerhub-user/backend-gamehub

  ### 3.Apply Kubernetes Manifests:
  ```bash
   kubectl apply -f k8s/
  
 
