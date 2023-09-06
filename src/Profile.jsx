import { Outlet, Link, useParams, useResolvedPath } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";
const Profile = () => {
    const { name } = useParams();
    return (
        <div>
            <h1>Hello from profile page</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {/* <Link to="spinach">Spinach</Link>
            <br />
            <Link to="popeye">Popeye</Link>
            <Outlet /> */}

            {name === "popeye" ? (<Popeye />)
                : name === "spinach" ? (<Spinach />)
                    : (<DefaultProfile />)
            }
        </div>
    )
}

export default Profile;