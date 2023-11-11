import React, {useState} from 'react';
import './user.css'
import {useSelector, useDispatch} from 'react-redux';
import { setFirstName, setLastName, setUserName } from '../../redux/reducer/reducerJs';
import EditForm from '../../components/EditForm/editForm';


function User() {

  const userName = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(true);
  const handleEditClick = () => {
    setIsEditing(false)
  } 

  const handleSaveName = (initialValues) => {
    dispatch(setUserName(initialValues.userName));
    dispatch(setLastName(initialValues.lastName));
    dispatch(setFirstName(initialValues.firstName));
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setIsEditing(true)
  }
  

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{`${userName.userName}`}</h1>
        {isEditing ?(
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        ) : <EditForm initialValues={userName} onSave={handleSaveName} onCancel={handleCancelEdit}/>
        }
        
      </div>
      <section className='account-content'>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </section>
    </main>
  )
}

export default User