import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../../components/Button";
import FormInput from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import { baseUrl } from "../../consts";
import { StyledWrapper } from "../userDetail/style";
const UserInsert = () => {
  const [disableBtn, setDisableBtn] = useState(true);
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const checkNull = () => {
    if (
      !nameRef.current?.value ||
      !lastNameRef.current?.value ||
      !cityRef.current?.value ||
      !addressRef.current?.value
    ) {
      setDisableBtn(true);
      return true;
    }
    setDisableBtn(false);
    return false;
  };
  const insert = () => {
    if (checkNull()) {
      return false;
    }
    const data = {
      firstName: nameRef.current?.value,
      lastName: lastNameRef.current?.value,
      city: cityRef.current?.value,
      address: addressRef.current?.value,
    };
    axios
      .post(`${baseUrl}/users/`, data)
      .then((res) => (res.data ? navigate("/") : null));
  };
  return (
    <>
      <PageTitle title="افزودن کاربر" button={false} />

      <StyledWrapper>
        <div className="inputWrapper">
          <FormInput
            name="name"
            label="نام"
            ref={nameRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="lastName"
            label="نام خانوادگی"
            ref={lastNameRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="city"
            label="شهر"
            ref={cityRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="address"
            label="آدرس"
            ref={addressRef}
            onChange={checkNull}
          />
        </div>
        <div className="buttonWrapper">
          <FormButton onClick={() => navigate(-1)}>انصراف</FormButton>
          <FormButton mode="success" onClick={insert} disabled={disableBtn}>
            تایید
          </FormButton>
        </div>
      </StyledWrapper>
    </>
  );
};
export default UserInsert;
