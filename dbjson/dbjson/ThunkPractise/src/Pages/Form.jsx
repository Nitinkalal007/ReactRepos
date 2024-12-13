// Shree Ganeshay namah 
import { useForm } from "react-hook-form"
import axios from "axios"
import { useDispatch } from "react-redux"
import { adduser } from "../Redux/userSlice"
function Form(){

    const { register,handleSubmit} = useForm()
    const dispatch = useDispatch()
   async  function userdata(data){
    console.log(data)
    dispatch(adduser(data))

    }

    return(
        <>

        <form action="" className="col-6 mx-auto mt-5 p-5 shadow" onSubmit={handleSubmit(userdata)}>
                <div>
                    <input type="text" className="form-control mb-4" {...register('Username')} placeholder="Enter Your Name" />
                </div>

                <div>
                    <input type="text" className="form-control mb-4" {...register('Email')} placeholder="Enter Your Email" />
                </div>

                <div>
                    <input type="text" className="form-control mb-4" {...register('MobileNo')} placeholder="Enter Your PhoneNo " />
                </div>

                <button className="btn btn-success">Submite</button>
            </form>
        </>
    )
}

export default Form