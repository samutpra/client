# Notification System Client

A **Next.js frontend application** for testing real-time notifications, CronJob management, and WebSocket systems. This serves as a comprehensive testing interface that demonstrates actual WebSocket usage and real-time functionality.

## 🚀 Features

### Real-time Notification System
- **System Notifications**: Admin can broadcast messages to all users instantly
- **User-to-User Messages**: Direct messaging between specific users
- **Real-time Updates**: All notifications delivered via WebSocket with no page refresh required

### Admin Dashboard
- **CronJob Management**: Create, start, stop, and delete scheduled tasks
- **System Administration**: Full control over notification broadcasting
- **Real-time Monitoring**: Live status updates and activity logging

### Testing Interface
- **WebSocket Status**: Visual connection indicators (🟢 Connected / 🔴 Disconnected)
- **Message Tracking**: Timestamp every WebSocket message with activity counters
- **Live Logging**: Real-time WebSocket message log with JSON formatting

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **WebSocket**: Native WebSocket API (not Socket.IO)
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with CSS variables
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 20+
- Backend notification server running on `http://localhost:5555`
- WebSocket server available at `ws://localhost:5555/ws`

### Environment Setup
1. Copy environment template:
   ```bash
   cp .env.example .env
   ```
2. Update `.env` file with your backend server URLs if different from defaults

### Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:3333
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start

# Or use Docker
docker-compose up -d client
```

## 🐳 Docker Usage

### Basic Commands

#### Production Container
```bash
# Run production build (port 3333)
docker-compose up -d client

# With resource monitoring
docker-compose up -d client && docker stats notification-client
```

#### Development Container
```bash
# Run development mode with hot reload (port 3333)
docker-compose --profile dev up -d client-dev

# View development logs
docker-compose --profile dev logs -f client-dev
```

#### Build and Management
```bash
# Build and start all services
docker-compose up --build

# Stop all services
docker-compose down

# Clean up everything (containers, networks, volumes)
docker-compose down -v --remove-orphans
```

### Advanced Usage

#### Full Stack Development
```bash
# Run with database and cache
docker-compose --profile dev --profile database --profile cache up -d

# Run with nginx proxy
docker-compose --profile proxy up -d
```

#### Production Deployment
```bash
# Production with all services
docker-compose --profile database --profile cache --profile proxy up -d

# Health check all services
docker-compose ps --services | xargs -I {} docker-compose exec {} wget -qO- http://localhost/health 2>/dev/null || echo "{} unhealthy"
```

#### Service Profiles
- **default**: Basic client service only
- **dev**: Development mode with hot reload
- **database**: PostgreSQL database service
- **cache**: Redis cache service
- **proxy**: Nginx reverse proxy

#### Resource Management
```bash
# Monitor resource usage
docker-compose top

# Scale services (if needed)
docker-compose up -d --scale client=2

# View service logs
docker-compose logs -f client
```

## 📡 API Configuration

The application connects to the backend notification system:

- **API Base URL**: `http://localhost:5555`
- **WebSocket URL**: `ws://localhost:5555/ws`
- **Health Check**: Available at `/api/health`

## 👥 Test Users

The system includes three test users from the backend seed data:

- **user1** (admin): alice@example.com - Full admin access
- **user2** (user): bob@example.com - Standard user
- **user3** (user): charlie@example.com - Standard user

## 🧪 Testing Scenarios

### 1. System Notification Broadcasting
1. Open multiple browser tabs/windows
2. Select different users in each tab
3. Use admin user to create system notification
4. Verify all tabs receive notification simultaneously

### 2. User-to-User Messaging
1. Connect as user1 in one tab
2. Connect as user2 in another tab
3. Send user-to-user notification from user1 to user2
4. Verify user2 receives notification in real-time

### 3. CronJob Status Updates
1. Connect as admin user
2. Create, start, or stop a CronJob
3. Verify real-time status updates in the UI
4. Check WebSocket activity log for status messages

## 📁 Project Structure

```
├── app/
│   ├── admin/          # Admin dashboard
│   ├── user/[id]/      # User-specific dashboard
│   ├── api/health/     # Health check endpoint
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # User selection home
├── components/ui/      # shadcn/ui components
├── lib/               # Utilities
├── hooks/             # Custom hooks
├── docker-compose.yml # Container orchestration
├── Dockerfile         # Production container
└── Dockerfile.dev     # Development container
```

## ✅ Success Criteria

The application demonstrates:

- ✅ **Real-time Verification**: Clear visual proof of WebSocket usage
- ✅ **System Broadcasting**: Notifications sent to everyone simultaneously
- ✅ **User-specific Delivery**: Messages sent to specific recipients
- ✅ **Live Status Updates**: CronJob changes appear in real-time
- ✅ **Message Flow Tracking**: Complete visibility with timestamps
- ✅ **Zero Refresh Required**: Everything updates without page reload

## 🔧 Development Commands

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📊 Health Monitoring

The application includes health check endpoints for container monitoring:
- **Endpoint**: `/api/health`
- **Response**: JSON with service status and timestamp
- **Docker Integration**: Used by Docker Compose health checks

---

**Note**: This is the frontend client only. Make sure the backend notification system is running on port 5555 before starting this application.
