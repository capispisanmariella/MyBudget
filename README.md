MyBudget - Personal Finance Tracker

A simple finance tracking app built with Angular 17 to help you manage your money better.

## Features
- Dashboard with expense category breakdown
- Transaction history with sorting and pagination
- Protected routes with authentication
- Real-time expense calculations
- Responsive design

## Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17.3)

## Getting Started

1. Clone the repository:
- git clone https://github.com/capispisanmariella/MyBudget
- cd mybudget

2. Install packages:
- npm install

3. Start it up:
- ng serve --open
- Open http://localhost:4200 in your browser

4. Open your browser and navigate to `http://localhost:4200`

## Testing Protected Routes
The application uses localStorage for authentication. To test protected routes:

1. Open browser's Developer Tools (F12)
2. Go to Console tab
3. Run these commands:

## Architecture Decisions

1. **Component Structure**
   - Standalone components for better tree-shaking
   - Shared components (StatCard, Card) for reusability
   - Content projection for flexible layouts

2. **Data Flow**
   - Route resolvers pre-fetch transaction data
   - Reactive data updates using Angular's change detection
   - Centralized transaction service

3. **Styling**
   - CSS Grid for responsive layouts
   - Material Design components
   - Mobile-first approach with media queries

## Known Limitations

1. **Authentication**
   - Basic localStorage implementation
   - No session management
   - No secure token storage

2. **Data Management**
   - Mock data only
   - No real-time updates
   - Limited error handling

## Future Improvements

1. **Security**
   - Implement proper authentication
   - Add route guards for specific roles
   - Secure data storage

2. **Features**
   - Add transaction filtering
   - Implement data export
   - Add data visualization
   - Support multiple currencies

## Running Tests
- ng test