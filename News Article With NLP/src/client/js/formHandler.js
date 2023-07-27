import { polarityScore } from "./polarityScore";

async function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById("url").value;
  const isValidURL = Client.isValidURL(formText);
  console.log("::: Form Submitted :::");
  
  if (isValidURL) {
    try {
      const response = await postData("http://localhost:8081/api", { url: formText });
      updateUI(response);
    } catch (error) {
      console.error("Error while posting data:", error);
      resetUI();
      document.getElementById("results").innerHTML = "An error occurred while fetching data.";
    }
  } else {
    resetUI();
    document.getElementById("results").innerHTML = "Please insert a valid URL.";
  }
}

// Post data function
const postData = async (url = "", data = { key: "defaultValue" }) => {
    console.log('Debugging:', data);
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
  
    try {
      const newData = await res.json();
      console.log("Returned Data from MeaningCloud:", newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };
  

// Update UI function
function updateUI(data) {
    try {
      const {
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony,
        sentence_list
      } = data;
  
      // reset DOM
      resetUI();
  
      // update DOM
      document.getElementById("polarity").innerHTML = `Polarity: ${polarityScore(score_tag)}`;
      document.getElementById("agreement").innerHTML = `Agreement: ${agreement}`;
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${subjectivity}`;
      document.getElementById("confidence").innerHTML = `Confidence: ${confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${irony}`;
      document.getElementById("text").innerHTML = `${sentence_list[0].text}`;
    } catch (error) {
      console.log("error", error);
    }
  }
  
// Reset UI function
function resetUI() {
    const elements = ["results", "polarity", "agreement", "subjectivity", "confidence", "irony", "text"];
    for (const elementId of elements) {
      document.getElementById(elementId).innerHTML = "";
    }
  }
  
export {handleSubmit}