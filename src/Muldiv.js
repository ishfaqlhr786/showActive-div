import React, { useState } from 'react'
import './App.css'
export const Muldiv = () => {
    const [toggle, setToggle] = useState(false);
    const [appdata, changeState] = useState({
        activeObject: null,
        objects: [{ id: 1, name: "ali", city: "lhr" }, { id: 2, name: "amir", city: "kpr" }, {
            id: 3,
            name: "aslam", city: "jbd"
        }, { id: 4, name: "asif", city: "jampur" }]
    })
    function toggleactive(index) {
        changeState({ ...appdata, activeObject: appdata.objects[index] })
        console.log(appdata.objects[index])
        setToggle(true)

    }
    function toggleactiveStyle(index) {
        if (appdata.objects[index] === appdata.activeObject) {
            return "box active"
            //setToggle(false)
        }
        else {
            return "box inactive"
        }
    }

    return (
        <div>

            <table>


                <tr>
                    <th>id:</th>
                    <th>name</th>
                    <th>city</th>
                </tr>





                {
                    appdata.objects.map((el, index) => {
                        const { id, name, city } = el;
                        return (<>

                            <tr><td>
                                <button onClick={() => { toggleactive(index) }}>{el.id}</button>
                            </td>
                                <td>
                                    {appdata.objects[index] === appdata.activeObject && toggle ?

                                        <div key={index}
                                            className={toggleactiveStyle(index)}
                                            onClick={() => { toggleactive(index) }}>
                                            <td>  <h2> {id}</h2></td>
                                            <td> <h2> {name}</h2></td>
                                            <td>  <h2> {city}</h2></td>
                                        </div> : ''

                                    }
                                </td>
                            </tr>
                        </>
                        )
                    }
                    )
                }

            </table>
        </div >
    )
}
