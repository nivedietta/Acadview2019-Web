import React from 'react'
const Display = (props) => {
    const { displayInfos } = props
    console.log(props)
    const displayList = displayInfos.map(info => {
        return (
            <div className='display-card' key={info.id}>
                <p>Name: {info.name}</p>
                <p>Birthday: {info.birth}</p>
                <p>About: {info.about}</p>
            </div>
        )
    })
    return (
        <div>
            {displayList}
        </div>
    )
}
export default Display