import React, { FunctionComponent } from 'react';
import styles from './CheckboxComponent.module.css';

type CheckboxProperties = {
    name: string,
    label: string,
    checked?: boolean,
    onChange: (checked: boolean) => void
}

export const CheckboxComponent: FunctionComponent<CheckboxProperties> = props => {
    const onChange = (event: { target: { checked: boolean; }; }) => {
        return props.onChange(event.target.checked)
    };
    return <div className={styles.checkbox}>
        <label htmlFor={props.name}>
            <input onChange={onChange} checked={props.checked} type="checkbox"
                   id={props.name} name={props.name}/>
            <span className={styles.arrowBox}>
            </span>
            <span className={styles.labelText}>{props.label}</span>
        </label>
    </div>;
};
