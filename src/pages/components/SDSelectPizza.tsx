import React, {Dispatch, SetStateAction} from "react";
import Select, {SingleValue} from "react-select";
import { GoTriangleDown } from 'react-icons/go';

//Style
const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected ? '#EBEBEB' : state.isFocused ? '#F5F5F5' : 'white',
      color: state.isSelected ? 'black' : 'black',
      padding: 15,
      zIndex: 10,
    }),

    menu: (base: any) => ({ ...base, zIndex: 2 })
  }
  

export type SelectOptions = {
    value: string;
    label: string;
};


export type SDKVStringAnyType = { [key: string]: any }

export const SDSelectMagazine : React.FC<{
    fieldName : string,
    placeholder? : string,
    onChange: (newVal: SingleValue<any>) => void
    optionsValues: SelectOptions[],
    value: any,
    labelName?: string,
    error?: string
}> =(props)=>{

   const getOptions = () : SelectOptions[]=>{
        return props.optionsValues.map(item => {
            return {value: item.value, label: item.label}
        })
    }
    return <div className="select">
        <div className="labelName">
            {props.labelName}
        </div>
        <Select
            styles={customStyles}
            name={props.fieldName}
            options={getOptions()}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            isSearchable={false}
            // value = {
            //     props.optionsValues.filter(option => 
            //        option.label === '24 cm')
            //  }

        />
        <div className="error">
            {props.error}
        </div>
            

    </div>
}

