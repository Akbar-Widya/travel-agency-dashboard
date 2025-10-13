import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
   const navigate = useNavigate()

   const handleLogout = async () => {
      await logoutUser();
      navigate("/sign-in");
   };
   return (
      <div className="p-40-semibold flex gap-4 items-center justify-center h-screen max-sm:flex-col">
         <button onClick={handleLogout} className="cursor-pointer flex items-center">
            <img
               src={"/assets/icons/logout.svg"}
               alt="logout"
               className="size-6"
            />
            <p>Logout</p>
         </button>
         <span>|</span>
         <button onClick={() => {navigate('/dashboard')}} className=" btn-class bg-primary-100 text-white p-4 rounded-lg cursor-pointer">
            Go to Dashboard
         </button>
      </div>
   );
};

export default PageLayout;
