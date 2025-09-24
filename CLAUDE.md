# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Notification System Client** - a Next.js frontend application for testing real-time notifications, CronJob management, and WebSocket systems. It serves as a testing interface that demonstrates actual WebSocket usage and real-time functionality.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production with Turbopack
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Docker Commands
```bash
# Production build and run
docker-compose up -d client

# Development mode with hot reload
docker-compose --profile dev up -d client-dev

# Build and run both services
docker-compose up -d

# Stop all services
docker-compose down

# Rebuild containers
docker-compose up --build
```

### Key Backend Dependencies
- **Server**: http://localhost:3001 (notification system backend)
- **WebSocket**: ws://localhost:3001/ws
- **API Documentation**: http://localhost:3001/swagger

## Architecture

### App Router Structure
- `/` - User selection home page (fetches available users from backend)
- `/admin` - Full-featured admin dashboard for system notifications and CronJob management
- `/user/[id]` - User-specific dashboard for notifications and user-to-user messaging

### Core Components
- **WebSocket Integration**: All pages auto-connect to WebSocket for real-time updates
- **Notification System**: Supports both system-wide and user-to-user notifications
- **CronJob Management**: Admin interface for creating, managing, and monitoring scheduled tasks
- **Real-time Activity**: Live WebSocket message logging and notification display

### UI Framework
- **shadcn/ui components** (New York style with Radix UI primitives)
- **Tailwind CSS** with `@/` path aliases
- **Lucide React** icons
- **React Hook Form** with Zod validation
- **date-fns** for date handling

### Key Features

#### Real-time Verification System
1. **Visual connection indicators**: 🟢 Connected / 🔴 Disconnected / 🟡 Connecting
2. **Message tracking**: Timestamps on every WebSocket message
3. **Activity counters**: Track WebSocket message count and notification count
4. **Live updates**: No page refresh required for any functionality

#### Testing Scenarios Supported
1. **System Notification Broadcasting**: Admin can send to all users simultaneously
2. **User-to-User Notifications**: Direct messaging between specific users
3. **CronJob Status Updates**: Real-time status changes for scheduled tasks

### Data Flow
1. **User Selection** → Fetch available users from `/` API endpoint
2. **WebSocket Connection** → Auto-register with userId for targeted messaging
3. **Real-time Updates** → All notifications and status changes arrive via WebSocket
4. **Activity Logging** → All WebSocket messages logged with timestamps

### Test Users (from backend seed data)
- **user1** (admin): alice@example.com - Full admin access
- **user2** (user): bob@example.com - Standard user
- **user3** (user): charlie@example.com - Standard user

## Development Notes

### WebSocket Implementation
- Uses native WebSocket API (not Socket.IO)
- Auto-reconnection logic for connection stability
- Message type handling for notifications, status updates, and system messages
- Registration system using userId for targeted messaging

### Form Management
- React Hook Form for complex forms (admin CronJob creation)
- Simple useState for basic notification forms
- Zod validation for data integrity
- Date/time pickers for scheduling functionality

### Real-time State Management
- Local state management with useState/useEffect
- WebSocket message handlers update UI immediately
- Separate state for notifications, messages, and connection status
- Auto-scroll behavior for message logs

## Docker Configuration

### Container Services
- **client** (production): Optimized Next.js build with standalone output
- **client-dev** (development): Hot reload development environment

### Docker Features
- **Multi-stage builds**: Optimized production images
- **Health checks**: Container health monitoring via `/api/health`
- **Volume mounting**: Development mode with live code updates
- **Network isolation**: Custom bridge network for service communication
- **Environment variables**: Configurable API endpoints

### Port Configuration
- **Client Production**: Port 6666 (mapped from container port 3000)
- **Client Development**: Port 3000
- **Backend**: Port 5555 (external dependency)
- **WebSocket**: ws://localhost:5555/ws

## Success Criteria
The application must demonstrate:
- ✅ Clear visual proof that WebSocket is being used (connection status, message counts)
- ✅ System notifications broadcast to all connected users instantly
- ✅ User-to-user notifications delivered to specific recipients
- ✅ CronJob status updates appear in real-time for admin users
- ✅ Complete message flow visibility with timestamps
- ✅ No page refreshes required for any real-time functionality
- to memorize