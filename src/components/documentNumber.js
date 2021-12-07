import React from "react";
import Select from "react-select";

const documentNumber1 = [
  {
    sortCode: "55-77-42",
    accountNumber: "08488234",
    accountType: "Savings Account",
    accountName: "DEF Sam"

  },
  {
    sortCode: "12-43-98",
    accountNumber: "12365432",
    accountType: "Savings Account",
    accountName: "GHI Cena"
  },
  {
    sortCode: "87-20-51",
    accountNumber: "76491234",
    accountType: "Savings Account",
    accountName: "JKL Pandey"
  },
  {
    sortCode: "56-73-39",
    accountNumber: "09865479",
    accountType: "Savings Account",
    accountName: "ABC Singh"
  }
];

const documentNumber = [
    {        idCode: "",       Name: "Choose..."    },
    {        idCode: "C",       Name: "CEDULA"    },
    {        idCode: "E",       Name: "CEDULA EXTRANJERIA"    },
    {        idCode: "D",       Name: "DIPLOMATICO"    },      
    {        idCode: "X",       Name: "DOC.IDENT. DE EXTRANJEROS"    },
    {        idCode: "F",       Name: "IDENT. FISCAL PARA EXT."    },
    {        idCode: "A",       Name: "NIT"    },
    {        idCode: "CA",       Name: "NIT PERSONAS NATURALES"    },  
    {        idCode: "N",       Name: "NUIP"    },      
    {        idCode: "P",       Name: "PASAPORTE"    },
    {        idCode: "R",       Name: "REGISTRO CIVIL"    },
    {        idCode: "T",       Name: "TARJ.IDENTIDAD"    },
    {        idCode: "TC",       Name: "CERTIFICADO NACIDO VIVO"    },       
    {        idCode: "TP",       Name: "PASAPORTE ONU"    },            
];

const Documentnumber_d = () =>  {
    const [value, setValue] = React.useState({});

  return (
    <>
      {/* {JSON.stringify(value)} */}
      <Select
        id="type_doc" required
        name="accounts"
        options={documentNumber}
        value={value}
        onChange={setValue}
        getOptionLabel={(documentNumber) => documentNumber.Name}
        getOptionValue={(documentNumber) => documentNumber.idCode}
      />
    </>
  );
};
export default Documentnumber_d;