import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    

    googleLogin().then((data) => {
      
       if (data?.user?.email) {
         const userInfo = {
           email: data?.user?.email,
          name: data?.user?.displayName,
          photo: data?.user?.photoUrl
         };
          
         fetch("https://task-server-fawn.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data?.token);
          });
        }
      });
    };
    
  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;