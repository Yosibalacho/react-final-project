import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="main-footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <h4> CHESS WORLD</h4>
            <ul className="list-unstyled">
              <li>342-420-6969 </li>
              <li>Lod, Israel</li>
              <li>123 Streeet South North</li>
            </ul>
          </div>

          <div className="col">
            <h4>CHESS FOR ALL</h4>
            <ul className="list-unstyled">
              <li>CHESS</li>
              <li>FOR</li>
              <li>ALL</li>
            </ul>
          </div>
          <div className="col">
            <h4> LEARNING CHESS TOGETHER</h4>
            <ul className="list-unstyled">
              <li>LEARNING  </li>
              <li>CHESS</li>
              <li>TOGETHER</li>
            </ul>
          </div>
          <hr/>
        <div className= "row"> 
<p className="col-sm">
   &copy;{new Date().getFullYear()} CHESS  WORLD IL|All right reserved | Terms Of Service | Privacy
</p>
</div>  
        </div>
      </div>
    </div>
  );
}
