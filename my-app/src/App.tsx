import { Authenticator } from "./screens/Authenticator";
import { Home } from "./pages/Home";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    userPoolId: "your_user_pool_id",
    userPoolWebClientId: "your_user_pool_web_client_id",
    identityPoolId: "your_optional_identity_pool_id",
  },
});

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
    >
      <Authenticator>
        <Home />
      </Authenticator>
    </div>
  );
}

export default App;
