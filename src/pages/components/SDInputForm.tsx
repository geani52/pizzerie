import React from "react";

type SDInputFormProps = {
    name: string,
    placeholder?: string,
    fieldName?: string,
    type: SDInputFormType
    value: {[key:string]:any},
    className?: string,
    maxLength?: number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: any
}

export enum SDInputFormType{
    text,
}
export const SDInputForm:React.FC<SDInputFormProps> = (props) => {

    const selectType = () => {
        switch(props.type){
            case SDInputFormType.text: return "text"
        }
    }
    return(
        <div className="input">
            <div className="fieldName">
                {props.fieldName}
            </div>
            <input
                name={props.name}
                type={selectType()}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value[props.name]}
                className={`SDInput ${props.className}`}
                maxLength={props.maxLength}
            />
            <div className="error">
                {props.error}
            </div>
        </div>

            
    )
}