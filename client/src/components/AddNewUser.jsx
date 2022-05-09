import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../redux/actions';
const AddNewUser = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newOne={
            fullName,email,phone
        }
        dispatch(addNewUser(newOne))
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
         <button onClick={openModal}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
   
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handleSubmit}>
              <section>
                  <label>Full Name</label>
                  <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)}/>
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

export default AddNewUser