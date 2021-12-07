import React from "react";
import Select from "react-select";

const profiles = [
    {        idCode: "",       Name: "Choose..."    },
    {        idCode: "1",       Name: "ADMINNISTRADOR"    },
    {        idCode: "2",       Name: "USUARIO INTERNO"    },
    {        idCode: "3",       Name: "USUARIO EXTERNO"    },    
    
];

const Profile = () =>  {
    const [value, setValue] = React.useState({});

  return (
    <>
      {/* {JSON.stringify(value)} */}
      <Select
        id="tuser" required
        name="accounts"
        options={profiles}
        value={value}
        onChange={setValue}
        getOptionLabel={(profiles) => profiles.Name}
        getOptionValue={(profiles) => profiles.idCode}
      />
    </>
  );
};
export default Profile;