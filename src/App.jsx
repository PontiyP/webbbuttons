
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {loadAllState} from "./utils/stateIO.js";
import {useAppModeStore} from "./stores/useAppModeStore.js";
import EditMode from "./components/pages/EditMode";
import PlayMode from "./components/pages/PlayMode";
import SwitchMode from "./icons/SwitchMode.jsx";

function App() {
    // const loadState = useButtonStore((state) => state.loadState);
    const {mode, setMode} = useAppModeStore();

    useEffect(() => {
        loadAllState();
    }, []);

    return (
        <Router>
                <button
                    onClick={() => setMode(mode === "edit" ? "play" : "edit")}
                >
                    <SwitchMode color="darkBlue" size={"1.2vw"} className={"m-1"}/>
                </button>

            <Routes>
                <Route path="/" element={mode === "edit" ? <EditMode/> : <PlayMode/>}/>
            </Routes>
        </Router>
    );
}

export default App;
