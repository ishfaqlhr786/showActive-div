import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { ChangeShow } from './ChangeShow'
function App() {
  const [show, setShow] = useState(false);
  const [showButton, setshowButton] = useState(true);
  return (
    <div className="App" >
      <div style={{ backgroundColor: "red", float: "left", height: "300px" }}
        // onClick={() =>
        //   setShow(false)
        // }
        onClick={() => ChangeShow(show, setShow()
        )}
      >
        <table border="5" cellSpacing="5">
          <thead>
            <tr>
              <th>Rollno</th>
              <th>name</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                002
           </td>
              <td>
                ali
           </td>
              <td>
                lahore
           </td>

            </tr>
            <tr>
              <td>
                002
           </td>
              <td>
                ali
           </td>
              <td>
                lahore
           </td>
            </tr>
            <tr>
              <td>
                002
           </td>
              <td>
                ali
           </td>
              <td>
                lahore
           </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div style={{ backgroundColor: "green", float: "right", marginRight: "1480px" }}>
        {show ?
          <table border="5" cellSpacing="5">
            <thead>
              <tr>
                <th>Rollno</th>
                <th>name</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  002
           </td>
                <td>
                  ali
           </td>
                <td>
                  lahore
           </td>

              </tr>
              <tr>
                <td>
                  002
           </td>
                <td>
                  ali
           </td>
                <td>
                  lahore
           </td>
              </tr>
              <tr>
                <td>
                  002
           </td>
                <td>
                  ali
           </td>
                <td>
                  lahore
           </td>
              </tr>
            </tbody>
          </table> : ''}

      </div>
      {
        showButton ? <button onClick={() => setShow(true)




        }>View green table</button> : ''
      }
    </div>
  );
}

export default App;
