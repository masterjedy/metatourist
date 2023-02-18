import * as React from "react";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Change from "./Components/Change/Change";
import Foter from "./Components/Footer/Foter";
import MainSection from "./Components/MainSection/MainSection";

import './App.scss'
import Metaversers from "./Components/metaversers/Metaversers";
import Home from "./Components/Home/Home";
import { CellButton, Group, Panel, PanelHeader, View } from "@vkontakte/vkui";
import SelectFriends from "./Components/WithFriends/SelectFriends/SelectFriends";

export default function App() {

  const [activePanel, setActivePanel] = useState('panel1');

  return (
    <View activePanel={activePanel}>
      <Panel id="panel1">
        <Group className="group1">
          <Home />
          <CellButton onClick={() => setActivePanel('panel2')} className='btn-1'>Сам</CellButton>
          <CellButton onClick={() => setActivePanel('panel3')} className='btn-2'>С другом</CellButton>
          <CellButton className='btn-3'>С гидом</CellButton>
        </Group>
      </Panel>
      <Panel id="panel2">
        <Group className="group2">
          <Metaversers />
        </Group>
      </Panel>
      <Panel id="panel3">
          <SelectFriends />
      </Panel>
    </View>
  );
}