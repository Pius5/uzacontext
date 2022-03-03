import React, { useContext } from 'react';
import { ChannelContext, UserContext } from './App';

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>


            <h2>My name is {user} and you can find me on {channel}.</h2>


        </div>
    );
}

export default ComponentE;