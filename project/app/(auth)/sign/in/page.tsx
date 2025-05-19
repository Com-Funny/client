import ClientAuthCover from "components/auth/client/clientAuthCover";
import LoginForm from "components/form/loginForm";

export default function SignIn() {
  return (
    <div className="w-screen h-screen flex">
      <ClientAuthCover />
      <section className="w-xl shrink-0">
        <LoginForm />
      </section>
    </div>
  );
}
