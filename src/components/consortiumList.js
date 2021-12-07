import React from "react";
import Select from "react-select";

const consortiumList = [
    {        idCode: "",       Name: "Choose..."    },
    {        idCode: "1",       Name: "CONCESION SABANA DE OCCIDENTE S.A."    },
    {        idCode: "2",       Name: "CONCESIÓN SANTA MARTA PARAGUACHON"    },
    {        idCode: "3",       Name: "CONCESIONARIA VIAL DE LOS ANDES SAS COVIANDES S A S"    },
    {        idCode: "4",       Name: "CONSORCIO VIA AL MAR"    },
    {        idCode: "5",       Name: "UNION TEMPORAL DEVINORTE"    },
    {        idCode: "6",       Name: "CONCESIONES CCFC S.A."    },
    {        idCode: "7",       Name: "DEVIMED S.A."    },
    {        idCode: "8",       Name: "AUTOPISTAS DEL CAFE S.A"    },
    {        idCode: "9",       Name: "UNION TEMPORAL MALLA VIAL DEL VALLE DEL CAUCA Y CAUCA"    },
    {        idCode: "10",       Name: "CSS CONSTRUCTORES S.A"    },
    {        idCode: "11",       Name: "CONCESIONARIA DE OCCIDENTE S.A."    },
    {        idCode: "12",       Name: "AUTOPISTAS DE LA SABANA S.A."    },
    {        idCode: "13",       Name: "CONCESIONARIA SAN SIMÓN S.A."    },
    {        idCode: "14",       Name: "AUTOPISTAS DEL SOL S.A."    },
    {        idCode: "15",       Name: "CONCESIONARIA SAN RAFAEL S.A."    },
    {        idCode: "16",       Name: "CONSORCIO VIAL HELIOS"    },
    {        idCode: "17",       Name: "CONCESIONARIA YUMA S.A."    },
    {        idCode: "18",       Name: "CONSORCIO VÍAS DE LAS AMÉRICAS S.A."    },
    {        idCode: "19",       Name: "CONCESIÓN LA PINTADA S.A.S"    },
    {        idCode: "20",       Name: "CONCESIÓN ALTO MAGDALENA S.A.S"    },
    {        idCode: "21",       Name: "Concesionaria Vial del Pacífico S.A.S - COVIPACÍFICO S.A.S"    },
    {        idCode: "22",       Name: "CONCESIÓN COSTERA - CARTAGENA BARRANQUILLA S.A.S"    },
    {        idCode: "23",       Name: "CONCESIÓN PACIFICO TRES S.A.S"    },
    {        idCode: "24",       Name: "PERIMETRAL ORIENTAL DE BOGOTA S.A.S"    },
    {        idCode: "25",       Name: "Autopistas del Nordeste S.A.S"    },
    {        idCode: "26",       Name: "Autopista Río Magdalena S.A.S Grupo OHL"    },
    {        idCode: "27",       Name: "CONCESIONARIA NUEVA VÍA AL MAR S.A.S"    },
    {        idCode: "28",       Name: "SOCIEDAD CONCESIONARIA VIAL MONTES DE MARIA SAS"    },
    {        idCode: "29",       Name: "CONCESIÓN DEL SISGA SAS"    },
    {        idCode: "30",       Name: "CONCESIONARIA VIAL DEL ORIENTE S.A.S. - COVIORIENTE S.A.S"    },
    {        idCode: "31",       Name: "ALIADAS PARA EL PROGRESO S.A.S"    },
    {        idCode: "32",       Name: "NUEVO CAUCA SAS"    },
    {        idCode: "33",       Name: "DESARROLLO VIAL AL MAR S.A.S"    },
    {        idCode: "34",       Name: "CONCESIONARIA RUTA DEL CACAO S.A.S."    },
    {        idCode: "35",       Name: "CONCESIONARIA VIAL UNION DEL SUR SAS"    },
    {        idCode: "36",       Name: "AUTOPISTAS URABA SAS"    },
    {        idCode: "37",       Name: "APP GICA S.A"    },
    {        idCode: "38",       Name: "CONCESION VIAL DE LOS LLANOS SAS"    },
    {        idCode: "39",       Name: "CONCESIONARIA VIAL ANDINA S.A.S. COVIANDINA SAS"    },
    {        idCode: "40",       Name: "CONCESIONARIA ALTERNATIVAS VIALES SAS"    },
    {        idCode: "41",       Name: "AUTOVIA NEIVA GIRARDOT S.A.S"    },
    {        idCode: "42",       Name: "Concesión Ruta al Mar SAS CORUMA SAS"    },
    {        idCode: "43",       Name: "Concesión Vías del NUS - VINUS S.A.S."    },
    {        idCode: "44",       Name: "VÍA PACÍFICO S.A.S"    },
    {        idCode: "45",       Name: "ACCESOS NORTE DE BOGOTÁ S.A.S."    },
    {        idCode: "46",       Name: "VÍA 40 EXPRESS S.A.S."    },
    {        idCode: "47",       Name: "AUTOVIA BUCARAMANGA PAMPLONA S.A.S."    },
    {        idCode: "48",       Name: "Unión Vial Río Pamplonita S.A.S."    },           
];

const ConsortiumL = () =>  {
    const [value, setValue] = React.useState({});

  return (
    <>
      {/* {JSON.stringify(value)} */}
      <Select
        id="type_doc" required
        name="accounts"
        options={consortiumList}
        value={value}
        onChange={setValue}
        getOptionLabel={(consortiumList) => consortiumList.Name}
        getOptionValue={(consortiumList) => consortiumList.idCode}
      />
    </>
  );
};
export default ConsortiumL;