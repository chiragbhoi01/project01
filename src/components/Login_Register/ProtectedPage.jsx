import { RedirectToSignIn } from '@clerk/clerk-react';

function ProtectedPage() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <div>Welcome to the protected page!</div>;
}
