import Grid from "../modules/Grid.jsx";
import ButtonStyler from "../modules/ButtonStyler.jsx";
import GridSettings from "../modules/GridSettings.jsx";
import CommandEditor from "../modules/CommandEditor.jsx";

const EditMode = () => {
    return (
        <div className="w-screen flex flex-col lg:flex-row px-2">
            <section className="w-full lg:w-1/2">
                <GridSettings/>
                <ButtonStyler/>
                <Grid/>
            </section>
            <section className="w-full lg:w-1/2">
                <CommandEditor/>
            </section>
        </div>
    );
};

export default EditMode;
