import {Cell, Group, PanelHeader, Search,
    // Footer,
    platform, Platform} from '@vkontakte/vkui'
import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import './Metaversers.scss'

const Metaverses = () => {

    const thematics = [
        {id: 1, name: 'Spatial (SPAT)', url: 'https://www.spatial.io/'},
        {id: 2, name: 'Fortnite (TOVER)', url: 'https://www.fortnite.com/'},
        {id: 3, name: 'Sensorium (SENSO)', url: 'https://sensoriumgalaxy.com/'},
        {id: 4, name: 'Arcona (ARCONA)', url: 'https://www.arcona.space/'},
        {id: 5, name: 'The Sandbox (SAND)', url: 'https://www.sandbox.game/en/'},
        {id: 6, name: 'Матрешка Ренесанс (RU)', url: 'https://metarenessans.ru/o-metavselennoy/'},
        {id: 7, name: 'Roblox (ROBLOX)', url: 'https://www.sandbox.game/en/'},
        {id: 8, name: 'Somnium Space (SOLANA)', url: 'https://somniumspace.com/'},
        {id: 9, name: 'Decentraland  (MANA)', url: 'https://decentraland.org/'},
    ];

    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const thematicsFiltered = thematics.filter(
        ({name}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1,
    );

    return (
        <React.Fragment>
            <PanelHeader>
                <Footer/>
            </PanelHeader>
            <p className='meta-text'>
                Метавселенная
            </p>
            <Group className='meta-group'>
                <Search className='search' aria-setsize='400px' value={search} onChange={onChange}/>
                {thematicsFiltered.length > 0 &&
                    thematicsFiltered.map((thematics) => <Cell key={thematics.id}><a className='text-list'
                                                                                     href={thematics.url}>{thematics.name}</a></Cell>)}
                {thematicsFiltered.length === 0 && <Footer className='notFound'>Ничего не найдено</Footer>}
            </Group>
        </React.Fragment>
    )
}

export default Metaverses