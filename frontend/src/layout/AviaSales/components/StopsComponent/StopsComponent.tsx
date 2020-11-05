import React, { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import styles from './Stops.module.css';
import { CheckboxComponent } from "../../../../common/components";
import { Checkbox } from "../../types";

type StopsComponentProperties = {
    setStops: Dispatch<SetStateAction<number[]>>
};

const stops: Checkbox[] = [
    {name: 'Non-stop', label: 'Non stop', checked: true},
    {name: 'OneStop', label: '1 stop', checked: true},
    {name: 'TwoStops', label: '2 stops', checked: true},
    {name: 'TreeStops', label: '3 stops', checked: false}
];

export const StopsComponent: FunctionComponent<StopsComponentProperties> = props => {
    const [stopsState, setStopsState] = useState<Checkbox[]>(stops);

    const updateState = (newStopsState: Checkbox[]): void => {
        setStopsState(newStopsState);
        props.setStops(getIndicesOfCheckedStops(newStopsState));
    };

    const setCheckboxValue = (index: number, checked: boolean): void => {
        /* If user checks "All" */
        if (index === -1) {
            updateState(mapAllCheckboxesWithNewState(stopsState, checked));
        }

        if (stopsState[index]) {
            stopsState[index].checked = checked;
            updateState([...stopsState]);
        }
    };

    return <div className={styles.container}>
        <div className={styles.stopsHeader}>Stops</div>
        <CheckboxComponent name={'All'} label={'All'} onChange={checked => setCheckboxValue(-1, checked)}/>
        {
            stopsState.map((checkbox, index) => {
                return <CheckboxComponent key={checkbox.name} name={checkbox.name} label={checkbox.label}
                                          checked={checkbox.checked}
                                          onChange={checked => setCheckboxValue(index, checked)}/>
            })
        }
    </div>;
};

function mapAllCheckboxesWithNewState(stopsState: Checkbox[], checked: boolean): Checkbox[] {
    return stopsState.map(item => ({...item, checked}));
}

function getIndicesOfCheckedStops(stopsState: Checkbox[]): number[] {
    const checkedStopsIndices:number[] = [];
    for (let i = 0; i < stopsState.length; i++) {
        if (stopsState[i].checked) {
            checkedStopsIndices.push(i);
        }
    }
    return checkedStopsIndices;
}
