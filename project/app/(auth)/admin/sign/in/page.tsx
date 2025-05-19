import AdminAuthCover from "components/auth/admin/adminAuthCover";
import LoginForm from "components/form/loginForm";

export default function SignIn() {
  return (
    <div className="w-screen h-screen flex">
      <AdminAuthCover />
      <section className="w-xl shrink-0">
        <LoginForm />
      </section>
    </div>
  );
}
