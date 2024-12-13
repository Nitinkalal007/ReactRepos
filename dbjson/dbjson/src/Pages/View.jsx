// Shree Ganeshay namah 

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { viewuser } from '../Redux/userSlice'
function View() {

const dispatch = useDispatch()

    const [user,setuser] = useState([])
//    async function Api(){
//         dispatch(viweuser())
//     }

async function Api() {
    dispatch(viewuser())
}

    useEffect(()=>{
        Api()
    },[])

const {userlist} = useSelector((state)=>(state.user))
console.log(userlist)
    // useEffect(()=>{

    // },[])
   

    useEffect(()=>{
        // dispatch(viweuser())
        
    },[dispatch])

    // const {data} = useSelector((state)=>(state.user.userlist))
    // console.log(data)
  return (
    <div>
      <div className="container">
                <table className="table table-striped table-hover">

                    <thead className=" table-success">
                        <tr>
                            <th>Index_No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>MpbileNo</th>
                            <th>delete</th>
                        </tr>
                    </thead>

                    <tbody className=" table-hover table-success">
                            {
                                userlist && 
                                userlist.map((ele,index)=>{
                                    return(
                                 <tr key={index}>
                                    <td>{index}</td>
                                    <td>{ele.Username}</td>
                                    <td>{ele.Email}</td>
                                    <td>{ele.MobileNo}</td>
                                    <td>delet</td>
                                 </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>

    </div>
  )
}

export default View
