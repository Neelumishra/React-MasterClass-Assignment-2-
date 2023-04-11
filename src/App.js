import React from 'react';
import './style.css';

export default function App() {
  const [update, setupdate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [history, sethistoy] = React.useState([]);

  function handleMouseEnter(e) {
    let event = {
      time: new Date().toLocaleTimeString(),
      event: 'IN',

       element:e.target.localName
    };
    console.log(e.target.localName)
    // setupdate('In');
    // let date = new Date();
    // let a = date.toLocaleTimeString();
    // setTime(a);
    sethistoy([...history, event]);
    console.log(history);

    //  var formatted = timestemp.format("dd/mm/yyyy hh:MM:ss");
  }
  function handleMouseLeave(e) {
    let event = {
      time: new Date().toLocaleTimeString(),
      event: 'OUT',
      element:e.target.localName
    };
    sethistoy([...history, event]);
    console.log(history);
  }
  return (
    <div>
      <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Heading 1
      </h1>
      <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Heading 2
      </h2>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Div
      </div>
      <table>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Element</th>


        </tr>
        {history.map((ele) => (
          <tr>
            <td>{ele.time}</td>

            <td>{ele.event}</td>
            <td>{ele.element}</td>

          </tr>
        ))}
      </table>
    </div>
  );
}
