import DarkThemeSwitcher from "./DarkThemeSwitcher";

const Footer = () => {
    return (
        <div className="flex items-center justify-between fixed bottom-0 right-0 left-0 text-center px-[17px] py-[13px]">
            <div className="font-onest font-semibold text-xs text-footerText ">&copy; LinkedPage</div>
            <DarkThemeSwitcher />
        </div>
    );
}

export default Footer;
