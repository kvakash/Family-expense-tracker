import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "./UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
      <form>
                <h1>Famil head</h1>
                <input type="text" placeholder="Expense" />
            
            
                <input type="text" placeholder="Amount" />
            <input type="submit"  value="Add"/>  
      </form>
      <br />
        {user && user.email}
      </div>
      <div>
        <Button  onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;