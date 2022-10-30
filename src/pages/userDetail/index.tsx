import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormButton from "../../components/Button";
import FormInput from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import { baseUrl } from "../../consts";
import { IUserInfo } from "../../model/user";
import { StyledWrapper } from "./style";
const UserDetail = () => {
  const [userData, setUserData] = useState<IUserInfo>({} as IUserInfo);
  const [disableBtn, setDisableBtn] = useState(true);
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const { id } = params;
  const getData = () => {
    axios.get(`${baseUrl}/users/${id}`).then((res) => {
      setUserData(res.data);
    });
  };
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
  const update = () => {
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
      .put(`${baseUrl}/users/${id}`, data)
      .then((res) => (res.data ? navigate("/") : null));
  };
  useEffect(getData, [id]);
  useEffect(() => {
    if (checkNull()) {
    }
  }, [userData]);
  return (
    <>
      <PageTitle title="ویرایش کاربر" button={false} />

      <StyledWrapper>
        <div className="inputWrapper">
          <FormInput
            name="name"
            label="نام"
            defaultValue={userData.firstName}
            ref={nameRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="lastName"
            label="نام خانوادگی"
            defaultValue={userData.lastName}
            ref={lastNameRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="city"
            label="شهر"
            defaultValue={userData.city}
            ref={cityRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="address"
            label="آدرس"
            defaultValue={userData.address}
            ref={addressRef}
            onChange={checkNull}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="create"
            label="تاریخ ایجاد حساب"
            defaultValue={userData.createdAt}
            readOnly={true}
            disabled={true}
            required={false}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            name="id"
            label="شناسه"
            defaultValue={userData.id}
            readOnly={true}
            disabled={true}
            required={false}
          />
        </div>
        <div className="buttonWrapper">
          <FormButton onClick={() => navigate(-1)}>انصراف</FormButton>
          <FormButton mode="success" onClick={update} disabled={disableBtn}>
            تایید
          </FormButton>
        </div>
      </StyledWrapper>
    </>
  );
};
export default UserDetail;
