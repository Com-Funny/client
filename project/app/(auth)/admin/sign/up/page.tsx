import AdminAuthCover from "components/auth/admin/adminAuthCover";
import JoinForm from "components/form/joinForm";

export default function SignUp() {
  return (
    <div className="w-screen h-screen flex">
      <AdminAuthCover />
      <section className="w-xl shrink-0">
        <JoinForm />
      </section>
    </div>
  );
}
