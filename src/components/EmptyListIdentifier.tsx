import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

const EmptyListIdentifier = () => {
  const { user } = useAuth();

  return (
    <div className="border h-[150px] rounded-tl-3xl rounded-br-3xl mt-2 flex flex-col justify-center items-center">
      <span className="text-xl shadow-xl">My List</span>
      <span className="flex gap-1">
        Nothing Yet!{"  "}
        {!user && (
          <div>
            {" "}
            <Link className=" text-yellow-500" to="/login">
              Login{" "}
            </Link>
            and
          </div>
        )}
        Create your List.
      </span>
    </div>
  );
};

export default EmptyListIdentifier;
