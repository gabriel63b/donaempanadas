import React from 'react'
import { useParams } from 'react-router'


function UserName() {
    const {userName} = useParams ()
    return (
        <div>
            el nombre es : {userName}
        </div>
    )
}

export default UserName
