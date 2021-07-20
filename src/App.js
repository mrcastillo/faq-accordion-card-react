import arrow from "./images/icon-arrow-down.svg";

const setActive = (event) => {
  event.preventDefault();
  
  var target = event.currentTarget;
  var currentStates = document.getElementsByClassName("card-faq-item");

  if(target.id === "active") { target.id = ""}
  else { 
    for(var i = 0; i < currentStates.length; i++) { 
      currentStates[i].id = "";
    }
    target.id = `active`;
  }
}

const App = () => {
  return (
    <div className="app-container">
      <div className={"card-container"}>

        <div className={"card-bg-pattern"}> </div>
        <div className={"card-bg-woman-online"}> </div>
        <div className={"card-bg-illustration-box"}> </div>
          

        <div className={"card-faq-wrapper"}>
          <div className={"card-faq-text"}>
            <h1>FAQ</h1>
          </div>

          <div className={"card-faq-dropdown"}>
            <div className={"card-faq-item"} onClick={setActive}>
              <div className={"card-faq-item-button"}>
                <p>How many team members can I invite?</p>
                <img src={arrow} />
              </div>
              <div className={"card-faq-item-droptext"}>
                You can invite as many team members as you want!
              </div>
            </div>
            <div className={"card-faq-item"} onClick={setActive}>
              <div className={"card-faq-item-button"}>
                <p>What is the maximum file upload size?</p>
                <img src={arrow} />
              </div>
              <div className={"card-faq-item-droptext"}>
                No more than 2GB. All files in your account must fit your allotted storage space.
              </div>
            </div>
            <div className={"card-faq-item"} onClick={setActive}>
              <div className={"card-faq-item-button"}>
                <p>How do I reset my password?</p>
                <img src={arrow} />
              </div>
              <div className={"card-faq-item-droptext"}>
                If you would like to reset your password, please login and go to your account page. There will be an option to reset password.
              </div>
            </div>
            <div className={"card-faq-item"} onClick={setActive}>
              <div className={"card-faq-item-button"}>
                <p>Can I cancel my subscription?</p>
                <img src={arrow} />
              </div>
              <div className={"card-faq-item-droptext"}>
                You are able to cancel your subscription whenever you want. 
              </div>
            </div>
            <div className={"card-faq-item"} onClick={setActive}>
              <div className={"card-faq-item-button"}>
                <p>Do you provide additional support?</p>
                <img src={arrow} />
              </div>
              <div className={"card-faq-item-droptext"}>
                We provide additional support, please contact us with any questions.
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default App;