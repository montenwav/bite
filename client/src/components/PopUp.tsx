import { useState } from "react";
import { mainContext } from "../Provider";
import { useContext } from "react";

type setIsPopUpOpenType = {
  setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUp = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { isPopUp } = useContext(mainContext);

  return (
    <div className="popup">
      {isPopUpOpen && isPopUp ? (
        <PopUpContent setIsPopUpOpen={setIsPopUpOpen} />
      ) : (
        <PopUpTag setIsPopUpOpen={setIsPopUpOpen} />
      )}
    </div>
  );
};

const PopUpTag = ({ setIsPopUpOpen }: setIsPopUpOpenType) => {
  const { setIsPopUp } = useContext(mainContext);

  return (
    <div className="popup_tag_main">
      <div onClick={() => setIsPopUp(false)} className="popup_close">
        <svg className="close_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      <div onClick={() => setIsPopUpOpen(true)} className="popup_tag">
        GET 10% OFF
      </div>
    </div>
  );
};

const PopUpContent = ({ setIsPopUpOpen }: setIsPopUpOpenType) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div onClick={() => setIsPopUpOpen(false)} className="popup_content_bg" />
      <div className="popup_content">
        <div className="popup_content_left">
          <img
            src="https://postscript-mms-files.s3.amazonaws.com/1RSw27-2FbAhr8vSW32KypHM7ERBv.png"
            alt="bite product"
          />
        </div>
        <div className="popup_content_right">
          <div className="popup_content_right_content">
            <img
              src="https://postscript-mms-files.s3.amazonaws.com/1RSrVg-2HRZBgdCaFJwm2wwgDD2L9.png"
              alt="bite logo"
            />
            <h1>Want 10% off?</h1>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Enter email Adress"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="popup_contine_btn" onClick={() => setIsPopUpOpen(false)}>
              CONTINUE
            </button>
            <button className="popup_thank_you_btn" onClick={() => setIsPopUpOpen(false)}>
              NO, THANK YOU
            </button>
          </div>
          <svg
            onClick={() => setIsPopUpOpen(false)}
            className="popup_close_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};
