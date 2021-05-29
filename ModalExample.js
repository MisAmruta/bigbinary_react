import React, { useState } from 'react';

const ModalExample = (props) => {
 

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
   <>
    <button type="button" onClick={toggle} class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Launch demo modal
    </button>
    
   
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header row">
            <div className='col-sm-2 col-6 imgleft'>
                <img src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/rashmika-mandanna-1076783-28-12-2016-12-20-39.jpg'
                width='72px' height='72px' />   
            </div>
            <div className='col-sm-4 col-6'>
            <h6>content</h6>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some condition.<span> Wikipedia </span> </p>
          </div>

          <div class="table-responsive">
          <table class="table table-md">
          <tbody>
        <tr>
      <td>Flight Number</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Mission Name</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Rocket Type</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Rocket Name</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Manifactures</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Nationality</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Launch Date</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Payload Type</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Orbit</td>
      <td>Mark</td>
       </tr>
        <tr>
      <td>Launch Site</td>
      <td>Mark</td>
       </tr>
    </tbody>
    </table>
              </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ModalExample;