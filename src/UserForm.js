import { useState } from "react";
import "./App.css";

export default function UserForm() {
  return (
    <div>
      <h2>Fyll i några ord och låt AI skapa en vacker dikt åt dig</h2>
      <div className="Options">
        <label>
          Nyckelord (t.ex. kärlek, vinter, ensamhet)
          <input type="text" name="myInput" />
        </label>
      </div>
      <div className="Options">
        <select>
          {" "}
          Diktstil
          <option value="-">-</option>
          <option value="haiku">Haiku</option>
          <option value="rimmande">Rimmande</option>
          <option value="fritt">Fritt versmått</option>
          <option value="sonett">Sonett</option>
        </select>
      </div>
      <div className="Options">
        <select>
          {" "}
          Stämning
          <option value="-">-</option>
          <option value="romantisk">Romantisk</option>
          <option value="melankolisk">Melankolisk</option>
          <option value="upplyftande">Upplyftande</option>
          <option value="moerk">Mörk</option>
        </select>
      </div>

      <div className="Options">
        <select>
          {" "}
          Längd
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
