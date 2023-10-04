import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Link to={"/"}>Home</Link>
      {!user ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <Link to={"/create-post"}>Create post</Link>
      )}
      <div>
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="32px" alt="" />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
