import { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

type Props = {};

const Signin = (props: Props) => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBContainer className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="5" className="mt-5">
            <img
              src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1706196740~exp=1706197340~hmac=8343eebe4132560d3918f00dfcbb6649d2621ea7dd4b0af0770bd7e8589f2efb"
              className="img-fluid"
              alt=""
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="6" style={{ marginTop: 105 }}>
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                  style={{
                    color: "white",
                    backgroundColor:
                      justifyActive === "tab1" ? "#E44A48" : "#CCCCCC",
                  }}
                >
                  Bİreysel MÜşterİ
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                  style={{
                    color: "white",
                    backgroundColor:
                      justifyActive === "tab2" ? "#E44A48" : "#CCCCCC",
                  }}
                >
                  Kurumsal MÜşterİ
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane open={justifyActive === "tab1"}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Surname"
                  id="form1"
                  type="text"
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                  />
                </div>

                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
              </MDBTabsPane>

              <MDBTabsPane open={justifyActive === "tab2"}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Company Name"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Tax Number"
                  id="form1"
                  type="number"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                  />
                </div>

                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Signin;
