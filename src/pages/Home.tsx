import { Outlet } from "react-router";
import DefaultLayout from "../layouts/DefaultLayout";

function Home() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default Home;
