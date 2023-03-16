import * as React from "react";
import {useState} from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Change from "./Components/Change/Change";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";

import './App.scss'
import Metaverses from "./Components/metaversers/Metaverses";
import Home from "./Components/Home/Home";
import {CellButton, Group, Panel, PanelHeader, View} from "@vkontakte/vkui";
import SelectFriends from "./Components/WithFriends/SelectFriends/SelectFriends";
import SelectGuide from "./Components/Guide/SelectGuide";

export default function App() {

    const [activePanel, setActivePanel] = useState('panel1');

    return (
        <View activePanel={activePanel}>
            <Panel id="panel1">
                <Group className="group1">
                    <Home/>
                    <CellButton onClick={() => setActivePanel('panel2')} className='btn-1'>Сам</CellButton>
                    <CellButton onClick={() => setActivePanel('panel3')} className='btn-2'>С другом</CellButton>
                    <CellButton onClick={() => setActivePanel('panel4')} className='btn-3'>С гидом</CellButton>
                </Group>
            </Panel>
            <Panel id="panel2">
                <Group className="group2">
                    <Metaverses/>
                </Group>
            </Panel>
            <Panel id="panel3">
                <SelectFriends/>
            </Panel>
            <Panel id="panel4">
                <SelectGuide/>
            </Panel>
        </View>
    );
}