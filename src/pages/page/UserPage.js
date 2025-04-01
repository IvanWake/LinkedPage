import UserAvatar from "../../components/UserPage/UserAvatar";
import UserBio from "../../components/UserPage/UserBio";
import Footer from "../../components/Footer/Footer";

const UserPage = () => {

    return (
        <>
            <div className="font-inter">
                <UserAvatar/>
                <UserBio/>
                <Footer/>
            </div>
        </>
    );
}

export default UserPage;