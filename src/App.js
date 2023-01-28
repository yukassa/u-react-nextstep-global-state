import { RecoilRoot } from "recoil";
import { UserProvider } from "./provider/UserProvider";
import { RecoilRoot } from "recoil";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
