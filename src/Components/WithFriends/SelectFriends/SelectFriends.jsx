import {Avatar, Button, Cell, Group, Header, Panel, PanelHeader, Search, View} from '@vkontakte/vkui';
import React, {useState} from 'react'
import images from '../../../assets/images';
import Home from '../../Home/Home';

const SelectFriends = () => {

    const [activePanel, setActivePanel] = useState('list');

    return (
        <View activePanel={activePanel}>
            <Panel id="list">
                <PanelHeader>Новый локальный чат</PanelHeader>

                <Search after={null}/>

                <Cell>Выберите собеседников</Cell>

                <Group header={<Header>Важные</Header>}>
                    <Cell mode="selectable" before={<Avatar src={images.avatar1}/>}>
                        Алиса Лерман
                    </Cell>
                    <Cell mode="selectable" before={<Avatar src={images.tatjana}/>}>
                        Татьяна Хак
                    </Cell>
                    <Cell mode="selectable" before={<Avatar src={images.atrem}/>}>
                        Артем Маг
                    </Cell>
                    <Cell mode="selectable" before={<Avatar src={images.kristina}/>}>
                        Виолетта Сергеевна
                    </Cell>
                    <Cell mode="selectable" before={<Avatar src={images.violeta}/>}>
                        Криcтина Иванова
                    </Cell>
                </Group>
                <Group header={<Header>Все собеседники</Header>}>
                    <Cell mode="selectable" before={<Avatar src={images.other}/>}>
                        Aleks Sans
                    </Cell>
                </Group>
                <Button onClick={() => setActivePanel('list2')} size="l" appearance="accent" stretched>
                    Завершить
                </Button>
            </Panel>
            <Panel id="list2">
            </Panel>
        </View>
    )
}

export default SelectFriends