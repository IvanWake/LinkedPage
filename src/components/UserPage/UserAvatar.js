
const UserAvatar = ({ userAvatar, userName }) => {
    return (
        <div className="flex flex-col justify-center text-center space-y-5">
            <img className="rounded-full w-[150px] h-[150px]" src={userAvatar} alt="user avatar" />
            <h1 className="text-2xl font-semibold">{userName}</h1>
        </div>
    );
}

export default UserAvatar;