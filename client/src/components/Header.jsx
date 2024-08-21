import { NavLink } from "react-router-dom";
import styles from "../ui/components/navbar/Header.module.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[10vh] p-3 border-b border-slate-400 mb-5">
      <div className={styles.list}>
        <ul className={`flex justify-center items-center`}>
          <div className="flex justify-center items-center mr-5">
            <NavLink
              to="#"
              className="text-indigo-50 hover:text-indigo-50 flex justify-center items-center"
            >
              <img
                className="mx-2"
                src="/Notion_app_logo.png"
                alt="logo"
                height={30}
                width={30}
              />
              Motion
            </NavLink>
          </div>
          <li>
            <NavLink to="">Product</NavLink>
          </li>
          <li>
            <NavLink to="">Download</NavLink>
          </li>
          <li>
            <NavLink to="">Solutions</NavLink>
          </li>
          <li>
            <NavLink to="">Recourses</NavLink>
          </li>
          <li>
            <NavLink to="">Pricing</NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <div className={styles.list}>
          <ul className={`flex justify-center items-center`}>
            <li>
              <NavLink to="">Request a demo</NavLink>
            </li>
            <li className="text-lg">I</li>
            <li>
              <NavLink to="">Login</NavLink>
            </li>
            <li className={styles.listFree} style={{ color: "black" }}>
              <NavLink to="">Get Motion Free</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
