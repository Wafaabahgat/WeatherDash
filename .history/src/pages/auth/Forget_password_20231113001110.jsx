import MetaDate from "@lib/metaDate";
import ForgetPassForm from "@components/form/ForgetPassForm";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 py-32">
      <div className="bg-dark_blue rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
        <MetaDate ttl="ForgetPass - page" disc=" ForgetPassword page" />
        <ForgetPassForm />
      </div>
    </div>
  );
};

export default ForgetPassword;
