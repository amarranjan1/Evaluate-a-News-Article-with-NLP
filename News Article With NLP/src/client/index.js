// Importing functions from different JS files
import { polarityScore } from "./js/polarityScore";
import { handleSubmit } from "./js/formHandler";
import { isValidURL } from "./js/inputURLChecker";

// Importing styles from SCSS files
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

// Exporting the imported functions
export { polarityScore, handleSubmit, isValidURL };
