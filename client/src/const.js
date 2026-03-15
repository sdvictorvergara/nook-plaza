export const getLoginUrl = () => {
  const url = new URL(`${import.meta.env.VITE_OAUTH_PORTAL_URL}/app-auth`);
  url.searchParams.set("appId", import.meta.env.VITE_APP_ID);
  url.searchParams.set("redirectUri", `${window.location.origin}/api/oauth/callback`);
  url.searchParams.set("state", btoa(`${window.location.origin}/api/oauth/callback`));
  url.searchParams.set("type", "signIn");
  return url.toString();
};
