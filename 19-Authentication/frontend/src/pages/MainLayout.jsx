import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import MainNavigation from "./../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";
const MainLayout = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, {
        action: "/logout",
        method: "post",
      });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, {
        action: "/logout",
        method: "post",
      });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
