import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage {
    static get url() {
        return "/index.php#appointment"
    }

    static get facilityDropdown() {
        return cy.get("#combo_facility");
    }

    static get hospitalReadmissionCheckbox() {
        return cy.get("#chk_hospotal_readmission");
    }

    static get selectMedicaid() {
        return cy.get("#radio_program_medicaid");
    }

    static get dateInput() {
        return cy.get("#txt_visit_date");
    }

    static get datePicker() {
        return cy.get(".datepicker-days");
    }

    static get commentTextarea() {
        return cy.get("#txt_comment");
    }

    static get bookAppointmentButton() {
        return cy.get("#btn-book-appointment");
    }

    static get burgerIcon() {
        return cy.get("#menu-toggle");
    }

    static get sidebar() {
        return cy.get("#sidebar-wrapper");
    }
}