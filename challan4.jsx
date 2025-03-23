import React from 'react'
import "../styleCss/Challan2.css/";
function Challan4() {
  return (
    <div className='challan-form'>
      <h1>CHALLAN FORM-32</h1>
      <p className='heading'>CHALLAN OF CASH PAID IN TO:</p>
      <div className='form-section'>
        <div>
          <label>TO BE FILLED BY THE PAYER!</label>
          <textarea placeholder='Detais Of Payment' />
        </div>
        <div>
          <label>TO BE FILLED BY THE AGENCY!</label>
          <textarea placeholder='Details Of Agency' />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <label>AMOUNT:</label>
          <input type='text' placeholder='Enter Amount' />
        </div>
        <div className='column'>
          <label>HEAD OF ACCOUNT</label>
          <input type='text' placeholder='Head Of Account' />
        </div>
      </div>
      <div>
        <div>
          <p>
            SIGNATURE OF DEPOSITOR: ____________________
          </p>
        </div>
        <div>
          <p>
            DATE:___________  ACCOUNTANT: ____________
          </p>
        </div>
      </div>
    </div>
  )
}

export default Challan4;
