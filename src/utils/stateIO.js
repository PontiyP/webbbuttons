import {useButtonStore} from "../stores/useButtonStore.js";
import {useTableStore} from "../stores/useTableStore.js";
import {useAppModeStore} from "../stores/useAppModeStore.js";
import {useCommandStore} from "../stores/useCommandStore.js";

const STORAGE_KEY_BUTTON = "button_store_state";
const STORAGE_KEY_TABLE = "table_store_state";
const STORAGE_KEY_MODE = "app_mode_state";
const STORAGE_KEY_COMMAND = "command_store";

const loadAllState = () => {
    const buttonState = localStorage.getItem(STORAGE_KEY_BUTTON);
    const tableState = localStorage.getItem(STORAGE_KEY_TABLE);
    const modeState = localStorage.getItem(STORAGE_KEY_MODE);
    const commandState = localStorage.getItem(STORAGE_KEY_COMMAND);

    if (buttonState) useButtonStore.setState(JSON.parse(buttonState));
    if (tableState) useTableStore.setState(JSON.parse(tableState));
    if (modeState) useAppModeStore.setState(JSON.parse(modeState));
    if (commandState) useCommandStore.setState({ commands: JSON.parse(commandState) });
};

const saveButtonState = (newState) => {
    localStorage.setItem(STORAGE_KEY_BUTTON, JSON.stringify(newState));
};
const saveTableState = (newState) => {
    localStorage.setItem(STORAGE_KEY_TABLE, JSON.stringify(newState));
}
const saveAppModeState = (newState) => {
    localStorage.setItem(STORAGE_KEY_MODE, JSON.stringify(newState));
}
const saveCommandState = (newState) => {
    localStorage.setItem('command_store', JSON.stringify(newState));}

export {loadAllState, saveButtonState, saveTableState, saveAppModeState, saveCommandState};
