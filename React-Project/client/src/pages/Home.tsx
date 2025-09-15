import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Chào mừng đến với React Project
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Đây là một dự án React được refactor với TypeScript, Redux Toolkit, 
          Tailwind CSS và các best practices hiện đại.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to={ROUTES.DASHBOARD}>
            <Button variant="primary" size="lg">
              Xem Dashboard
            </Button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <Button variant="outline" size="lg">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Hiệu suất cao
          </h3>
          <p className="text-gray-600">
            Được tối ưu hóa với React 18, Vite và các kỹ thuật performance hiện đại.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Bảo mật
          </h3>
          <p className="text-gray-600">
            Xác thực và phân quyền an toàn với JWT và các biện pháp bảo mật tốt nhất.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            UI/UX đẹp
          </h3>
          <p className="text-gray-600">
            Giao diện hiện đại và responsive với Tailwind CSS và các component tái sử dụng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
