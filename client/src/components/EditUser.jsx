import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/actions';
// import { addNewUser } from '../redux/actions';
const EditUser = ({user}) => {
    const [FullName, setFullName] = useState(user.FullName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const editedOne={
          FullName,email,phone,_id:user._id
        }
        dispatch(editUser(editedOne))
        closeModal()
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
   
      function closeModal() {
        setIsOpen(false);
      }

  return (
    <div>
         <button onClick={openModal}>EDIT</button>
      <Modal
        isOpen={modalIsOpen}
   
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handleSubmit}>
              <section>
                  <label>Full Name</label>
                  <input type="text" value={FullName} onChange={e=>setFullName(e.target.value)}/>
              </section>
              <section>
                  <label>Email</label>
                  <input type="text"  value={email} onChange={e=>setEmail(e.target.value)}/>
              </section>
              <section>
                  <label>Phone</label>
                  <input type="text"  value={phone} onChange={e=>setPhone(e.target.value)}/>
              </section>
              <section>
                  <button type='submit'>ADD</button>
                  <button onClick={closeModal}>Cancel</button>
              </section>
          </form>
      </Modal>
    </div>
  )
}

export default EditUser