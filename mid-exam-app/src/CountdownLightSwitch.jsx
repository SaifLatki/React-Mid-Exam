import { useState, useEffect } from "react";

function CountdownLightSwitch() {
    const [lightMode, setLightMode] = useState(true);
    const [count, setCount] = useState(30);
    const [isActive, setIsActive] = useState(false);

    const toggleTheme = () => {
        setLightMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        let timer;
        if (isActive && count > 0) {
            timer = setTimeout(() => setCount(count - 1), 1000);
        } else if (count === 0) {
            setIsActive(false);
        }
        return () => clearTimeout(timer);
    }, [count, isActive]);

    const handleStartTimer = () => {
        setIsActive(true);
    };

    const handleResetTimer = () => {
        setIsActive(false);
        setCount(30);
    };

    return (
        <div className={`container ${lightMode ? "light" : "dark"}`}>
            <div className="header">
                <h1>Countdown & Light Switch</h1>
                <div className="toggle-container">
                    <label className="toggle-switch">
                        <input type="checkbox" onChange={toggleTheme} checked={!lightMode} />
                        <span className="slider"></span>
                    </label>
                    <span>{lightMode ? "Light Mode" : "Dark Mode"}</span>
                </div>
            </div>

            <div className="timer-section">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${(count / 30) * 100}%` }}></div>
                </div>
                <div className="timer">{count}s</div>
                <div className="btn-group">
                    <button onClick={handleStartTimer} disabled={isActive}>Start Timer</button>
                    <button className="btn-reset" onClick={handleResetTimer}>Reset Timer</button>
                </div>
            </div>
        </div>
    );
}

export default CountdownLightSwitch;
