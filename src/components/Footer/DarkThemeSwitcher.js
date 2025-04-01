import "./Footer.css";
const DarkThemeSwitcher = () => {
    return (
        <div className="flex items-center space-x-2.5">
            <p className="font-onest text-xs font-semibold">Тёмная тема</p>
            <div className="relative w-14 h-8">
                <input type="checkbox" id="dark-toggle" className="hidden"/>

                <label htmlFor="dark-toggle" className="block w-full h-full cursor-pointer">
                    <div
                        className="block border-[1px] border-gray-900 dark:border-white w-full h-full rounded-full bg-switcher transition-colors duration-300"></div>

                    <div
                        className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 transform"></div>
                </label>
            </div>
        </div>
    );
}

export default DarkThemeSwitcher;