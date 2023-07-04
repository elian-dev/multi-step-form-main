import IsEmpty from "./IsEmpty.js";
import IsValidEmail from "./IsValidEmail.js";
import AppendError from "./AppendError.js";
import RemoveError from "./RemoveError.js";

import { nextStep } from "./nextStep.js";

import { getData } from "../state/getData.js";
import { setFormData } from "../state/form/setFormData.js";

const state = getData();

export function FormValidator(formData, data) {
    const areEmptiesErrors = IsEmpty(data);
    const areEmailInputs = document.querySelectorAll('input[type="email"]');

    // Remove all errors
    const errors = document.querySelectorAll('.error');
    const inputErrors = document.querySelectorAll('.input__group__input-error');
    if (errors.length > 0 || inputErrors.length > 0) {
        RemoveError(errors, inputErrors);
    }

    if (areEmptiesErrors.length > 0 ) {
        console.log('There are empty inputs');

        // Identify the input group that has the error
        const emptyInputs = areEmptiesErrors.map((error) => {
            return document.querySelector(`[name="${error}"]`).parentElement;
        });

        // Append the error message
        emptyInputs.forEach((input) => {
            AppendError(input, 'This field is required');
        });

    }  else {
        console.log('There are no empty inputs');
            // Append the error message if the email is invalid
            const input = document.querySelector('input[type="email"]');
            const inputParent = input.parentElement;

            if (!IsValidEmail(input.value)) {
                AppendError(inputParent, 'Please enter a valid email address');
            } else {
                // ✨ Set the form data
                setFormData(state, data);

                // ✨ Go to the next step
                nextStep(1);
            }

    }
}