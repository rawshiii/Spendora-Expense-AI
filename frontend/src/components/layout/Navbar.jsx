import {
  Search,
  User,
  LogOut,
} from 'lucide-react';

import {
  useNavigate,
} from 'react-router-dom';

import { useState } from 'react';

export default function Navbar() {
  const navigate =
    useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  const logout = () => {
    localStorage.removeItem(
      'token'
    );

    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-[#2F3A2F]">
          Spendora - ExpenseAI
        </h1>

        <p className="text-slate-500 mt-1">
          Budget smarter. Spend
          happier.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}

        <div
          className="
          flex
          items-center
          gap-3
          bg-white
          border
          border-[#E5E7EB]
          rounded-2xl
          px-4
          py-3
          shadow-sm
          "
        >
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search..."
            className="
            bg-transparent
            outline-none
            text-[#2F3A2F]
            "
          />
        </div>

        {/* Profile */}

        <div className="relative">
          <button
            onClick={() =>
              setShowMenu(
                !showMenu
              )
            }
            className="
            w-12
            h-12
            rounded-2xl
            bg-white
            border
            border-[#E5E7EB]
            shadow-sm
            flex
            items-center
            justify-center
            hover:bg-[#EEF2EA]
            transition-all
            "
          >
            <User
              size={20}
              className="
              text-[#5F7A61]
              "
            />
          </button>

          {showMenu && (
            <div
              className="
              absolute
              right-0
              mt-3
              w-48
              bg-white
              border
              border-[#E5E7EB]
              rounded-2xl
              shadow-lg
              overflow-hidden
              z-50
              "
            >
              <button
                onClick={() =>
                  navigate(
                    '/profile'
                  )
                }
                className="
                w-full
                text-left
                px-4
                py-3
                hover:bg-[#EEF2EA]
                "
              >
                View Profile
              </button>

              <button
                onClick={logout}
                className="
                w-full
                text-left
                px-4
                py-3
                text-red-500
                hover:bg-red-50
                flex
                items-center
                gap-2
                "
              >
                <LogOut
                  size={16}
                />

                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}