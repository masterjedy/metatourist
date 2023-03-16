import React, {useState} from 'react';
import {
    AppRoot,
    SplitLayout,
    SplitCol,
    Button,
    View,
    Panel,
    PanelHeader, ModalRoot, ModalPage, ModalCard, Group, CellButton,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Verse} from "./components/Verse";
// import {AppCSS} from './App.css';
import {ReactComponent as ImageSpatial} from "./assets/ImageSpatial.svg";
import {ReactComponent as ImageArcona} from "./assets/ImageArcona.svg";
import {ReactComponent as ImageDecent} from "./assets/ImageDecent.svg";
import {ReactComponent as ImageFortnite} from "./assets/ImageFortnite.svg";
import {ReactComponent as ImageRoblox} from "./assets/ImageRoblox.svg";
import {ReactComponent as ImageRussian} from "./assets/ImageRussian.svg";
import {ReactComponent as ImageSandbox} from "./assets/ImageSandbox.svg";
import {ReactComponent as ImageSens} from "./assets/ImageSens.svg";
import {ReactComponent as ImageSomnium} from "./assets/ImageSomnium.svg";


const SelectGuide = () => {
    const [activePanel, setActivePanel] = useState('meta_panel_1');

    return (
        <View activePanel={activePanel}>
            <Panel id="meta_panel_1">
                <PanelHeader>Spatial</PanelHeader>
                <Group>
                    <Verse mainImage={<ImageSpatial/>} captionText={"Spatial"}
                           firstParagraph={"Spatial - многопользовательская платформа для общения и работы в дополненной и виртуальной реальности. Раньше для нее требовалась VR-гарнитура, но теперь она доступна в браузере, на Android и iOS."}
                           secondParagraph={"Для погружения в метавселенную необходимо зарегистрироваться и выбрать локацию для посещения. На главной странице расположены доступные локации. Их можно отсортировать по популярности, новизне и так далее."}
                           thirdParagraph={"Для погружения в метвселенную необходимо зарегестрироваться и выбрать локацию для посещения. На главной странице расположены доступные локации. Их можно отсортировать по популярности, новизне и так далее."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton tyle={{textAlign: 'right'}} onClick={() => setActivePanel('meta_panel_2')}>Перейти к
                        Arcona</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_2">
                <PanelHeader>Arcona</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_1')}>Назад к Spatial</CellButton>
                    <Verse mainImage={<ImageArcona/>} captionText={"Arcona"}
                           firstParagraph={"Arcona - метавселенная с технологией смешанной реальности. В ней можно создавать свои проекты или зарабатывать с помощью игр формата Play-to-Earn."}
                           secondParagraph={"Метавселенная Arcona позиционируется  как приложение, которое соединяет в себе реальный и цифровой мир. А весь ее контент располагается на виртуальных участках земли. Все цифровые участки, как и предметы внутри платформы, представляют собой NFT. В смарт-контракте токена указаны географические координаты земли, основные характеристики и права собственности. Владелец земли может заняться ее развитием, сдавать в аренду или продать."}
                           thirdParagraph={"Одним из вариантов развития является покупка и обустройство собственного замка. Покупателю становится доступен контент Play-to-Earn с замками. Он чем-то напоминает игры жанра Tower Defense, в которых нужно прокачивать свои территории, улучшать оборону, налаживать торговлю и нападать на других игроков."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_3')}>Перейти к Decentraland</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_3">
                <PanelHeader>Decentraland</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_2')}>Назад к Arcona</CellButton>
                    <Verse mainImage={<ImageDecent/>} captionText={"Decentraland"}
                           firstParagraph={"В метавселенной Decentraland  игры  — это лишь маленькая часть возможностей. Здесь возможно общаться, посещать лекции или открывать магазины."}
                           secondParagraph={"Главная особенность — владение земельными участками в виде NFT (невзаимозаменяемых токенов). Каждый может купить за криптовалюту землю и построить на ней все, что захочет: магазин, кинотеатр, офис, игровую зону, художественную галерею. Метавселенная работает на блокчейне, поэтому разработчики никак не могут вмешиваться в действия пользователей."}
                           thirdParagraph={"В метавселенной можно посещать кинотеатры, гонки, усадьбы, художественные галереи, парки развлечений, цифровое казино и многое другое."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_4')}>Перейти к Fortnite</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_4">
                <PanelHeader>Fortnite</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_3')}>Назад к Decentraland</CellButton>
                    <Verse mainImage={<ImageFortnite/>} captionText={"Fortnite"}
                           firstParagraph={"Создатели позиционируют свою игру Fortnite не как интерактивное развлечение, а как “метавселенную” с упором на социальные функции."}
                           secondParagraph={"Fortnite стала культурным феноменом и превратилась в площадку, куда заходят пообщаться с друзьями вместо соцсетей, а бренды используют игру для своих проектов. Например:"}
                           thirdParagraph={(<ul>
                               <li>В апреле 2020 года рэпер Трэвис Скотт провёл концерт в Fortnite, который одновременно
                                   смотрело более 12 млн игроков.
                               </li>
                               <li>В декабре 2019 года Disney устроила премьеру отрывка из девятого эпизода «Звёздных
                                   войн», а также провела живое интервью с режиссёром фильма Джей Джей Абрамсом. Само
                                   событие упомянуто в фильме.
                               </li>
                               <li>Группа Weezer создала остров, где игроки могли эксклюзивно послушать новый альбом.
                               </li>
                               <li>Epic Games устраивает внутри Fortnite ограниченные по времени события, привязанные к
                                   релизам в реальном мире. Карта игры трансформируется в виртуальный мир, который
                                   меняет стиль и внутриигровые объекты в партнерстве с брендами: DC, Nike, Lionsgate,
                                   Marvel, Microsoft, Sony и другими. Так Fortnite стал местом, где пересекаются разные
                                   вселенные: игроки могут буквально носить костюм персонажа Marvel внутри Готэма,
                                   общаясь с другом в лицензированной форме НФЛ.
                               </li>
                               <li>У игроков есть возможность создавать и свой контент через творческий режим в
                                   Fortnite, а также монетизировать его. Это могут быть эмоции, костюмы, игровые
                                   механики и миры. По своей сути творческий режим Fortnite — это «прото-метавселенная»,
                                   утверждает Болл: игроки могут загружать свой уникальный Fortnite-аватар в лобби и
                                   выбирать из тысяч миров, созданных другими игроками.
                               </li>
                           </ul>)}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_5')}>Перейти к Roblox</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_5">
                <PanelHeader>Roblox</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_4')}>Назад к Fortnite</CellButton>
                    <Verse mainImage={<ImageRoblox/>} captionText={"Roblox"}
                           firstParagraph={"Roblox - это метавселенная для создания собственных игр. Пользователям достаточно создать аватар для того, чтобы перемещаться по  множеству игровых серверов, виртуальных пространств или создавать собственные."}
                           secondParagraph={"Своего персонажа можно кастомизировать при помощи различной одежды и аксессуаров. Их можно купить на маркетплейсе игры. В метавселенной используется валюта Robux."}
                           thirdParagraph={"Игровая метавселенная Roblox пользуется большой популярностью благодаря возможности создавать собственные виртуальные пространства с помощью простых инструментов платформы. Для их использования не нужно обладать специальными знаниями разработчика или 3D-дизайнера.\n" +
                               "Высокая популярность и возможности кастомизации платформы привлекли в Roblox мировые бренды: Nike, 21Shop, Vans и Gucci. Они кастомизировали виртуальные пространства под свой фирменный стиль, добавили игровые площадки и брендированные предметы.\n" +
                               "Все это можно увидеть при посещении метавселенной."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_6')}>Перейти к Российской Деловой Метавселенной
                        Матрёшке Ренессанс</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_6">
                <PanelHeader>Российская Деловая Метавселенная Матрёшка Ренессанс</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_5')}>Назад к Roblox</CellButton>
                    <Verse mainImage={<ImageRussian/>}
                           captionText={"Российская Деловая Метавселенная Матрёшка Ренессанс"}
                           firstParagraph={"Российская метавселенная Матрешка Ренессанс – это трехмерный виртуальный город для проведения выставочных, деловых, познавательных и развлекательных мероприятий доступных всему миру и организации эффективного нетворкинга."}
                           secondParagraph={"В зaдачи метавселенной входит формирование среды коммуникации для конвергенций знаний и наук (конференции и кампусы), популяризации компаний и их продуктов, комбинированный сервис для решения корпоративных задач (сотрудничество и повышение квалификации)"}
                           thirdParagraph={"Метавселенная приглашает резидентов города выбрать участок и построить свое представительство или забронировать стенд на выставке."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_7')}>Перейти к Sandbox</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_7">
                <PanelHeader>Sandbox</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_6')}>Назад к Российской Деловой Метавселенной
                        Матрешке Ренессанс</CellButton>
                    <Verse mainImage={<ImageSandbox/>} captionText={"The Sandbox"}
                           firstParagraph={"SandBox — децентрализованная виртуальная  метавселенная на блокчейне Ethereum. Она позволяет любому пользователю играть в игры, зарабатывать криптовалюту SAND, снановиться владельцем цифровой земли, создавать воксельных персонажей и объекты обёрнутые в NFT-токены, торговать созданными предметами в специальном магазине, а также разрабатывать собственные 3D-игры без знания программирования с помощью готовых инструментов и мощного функционала."}
                           secondParagraph={"LAND в SandBox — это цифровая земля, её можно купить за токены SAND и стать владельцем. На ней можно добавлять свои объекты, персонажей и так далее. В SandBox можно арендовать землю у других игроков за небольшую плату."}
                           thirdParagraph={(<ul>
                               <li>В метавселенной насчитуется ровно 166 464 земли</li>
                               <li>Одна земля имеет размер 96 *96 *96</li>
                               <li>1 метр или блок, состоит из 32 вокселей в длину, 32 вокселей в ширину и 32 вокселей в
                                   высоту.
                               </li>
                           </ul>)}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_8')}>Перейти к Sensorium</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_8">
                <PanelHeader>Sensorium</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_7')}>Назад к The Sandbox</CellButton>
                    <Verse mainImage={<ImageSens/>} captionText={"Sensorium"}
                           firstParagraph={"С помощью потокового канала metaverse Sensorium есть возможность просматривать полноценные цифровые среды и наслаждаться первоклассными музыкальными исполнениями на любом устройстве и в удобное время.\n" +
                               "Sensorium устраивает глобальную премьеру виртуальной реальности и погружает в нее."}
                           secondParagraph={"Digital метавселенная Sensorium создана на движке Unreal Engine 4.\n" +
                               "В ней пользователи, при помощи своих виртуальных аватаров, путешествуют по тематическим мирам на космическом корабле.\n"}
                           thirdParagraph={"В игре, помимо VR, используется технология Motion Capture. Она позволяет всем игрокам создавать уникальные анимации движения и танцев."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_9')}>Перейти к Somnium Space</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
            <Panel id="meta_panel_9">
                <PanelHeader>Somnium Space</PanelHeader>
                <Group>
                    <CellButton onClick={() => setActivePanel('meta_panel_8')}>Назад к Sensorium</CellButton>
                    <Verse mainImage={<ImageSomnium/>} captionText={"Somnium Space"}
                           firstParagraph={"Somnium Space — это VR-ориентированная метавселенная на основе блокчейна. Она основана Артуром Сычевым в 2017 году."}
                           secondParagraph={"Сегодня Somnium Space — это децентрализованная виртуальная метавселенная полностью сформированная пользователями."}
                           thirdParagraph={"В этом цифровом мире можно выполнять такие действия, как владение цифровыми участками земли, строительство домов, покупка внутриигровых активов NFT, и многое другое."}/>
                    <div style={{textAlign: 'center'}}><a
                        style={{textDecoration: 'none', textTransform: 'uppercase', fontSize: '20px', color: '#1D94A4'}}
                        href={'https://www.spatial.io'}>Начать путешествие</a></div>
                    <div style={{height: 50}}/>
                    <CellButton onClick={() => setActivePanel('meta_panel_1')}>Назад к первой Метавселенной!</CellButton>
                    <div style={{height: 100}}/>
                </Group>
            </Panel>
        </View>
    )
};

export default SelectGuide;
