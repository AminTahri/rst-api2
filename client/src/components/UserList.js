import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../redux/actions'
import UserCard from './UserCard'
const UserList = () => {

    const {users,loading}=useSelector(state=>state)
    const dispatch =useDispatch()
    useEffect(() => {
     dispatch(getUsers())
    
    }, [])
    
  return (
    <div>
      {
        
        loading? <h1>Loading...</h1>:users&&React.Children.toArray(users.map(el=> <UserCard user={el}/>))
      }
    </div>
  )
}

export default UserList