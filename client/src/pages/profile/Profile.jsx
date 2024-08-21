import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="text-center font-bold text-[20px]">
        <h1>Write, plan, share.</h1>
        <h1>With AI at your side.</h1>
      </div>
      <div className="text-[10px] text-center my-5">
        <h1>
          Notion is the connected workspace where better, faster work happens.
        </h1>
      </div>
      <div className="flex justify-center">
        <Link className="me-5 py-2 px-5 bg-slate-700 rounded-lg text-slate-300 hover:text-slate-300">
          Get Notion free →
        </Link>
        <Link className="py-2 px-5 text-slate-300 hover:text-slate-300">
          Request a demo→
        </Link>
      </div>
    </div>
  );
};

export default Profile;
