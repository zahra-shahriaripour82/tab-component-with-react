import React, {useState} from "react";
import ReactDOM from "react-dom"
import './App.css'

function App() {
 
  
  const Tab = () => {
    const [ToggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
  
    return (
      <div className="container">
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            Tab 1
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            Tab 2
          </li>
          <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
          >
            Tab 3
          </li>
          <li
            className={`tabs ${getActiveClass(4, "active-tabs")}`}
            onClick={() => toggleTab(4)}
          >
            Tab 4
          </li>
        </ul>
        <div className="content-container">
          <div className={`content ${getActiveClass(1, "active-content")}`}>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus itaque aperiam ad exercitationem porro! Reiciendis quae neque atque velit ducimus! Veniam repudiandae dicta dolorum iste vitae dignissimos ad quis assumenda!</h2>
          </div>
          <div className={`content ${getActiveClass(2, "active-content")}`}>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur recusandae magni deleniti minima vel sint rem unde aperiam ipsum laudantium nemo nesciunt voluptatibus porro provident, nihil animi tenetur ratione!</h2>
          </div>
          <div className={`content ${getActiveClass(3, "active-content")}`}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error distinctio, debitis veniam eaque unde mollitia cumque aut, voluptatum, cum inventore repellendus omnis voluptate nihil accusantium sint deserunt nulla nisi? Fugit!</h2>
          </div>
          <div className={`content ${getActiveClass(4, "active-content")}`}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error distinctio, debitis veniam eaque unde mollitia cumque aut, voluptatum, cum inventore repellendus omnis voluptate nihil accusantium sint deserunt nulla nisi? Fugit!</h2>
          </div>
        </div>
      </div>
    );
  };
  
  ReactDOM.render(
      <Tab />,
    document.getElementById('root')
  );









  
}

export default App
