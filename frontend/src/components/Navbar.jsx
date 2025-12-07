import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { LogOut, MessageCircle, Settings, User, Wand2, Palette } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { isMoodMode, toggleMoodMode } = useThemeStore();

  const handleMoodToggle = () => {
    toggleMoodMode();
    toast.success(isMoodMode ? "Mood Mode Deactivated" : "Mood Mode Activated! 🪄");
  };

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">HappyChat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">

            <button
              className={`btn btn-sm transition-colors ${isMoodMode ? "bg-gradient-to-r from-amber-200 to-pink-300 text-purple-900 border-none hover:from-amber-300 hover:to-pink-400" : "btn-ghost"}`}
              onClick={handleMoodToggle}
              title="Toggle Mood Mode"
            >
              <Wand2 className="w-5 h-5" />
              <span className="hidden sm:inline">Mood Mode</span>
            </button>
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
  `}
            >
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">Themes</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn - sm gap - 2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
