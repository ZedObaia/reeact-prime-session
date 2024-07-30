import React, {useState} from 'react';
import {Calendar} from 'primereact/calendar';
import {PrimeIcons} from 'primereact/api';


export default function BricksDatePicker({showIcon, selectionMode = "single", placeholder}) {
    const [date, setDate] = useState(null);

    return <div
        className="border rounded-sm py-px outline-none bg-base border-action-secondary px-3 bricks-input
                   flex flex-row space-x-2 h-12">
        <Calendar
            value={date}
            onChange={(e) => setDate(e.value)} showIcon={showIcon}
            icon={PrimeIcons.CALENDAR}
            iconPos="right"
            selectionMode={selectionMode}
            placeholder={placeholder}
        />
    </div>
}
