import React from 'react';

export const Verse = (props) => {
    return (
        <>
            <h2 className={'headerText'}>Метавселенная</h2>
            <div className={'contentImg'}>
                {props.mainImage}
                <caption>{props.captionText}</caption>
            </div>
            <div className={'verseText'}>
                <p>{props.firstParagraph}</p>
                <p>{props.secondParagraph}</p>
                <p>{props.thirdParagraph}</p>
            </div>
        </>
    )
}