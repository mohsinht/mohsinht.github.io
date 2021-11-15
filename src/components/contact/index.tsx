import React, { useState } from "react";
import Heading from "../heading";
import "./style.scss";
import axios from "axios";

interface IProps {
  text: {
    cta: string;
  };
}

const Contact = (props: IProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isValidated, setValidated] = useState(false);
  const [sendingState, setSendingState] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);

  const onMessageSend = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setValidated(true);

    if (isEmailCorrect() && isNameCorrect() && isMessageCorrect()) {
      setSendingState(1);
      axios({
        method: "post",
        url: "https://formspree.io/f/xayarbeo",
        data: {
          email,
          message: `${name} sent this message, "${message}".`,
          name,
        },
      })
        .then((res) => {
          setSendingState(2);
          setSubmitted(true);
        })
        .catch((err) => {
          setSendingState(3);
          console.log(err.response.data.error);
        });
    }
  };

  const isEmailCorrect = () => {
    return !!email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const isNameCorrect = () => {
    return !!name.match(/^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/);
  };

  const isMessageCorrect = () => {
    return !!message.match(/\S/);
  };

  return (
    <>
      <Heading text="Contact" />

      <div
        id="contact"
        className={`container contact-block mb-5 ${
          isSubmitted ? "after-submission" : null
        }`}
      >
        <div className="row">
          <h2 className="contact-cta text-center  font-size-5">
            {props.text.cta}
          </h2>
        </div>
        <form className="mt-4">
          <div
            className={`form-row contact-message ${
              isValidated ? "validated" : "not-validated"
            }`}
          >
            <div className="col-md-7 font-size-6">
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={50}
                className={`form-control font-size-6 ${
                  isMessageCorrect() ? "valid" : "invalid"
                }`}
                placeholder="Your messages"
              />
            </div>
            <div className="col-md-5">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className={`form-control font-size-6 ${
                  isNameCorrect() ? "valid" : "invalid"
                }`}
                placeholder="Your Name"
              />
              <input
                name="_replyto"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className={`form-control font-size-6 mt-2 ${
                  isEmailCorrect() ? "valid" : "invalid"
                }`}
                placeholder="Your Email"
              />
              <button
                className="btn btn-primary mt-2 font-size-6"
                onClick={onMessageSend}
                disabled={sendingState === 1 || sendingState === 2}
              >
                {sendingState === 0
                  ? "Submit"
                  : sendingState === 1
                  ? "Sending..."
                  : sendingState === 2
                  ? "Sent!"
                  : "Retry"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className={`container animated-completion ${
          isSubmitted ? "after-submission" : null
        }`}
      >
        <div>
          <div className="success-icon">
            <span className="fa-stack fa-2x">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-check fa-stack-1x"></i>
            </span>
          </div>
          <h2 className="success-message">
            Your message has been successfully sent!
          </h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
