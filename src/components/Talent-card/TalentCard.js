import React, { useState, useEffect } from "react";
import { getAllStudents } from "../../Helpers/Actions";
import "./TalentCard.css";
import Swal from "sweetalert2";
import { getSymbol } from "../../Helpers/symbols";

const TalentCard = () => {
  const [studentsInformation, setstudentsInformation] = useState([]);
  const [symbols, setSymbols] = useState([]);

  const getStudentInfo = (studentInfo) => {
    return `
    <div class="container-participant-popap">

      <div class="card-font">
      </div>

      <div>
        <img class="avatarUrl" src=${studentInfo.avatarUrl} alt=""/>
                  
      </div>

      <div class="div-ruta">
        <p class="Curse">Desarrollo Web</p>
        <p class="program">${studentInfo.program}</p>
      </div>
      
      <div class="div-name">
          <p class="name">${studentInfo.name}</p>
      </div>

      <div class="social">
        ${studentInfo.github === "" ? "" : `<a target="_blank" href=${studentInfo.github} class="item-social"><i class="ph-github-logo fa"></i>Github</a>`}
          
          ${studentInfo.portafolio===""?"":`<a target="_blank" href=${studentInfo.portafolio} class="item-social"><i class="ph-globe fa"></i>Portafolio</a>`}
          
          <a target="_blank" href=${studentInfo.cv} class="item-social"><i class="ph-file fa"></i>Resumen</a>
          
      </div>
    </div>
      `;
      // <a target="_blank" href="" class="item-social"><i class="ph-linkedin-logo fa"></i>Linkedin</a>
  };

  const showAlert = (studentInfo) => {
    Swal.fire({
      showConfirmButton: false,

      html: `${getStudentInfo(studentInfo)}`,
    });
  };

  useEffect(() => {
    (async () => {
      setstudentsInformation(getAllStudents());
      setSymbols(getSymbol());
    })();
  }, []);

  return (
    <div>
      <h1 className="title">Nuestros Talentos</h1>
      <div className="container-talents">
        {studentsInformation.map((student) => (
          <div
            key={student.id}
            className="card-talent"
            onClick={() => showAlert(student)}
          >
            <div className="ImageSymbol">
              <img className="avatar" src={student.avatarUrl} alt="" />

              {symbols
                .filter((name) => name.program === student.program)
                .map((filteredName) => (
                  <img
                    key={filteredName.id}
                    className="symbol"
                    src={filteredName.urlSymbol}
                    alt=""
                  />
                ))}
            </div>

            <div className="Name-program">
              <h5 className="Name">{student.nickName}</h5>

              <h4 className="program-card">{student.program}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentCard;
