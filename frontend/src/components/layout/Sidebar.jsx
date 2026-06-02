import {
  LayoutDashboard,
  PieChart,
  Wallet,
  Target,
  Calendar,
  LogOut,
} from 'lucide-react';

import {
  NavLink,
  useNavigate,
} from 'react-router-dom';

import Logo from '../ui/Logo';

const items = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/',
  },

  {
    icon: PieChart,
    label: 'Analytics',
    path: '/analytics',
  },

  {
    icon: Wallet,
    label: 'Budgets',
    path: '/budgets',
  },

  {
    icon: Target,
    label: 'Goals',
    path: '/goals',
  },

  {
    icon: Calendar,
    label: 'Calendar',
    path: '/calendar',
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside
      className="
      w-72
      bg-white
      border-r border-#E7E7E7
      border-#E5E7EB
      shadow-sm
      flex
      flex-col
      justify-between
      p-6
      "
    >
      <div>
        <Logo />

        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                font-medium
                transition-all
                duration-300
                ${
                  isActive
                    ? 'bg-[#EAF2E6] text-[#5F7A61]'
                    : 'text-[#374151] hover:bg-[#EEF2EA]'
                }
                `
              }
            >
              <item.icon size={20} />

              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <button
        onClick={logout}
        className="
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-2xl
        text-red-500
        hover:bg-red-50
        transition-all
        duration-300
        "
      >
        <LogOut size={20} />

        <span>Logout</span>
      </button>
    </aside>
  );
}