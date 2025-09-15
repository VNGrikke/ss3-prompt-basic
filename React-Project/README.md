# React Project - Refactored

Đây là một dự án React được refactor với các best practices hiện đại, sử dụng TypeScript, Redux Toolkit, Tailwind CSS và các công nghệ tiên tiến khác.

## 🚀 Tính năng

- ⚡ **React 18** với TypeScript
- 🎨 **Tailwind CSS** cho styling
- 🔄 **Redux Toolkit** cho state management
- 🛣️ **React Router v6** cho routing
- 🔒 **Authentication** với JWT
- 📱 **Responsive Design**
- 🎯 **Error Boundary** và error handling
- 🔔 **Toast Notifications**
- 🎭 **Modal Components**
- 🎨 **Custom Hooks**
- 📊 **Performance Optimization**

## 📁 Cấu trúc dự án

```
React-Project/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/         # UI components (Button, Input, Modal, etc.)
│   │   │   ├── layout/     # Layout components (Header, Sidebar, Layout)
│   │   │   └── ErrorBoundary.tsx
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── store/          # Redux store và slices
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   ├── constants/      # App constants
│   │   └── App.tsx
│   ├── package.json
│   └── tailwind.config.js
└── server/                 # JSON Server API
    ├── db.json            # Mock database
    └── package.json
```

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm hoặc yarn

### Cài đặt dependencies

```bash
# Cài đặt dependencies cho client
cd client
npm install

# Cài đặt dependencies cho server
cd ../server
npm install
```

### Chạy ứng dụng

```bash
# Terminal 1: Chạy JSON Server
cd server
npm start

# Terminal 2: Chạy React app
cd client
npm run dev
```

Ứng dụng sẽ chạy tại:
- Frontend: http://localhost:5173
- API: http://localhost:8080

## 🎯 Các tính năng chính

### 1. Authentication System
- Đăng nhập/Đăng ký
- JWT token management
- Protected routes
- User profile management

### 2. State Management
- Redux Toolkit với slices
- Async thunks cho API calls
- Persistent state với localStorage

### 3. UI Components
- Button với nhiều variants
- Input với validation
- Modal với keyboard navigation
- Toast notifications
- Loading spinners
- Error boundaries

### 4. Custom Hooks
- `useAuth` - Authentication logic
- `useLocalStorage` - Local storage management
- `useDebounce` - Debounced values
- `useApi` - API call management

### 5. Performance Optimizations
- React.memo cho components
- useMemo và useCallback
- Lazy loading
- Code splitting

## 🔧 Cấu hình

### Environment Variables
Tạo file `.env` trong thư mục `client`:

```env
VITE_API_URL=http://localhost:8080
VITE_APP_NAME=React Project
VITE_APP_VERSION=1.0.0
```

### Tailwind CSS
Dự án sử dụng Tailwind CSS với cấu hình tùy chỉnh trong `tailwind.config.js`.

### TypeScript
Cấu hình TypeScript strict mode với các rules tối ưu cho React development.

## 📚 API Endpoints

JSON Server cung cấp các endpoints:

- `GET /users` - Lấy danh sách users
- `POST /users` - Tạo user mới
- `GET /users/:id` - Lấy user theo ID
- `PUT /users/:id` - Cập nhật user
- `DELETE /users/:id` - Xóa user

Tương tự cho `posts` và `categories`.

## 🧪 Testing

```bash
# Chạy tests
npm run test

# Chạy tests với coverage
npm run test:coverage

# Chạy linting
npm run lint
```

## 🚀 Build và Deploy

```bash
# Build production
npm run build

# Preview build
npm run preview
```

## 📝 Scripts

### Client Scripts
- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

### Server Scripts
- `npm start` - Chạy JSON Server

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team cho framework tuyệt vời
- Redux team cho state management
- Tailwind CSS team cho utility-first CSS
- Vite team cho build tool nhanh
