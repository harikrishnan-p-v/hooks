import { RouterProvider } from "react-router";
import routes from "./router/routes";

export default function App() {
  return <RouterProvider router={routes} />;
}
