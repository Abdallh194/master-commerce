import { memo, useState } from "react";
import EditForm from "./EditForm";
import UserInfo from "./UserInfo";

const RightSide: React.FC<NewUser> = ({ NewUser }) => {
  const [Open_Update_Form, setOpen_Update_Form] = useState(false);
  const [Confirm_Update_Form, setConfirm_Update_Form] = useState(false);
  return (
    <>
      {Open_Update_Form ? (
        <EditForm
          setOpen_Update_Form={setOpen_Update_Form}
          setConfirm_Update_Form={setConfirm_Update_Form}
        />
      ) : (
        <UserInfo
          NewUser={NewUser}
          setOpen_Update_Form={setOpen_Update_Form}
          Confirm_Update_Form={Confirm_Update_Form}
        />
      )}
    </>
  );
};

export default memo(RightSide);
