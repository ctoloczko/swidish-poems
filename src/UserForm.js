import { useState } from "react";
import "./App.css";

export default function UserForm() {
  return (
    <div className="UserInput">
      <h2>Fyll i några ord och låt AI skapa en vacker dikt åt dig</h2>
      <div className="Options">
        <label>
          Nyckelord (t.ex. kärlek, vinter, ensamhet)
          <input type="text" name="myInput" />
        </label>
      </div>
      <p></p>
      <div className="Options">
        <label>Diktstil </label>
        <select>
          {" "}
          <option value="-">-</option>
          <option value="haiku">Haiku</option>
          <option value="rimmande">Rimmande</option>
          <option value="fritt">Fritt versmått</option>
          <option value="sonett">Sonett</option>
        </select>
      </div>
      <div className="Options">
        <label>Stämning</label>{" "}
        <select>
          {" "}
          <option value="-">-</option>
          <option value="romantisk">Romantisk</option>
          <option value="melankolisk">Melankolisk</option>
          <option value="upplyftande">Upplyftande</option>
          <option value="moerk">Mörk</option>
        </select>
      </div>

      <div className="Options">
        <label>Längd</label>{" "}
        <select>
          {" "}
          <option value="-">-</option>
          <option value="kort">Kort</option>
          <option value="medel">Medel</option>
          <option value="long">Lång</option>
        </select>
      </div>

      <button>Låt oss skapa!</button>

      <p>Din poem</p>
    </div>
  );
}
