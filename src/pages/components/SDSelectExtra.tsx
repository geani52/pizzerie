
export const SDSelectExtra: React.FC<{
    name: string;
    values: { [key: string]: any };
    className? : string;
    onClick?: (event: React.MouseEvent<any>) => void;
    label?: string | JSX.Element;
    isChecked: boolean;
}> = (props) => {

    return <>
        <label  className="mainCheckbox">
            <input
                className={props.className}
                name={props.name}
                type="checkbox"
                value={props.values[props.name] ?? ""}
                onClick={props.onClick}
                defaultChecked={props.isChecked}
            />
            <span className="checkCustom"></span>
            <div className="checkboxLabel"><span>{props.label}</span></div>


        </label>
    </>
}
