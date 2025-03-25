import logo from '/vite.svg'

export default function Header() {
    const timeNow = new Date();
    return (
        <>
            <header>
                <img src={logo} alt=""/>
                <h3>My header</h3>
                <span>Время сейчас: {timeNow.toLocaleTimeString()}</span>
            </header>
        </>
    )
}