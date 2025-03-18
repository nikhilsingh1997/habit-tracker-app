import  Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./Pages/HomePage/HomePage";
import { DetailsPage } from "./Pages/DetailsPage/DetailsPage";
import { WeekStatus } from "./Components/WeekStatus/WeekStatus";

function App() {
  const router = createBrowserRouter([
    { path : "/", 
      element : <Navbar/>, 
      children : [
        { index : true, element : <HomePage/> },
        { path : "detailspage", 
          element : <DetailsPage/>, 
          children : [
            { path : ":habitId", element : <WeekStatus/> }
          ]}
    ]}
  ]);



  return (<>
      <RouterProvider router={router} />
      </>
    
  );
};

export default App;
