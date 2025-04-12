import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { signInWithGoogle } from "../firebase";

export const MenuItem = ({ icon, label, subLabel, border, semiBorder }) => (
  <div
    className={`flex items-center justify-between py-3 pl-4 hover:bg-[#3C4043] cursor-pointer ${
      semiBorder && "pt-0"
    } ${border && "border-b border-b-[#70757a]"}`}
  >
    <div
      className={`flex gap-4 w-full ${
        subLabel ? "items-start" : "items-center"
      }`}
    >
      <div className={`text-white text-lg ${semiBorder && "pt-3"}`}>{icon}</div>
      <div className="w-full flex flex-col items-start justify-start">
        <p
          className={`text-sm font-medium text-white ${
            semiBorder && "border-t border-t-[#70757a] w-full pt-3 text-left"
          }`}
        >
          {label}
        </p>
        {subLabel && (
          <p className="text-left text-sm mt-3 pt-3 font-medium w-full text-white border-t border-t-[#70757a]">
            {subLabel}
          </p>
        )}
      </div>
    </div>
  </div>
);

export const ResultCard = ({ item, width, className }) => {
  return (
    <div
      key={item.id}
      className={`rounded-lg overflow-hidden text-white ${width}`}
    >
      <img
        src={item.image}
        alt={item.title}
        referrerPolicy="no-referrer"
        className={`w-full rounded-lg max-md:w-[300px] object-cover ${className}`}
      />
      <div className="p-2">
        <div className="font-semibold text-xs line-clamp-2">{item.title}</div>
      </div>
    </div>
  );
};

export const UserAccountCard = ({ setOpen }) => {
  const user = useSelector((state) => state?.data);

  return (
    <main>
      {user && user?.isAuthenticated ? (
        <>
          {user?.profilePicture ? (
            <img
              src={user?.profilePicture}
              alt="Profile"
              className={`h-8 w-8 cursor-pointer rounded-full object-cover`}
              onClick={() => setOpen(true)}
            />
          ) : (
            <div
              onClick={() => setOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-disabled text-base"
            >
              <FaUser className="h-4 w-4 text-gray-400" />
            </div>
          )}
        </>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-[#8ab4f8] px-[23px] py-[9px] whitespace-nowrap rounded-full text-[#202124]"
        >
          Sign In
        </button>
      )}
    </main>
  );
};
