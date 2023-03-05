import React from 'react';
import { Divider, Tooltip} from 'antd';


function DamageFormula() {
    return (
        <div>
            <Divider/>
            <Tooltip title="Damage Calculate Formula:">
                <span>Melee Weapons:</span>
                {/*<p>LBG & HBG:</p>*/}
                {/*<p>Bow:</p>*/}
            </Tooltip>
        </div>
    );
}

export default DamageFormula;