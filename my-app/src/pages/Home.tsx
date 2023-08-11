import { Box, Button } from "@mui/material";
import { useState } from "react";
import { fetchAuthSession } from "aws-amplify/auth";

type AuthSession = Awaited<ReturnType<typeof fetchAuthSession>>;
export const Home = () => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [error, setError] = useState<unknown>(null);
  async function getSession() {
    try {
      const session = await fetchAuthSession({forceRefresh:false});
      console.log(session)
      setSession(session);
    } catch (error) {
      console.log(error)
      setError(error);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "start",
        padding: 1,
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      The user is authenticated
      <Button onClick={getSession}>get session</Button>
    </Box>
  );
};
