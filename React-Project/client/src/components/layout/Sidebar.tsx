import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { ROUTES } from '../../constants';
import { cn } from '../../utils';

const Sidebar: React.FC = () => {
  const { sidebarOpen } = useAppSelector((state) => state.ui);

  const navigation = [
    { name: 'Trang chủ', href: ROUTES.HOME, icon: '🏠' },
    { name: 'Dashboard', href: ROUTES.DASHBOARD, icon: '📊' },
    { name: 'Hồ sơ', href: ROUTES.PROFILE, icon: '👤' },
    { name: 'Cài đặt', href: ROUTES.SETTINGS, icon: '⚙️' },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-full bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  )
                }
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && (
                  <span className="ml-3 truncate">{item.name}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
