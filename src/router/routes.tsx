import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import UseStateHook from "../components/UseStateHook";
import UseEffectHook from "../components/UseEffectHook";
import UseRefHook from "../components/UseRefHook";
import UseMemoHook from "../components/UseMemoHook";
import UseCallbackHook from "../components/UseCallbackHook";
import UseContextHook from "../components/UseContextHook";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/useState",
          element: <UseStateHook />,
        },
        {
          path: "/useEffect",
          element: <UseEffectHook />,
        },
        {
          path: "/useRef",
          element: <UseRefHook />,
        },
        {
          path: "/useMemo",
          element: <UseMemoHook />,
        },
        {
          path: "/useCallback",
          element: <UseCallbackHook />,
        },
        {
          path: "/useContext",
          element: <UseContextHook />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/hooks",
  }
);

export default routes;
