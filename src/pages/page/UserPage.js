import UserAvatar from "../../components/UserPage/UserAvatar";
import UserBio from "../../components/UserPage/UserBio";
import Footer from "../../components/Footer/Footer";
import userAvatar from "../../../src/userAvatar.jpg";


const UserPage = () => {

    return (
        <div className="mx-[17px]">
            <div className="font-inter flex flex-col items-center mt-[92px]">
                <UserAvatar userAvatar={userAvatar} userName="Ivan Wake"/>
            </div>
            <UserBio/>
            <Footer/>
        </div>
    );
}

export default UserPage;