import React from 'react';
import styled from 'styled-components';

//Styled Components
const Card = styled.div`
    border: 2px solid black;
    width: 30%;
    height: 420px;
    padding 5px;
    margin-left: 600px;
`

function CharacterCard(props) {
    return (
        <Card>
            <h4>Name</h4>
                <p>{props.person.name}</p>
            <h4>Gender</h4>
                <p>{props.person.gender}</p>
            <h4>Eye Color</h4>
                <p>{props.person.eye_color}</p>
            <h4>Hair Color</h4>
                <p>{props.person.hair_color}</p>
            <h4>Height</h4>
                <p>{props.person.height}</p>
            <h4>Mass</h4>
                <p>{props.person.mass}</p>
            <h4>Skin Type</h4>
                <p>{props.person.skin_color}</p> 
        </Card>
    )
}

export default CharacterCard;