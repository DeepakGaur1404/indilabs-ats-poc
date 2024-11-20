import { useState, useEffect } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token")
  );
  console.log("isAuthenticated value", isAuthenticated);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimeStamp = Date.now();
      console.log("currentTimeStamp value", currentTimeStamp);

      const storedTimeStamp = localStorage.getItem("timeStamp");
      console.log("storedTimeStamp value", storedTimeStamp);

      if (storedTimeStamp) {
        const storedTime = parseInt(storedTimeStamp);

        const twelveHoursInMs = 12 * 60 * 60 * 1000; // Twelve hours in milliseconds

        if (currentTimeStamp - storedTime >= twelveHoursInMs) {
          // Clear localStorage and set isAuthenticated to null
          localStorage.clear();
          setIsAuthenticated(null);
        }
      } else {
        // Set the initial timeStamp in localStorage
        localStorage.setItem("timeStamp", currentTimeStamp.toString());
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
