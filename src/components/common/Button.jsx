//
// import { useAppModeStore } from "../../stores/useAppModeStore.js";
// import {useEffect, useMemo} from "react";
// import { replaceTemplate } from "../../utils/template.js";
// import {useButtonStore} from "../../stores/useButtonStore.js";
//
// const Button = ({
//                     id,
//                     title,
//                     bgColor,
//                     bgImg,
//                     brdrColor,
//                     vAlign,
//                     hAlign,
//                     textSize,
//                     textColor,
//                     onClick,
//                     disable,
//                     dynamicData
//                 }) => {
//     const { scaleFactor , mode} = useAppModeStore();
//     const { buttons } = useButtonStore();
//     const buttonSettings = buttons[id] || {};
//     const { autoRepeat, interval } = buttonSettings;
//
//     const renderedTitle = useMemo(() => {
//         return dynamicData ? replaceTemplate(title, dynamicData) : title;
//     }, [title, dynamicData]);
//
//     useEffect(() => {
//         if (mode !== "play" || !autoRepeat) return;
//
//         const timer = setInterval(() => {
//             onClick();
//         }, interval);
//
//         return () => clearInterval(timer); // чистим интервал
//     }, [autoRepeat, interval, mode, onClick]);
//
//     return (
//         <div className="button-container w-full h-full overflow-hidden">
//             <button
//                 id={id}
//                 style={{
//                     backgroundColor: bgColor,
//                     backgroundImage: bgImg ? `url(${bgImg})` : "none",
//                     borderColor: brdrColor,
//                     cursor: disable ? "not-allowed" : "pointer",
//                     opacity: disable ? 0 : 1,
//                 }}
//                 disabled={disable}
//                 className="
//                     flex w-full h-full
//                     border-2 rounded-md
//                     active:border-[6px] active:rounded-xl
//                     transition-all duration-200
//                     bg-cover bg-center
//                 "
//                 onClick={onClick}
//             >
//                 <span
//                     className={`flex ${hAlign} ${vAlign} w-full whitespace-normal break-words overflow-hidden`}
//                     style={{
//                         color: textColor,
//                         fontSize: `calc(${textSize} * ${scaleFactor})`,
//                         wordBreak: "break-word",
//                     }}
//                 >
//                     {renderedTitle}
//                 </span>
//             </button>
//         </div>
//     );
// };
//
// export default Button;


import { useAppModeStore } from "../../stores/useAppModeStore.js";
import {useEffect, useMemo} from "react";
import { replaceTemplate } from "../../utils/template.js";
import {useButtonStore} from "../../stores/useButtonStore.js";

const Button = ({
                    id,
                    title,
                    bgColor,
                    bgImg,
                    brdrColor,
                    vAlign,
                    hAlign,
                    textSize,
                    textColor,
                    onClick,
                    disable,
                    dynamicData
                }) => {
    const { scaleFactor , mode} = useAppModeStore();
    const { buttons } = useButtonStore();
    const buttonSettings = buttons[id] || {};
    const { autoRepeat, interval } = buttonSettings;

    const renderedTitle = useMemo(() => {
        return dynamicData ? replaceTemplate(title, dynamicData) : title;
    }, [title, dynamicData]);

    useEffect(() => {
        if (mode !== "play" || !autoRepeat) return;

        const timer = setInterval(() => {
            onClick();
        }, interval);

        return () => clearInterval(timer); // чистим интервал
    }, [autoRepeat, interval, mode, onClick]);

    return (
        <div className="button-container w-full h-full overflow-hidden">
            <button
                id={id}
                style={{
                    backgroundColor: bgColor,
                    backgroundImage: bgImg ? `url(${bgImg})` : "none",
                    borderColor: brdrColor,
                    cursor: disable ? "not-allowed" : "pointer",
                    opacity: disable ? 0 : 1,
                }}
                disabled={disable}
                className="
                    flex w-full h-full
                    border-2 rounded-md
                    active:border-[6px] active:rounded-xl
                    transition-all duration-200
                    bg-cover bg-center
                "
                onClick={onClick}
            >
                <span
                    className={`flex ${hAlign} ${vAlign} w-full whitespace-normal break-words overflow-hidden`}
                    style={{
                        color: textColor,
                        fontSize: `calc(${textSize} * ${scaleFactor})`,
                        wordBreak: "break-word",
                    }}
                >
                    {renderedTitle}
                </span>
            </button>
        </div>
    );
};

export default Button;
