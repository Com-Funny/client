import ClientAuthCover from "components/auth/client/clientAuthCover";
import JoinForm from "components/form/joinForm";

export default function SignUp() {
  return (
    <div className="w-screen h-screen flex">
      <ClientAuthCover />
      <section className="w-xl shrink-0">
        <JoinForm />
      </section>
    </div>
  );
}
