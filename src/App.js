import React, {useState, useEffect} from 'react';
import LanguageWeapon from "./components/LanguageWeapon";
import DamageFormula from "./components/DamageFormula";

import Item from './components/Item';


function App() {
    const [languageVersion, setLanguageVersion] = useState(0);
    const [weapon, setWeapon] = useState('LS');

    return (
        <div>
            <h1>MH Rise: SunBreak - Damage Calculator</h1>
            <LanguageWeapon />
            <DamageFormula />
            {/*<DamageResult/>*/}
            {/*<HitZone />*/}
            {/*<Critical />*/}
            {/*<Skill />*/}
            {/*<SwitchSkill />*/}
            {/*<Melody />*/}
            {/*<Dango />*/}
            <Item />
            {/*<MonsterStatus />*/}
        </div>
    );
}

export default App;
