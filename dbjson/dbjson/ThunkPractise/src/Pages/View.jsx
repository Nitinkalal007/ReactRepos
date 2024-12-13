// Shree Ganeshay namah 

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { viweuser } from '../Redux/userSlice'
import { useSelector } from 'react-redux'
function View() {

const dispatch = useDispatch()

    const [user,setuser] = useState([])
//    async function Api(){
//         dispatch(viweuser())
//     }

    // useEffect(()=>{

    // },[])
   

    useEffect(()=>{
        dispatch(viweuser())
        
    },[dispatch])

    const {data} = useSelector((state)=>(state.user.userlist))
    console.log(data)
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
                                data &&
                                data.map((ele,index)=>{
                                    return(
                                 <tr>
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
