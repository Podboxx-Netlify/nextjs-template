import React, {useEffect, useState} from "react";
import Image from 'next/image'

interface Data {
    data?: string

}

export default function DarkMode() {
    const [theme, setTheme] = useState<string>()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                setTheme('dark')
            } else {
                document.documentElement.classList.remove('dark')
                setTheme('light')
            }
        }
    }, [])

    const handleThemeChange = (theme: string) => {
        localStorage.theme = theme
        setTheme(theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className="text-right mr-10 pb-2">
            {theme === 'dark' ? <>
                <button className="material-icons-outlined md-36" onClick={() => handleThemeChange('light')}>
                    {/*<a className='material-icons-outlined md-36 text-white'>light_mode</a>*/}
                    <Image src={"/light_mode_icon.svg"} alt="light mode" height={30} width={30}/>
                </button></> : <button onClick={() => handleThemeChange('dark')}>
                    {/*<a className='material-icons-outlined text-black'>dark_mode</a>*/}
                <Image src={"/dark_mode_icon.svg"} alt="dark mode" height={30} width={30}/>
                </button>

            }
            {/*<span className="material-icons md-36">face</span>*/}
        </div>
    )
}