# Tasks - NothingOS Inspired TODO App

A premium, minimalistic task management application inspired by NothingOS design philosophy. Built with React and featuring smooth animations, intelligent organization, and a clean black-and-white aesthetic.

## ✨ Features

### Core Functionality

- **Smart Task Management** - Add, complete, and delete tasks with ease
- **Category Organization** - Organize tasks into Personal, Work, and Others
- **Priority System** - Mark tasks as urgent with visual indicators
- **Intelligent Filtering** - Filter by category, urgency, or completion status
- **Persistent Storage** - All tasks automatically saved to localStorage

### Design & UX

- **NothingOS Aesthetic** - Pure black and white minimalistic design
- **Smooth Animations** - Micro-interactions and fluid transitions throughout
- **Two-Panel Layout** - Clean separation of input controls and task display
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Accessibility First** - ARIA labels, keyboard navigation, and screen reader support

### Advanced Features

- **Real-time Statistics** - Live counters for total, urgent, and category-specific tasks
- **Smart Sorting** - Automatic prioritization (urgent → incomplete → newest)
- **Staggered Animations** - Cascading entrance effects for multiple items
- **Visual Feedback** - Hover effects, ripple animations, and state transitions
- **Error Handling** - Graceful handling of localStorage errors and edge cases

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tasks-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - Ejects from Create React App (⚠️ one-way operation)

## 🏗️ Architecture

### Project Structure

```
src/
├── components/
│   ├── TodoForm.js          # Task input form with category/priority selection
│   ├── TodoForm.css         # Form styling with animations
│   ├── TodoItem.js          # Individual task item component
│   ├── TodoItem.css         # Task item styling and animations
│   ├── TodoList.js          # Task list container with sorting
│   └── TodoList.css         # List layout and staggered animations
├── App.js                   # Main application component
├── App.css                  # Global layout and theme
├── index.js                 # Application entry point
└── index.css                # Base styles and typography
```

### Component Hierarchy

```
App
├── TodoForm (Left Panel)
│   ├── Task Input
│   ├── Category Selector
│   └── Priority Toggle
└── TodoList (Right Panel)
    ├── Filter Tabs
    ├── List Header
    └── TodoItem[]
```

## 🎨 Design System

### Color Palette

- **Primary Background**: `#000000` (Pure Black)
- **Secondary Background**: `#0a0a0a` (Near Black)
- **Border Colors**: `#111111`, `#1a1a1a`, `#333333`
- **Text Primary**: `#ffffff` (Pure White)
- **Text Secondary**: `#cccccc`, `#666666`
- **Accent Colors**:
  - Personal: `#4CAF50` (Green)
  - Work: `#2196F3` (Blue)
  - Others: `#FF9800` (Orange)
  - Urgent: `#ff4444` (Red)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Scale**: 10px - 28px with consistent spacing

### Animation Principles

- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural motion
- **Duration**: 200-400ms for micro-interactions, 2-3s for ambient animations
- **Staggering**: 50ms delays for list items to create cascading effects

## 🔧 Performance Optimizations

### React Optimizations

- **React.memo** - All components wrapped to prevent unnecessary re-renders
- **useCallback** - Event handlers memoized to maintain referential equality
- **useMemo** - Expensive computations cached (filtering, sorting, statistics)
- **Functional Updates** - State updates use functional form to avoid stale closures

### Code Quality

- **Error Boundaries** - Graceful handling of localStorage parsing errors
- **Accessibility** - Comprehensive ARIA labels and semantic HTML
- **Type Safety** - PropTypes validation for component interfaces
- **Performance Monitoring** - React DevTools compatible for profiling

### Bundle Optimization

- **Tree Shaking** - Only used parts of libraries included
- **Code Splitting** - Components loaded on demand
- **Asset Optimization** - CSS animations use GPU acceleration
- **Minimal Dependencies** - Pure React implementation without heavy libraries

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (Full two-panel layout)
- **Tablet**: 768px-1023px (Adjusted panel widths)
- **Mobile**: <768px (Stacked single-column layout)

## 🎯 Usage Guide

### Adding Tasks

1. Type your task in the input field
2. Select a category (Personal, Work, Others)
3. Toggle urgent priority if needed
4. Click "Add Task" or press Enter

### Managing Tasks

- **Complete**: Click the checkbox to mark as done
- **Delete**: Click the × button to remove
- **Filter**: Use the filter tabs to view specific categories or states

### Keyboard Shortcuts

- **Enter**: Submit new task
- **Tab**: Navigate between form elements
- **Space**: Toggle checkboxes and buttons
- **Escape**: Clear form input

## 🔮 Future Enhancements

### Planned Features

- **Due Dates** - Calendar integration for deadline management
- **Subtasks** - Nested task hierarchies
- **Tags** - Custom labeling system beyond categories
- **Search** - Full-text search across all tasks
- **Export/Import** - JSON/CSV data portability
- **Themes** - Additional color schemes while maintaining minimalism

### Technical Improvements

- **PWA Support** - Offline functionality and app installation
- **Cloud Sync** - Cross-device synchronization
- **Keyboard Shortcuts** - Advanced hotkey system
- **Drag & Drop** - Reordering and priority management
- **Undo/Redo** - Action history management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Add proper TypeScript types for new features
- Include accessibility considerations in all UI changes
- Test on multiple screen sizes and devices
- Maintain the minimalistic design philosophy

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Nothing** - Design inspiration from NothingOS
- **Inter Font** - Typography by Rasmus Andersson
- **React Team** - Framework and development tools
- **Create React App** - Build tooling and configuration

---

**Built with ❤️ and attention to detail**.
