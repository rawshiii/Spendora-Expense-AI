import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

import useProfile from '../hooks/useProfile';

export default function Profile() {
  const profile =
    useProfile();

  return (
    <div className="flex min-h-screen bg-[#F6F8F4]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <div
          className="
          bg-white
          border
          border-[#E5E7EB]
          rounded-3xl
          p-8
          shadow-sm
          max-w-3xl
          "
        >
          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          {!profile ? (
            <p>Loading...</p>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="text-slate-500">
                  Name
                </p>

                <p className="text-xl font-semibold">
                  {profile.name}
                </p>
              </div>

              <div>
                <p className="text-slate-500">
                  Email
                </p>

                <p className="text-xl font-semibold">
                  {profile.email}
                </p>
              </div>

              <div>
                <p className="text-slate-500">
                  Member Since
                </p>

                <p className="text-xl font-semibold">
                  {new Date(
                    profile.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-slate-500">
                  Account Type
                </p>

                <p className="text-xl font-semibold">
                  Standard User
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}