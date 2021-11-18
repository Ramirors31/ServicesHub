import React, {useState} from 'react'
import '../styles/App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import {v4 as uuidv4} from 'uuid';
import GroupCard from './GroupCard';
import AddGroupForm from './AddGroupForm';

function GroupsContainer() {
    const groupData = [ 
        {id:uuidv4(), grupo: 52, materia: "Ciencias Naturales", alumnosActivos: 10}
    ]

    
    const [groups, setGroups] = useState(groupData)
        //AGREGAR TAREAS NUEVAS
        const agregarGrupo = (grupo) => {
            grupo.id = uuidv4();
            setGroups([
                ...groups,
                grupo
            ])
    
        }
    const displayInformation = (e) => {
        e.preventDefault()
        console.log('hiciste clic en una carta we')


    }
    return (
        <div className = "feed-container">
            <Header/>
            <Sidebar/>
            <div className = "general-view">
                {
                    groups.map(group => (
                        <GroupCard key = {group.id} group = {group} onClick = {displayInformation}/>
                    ))
                }
            </div>
            <div className = "specificView">
                <AddGroupForm agregarGrupo = {agregarGrupo}/>

            </div>
            
        </div>
    )
}

export default GroupsContainer
