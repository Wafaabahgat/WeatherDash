import MetaDate from "../../lib/metaDate";
import ResetPassForm from "../../components/form/reset";

const ResetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 py-32">
      <div className="bg-dark_blue rounded-2xl shadow-2xl flex flex-row max-w-[800px] ">
        <MetaDate ttl="ResetPass - page" disc=" ResetPassword page" />
        <ResetPassForm />
      </div>
    </div>
  );
};

export default ResetPassword;
