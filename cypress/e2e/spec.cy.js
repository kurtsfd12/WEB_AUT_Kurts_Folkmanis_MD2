import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { AppointmentSummaryPage } from "../pageObjects/AppointmentSummaryPage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";

describe('MD2', () => {

  context("Context", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it('Make an Appointment', () => {
        HomePage.appointmentButton.click();

        LoginPage.usernameInput.type("John Doe");
        LoginPage.passwordInput.type("ThisIsNotAPassword");
        LoginPage.loginButton.click();

        AppointmentPage.facilityDropdown.select("Seoul CURA Healthcare Center");
        AppointmentPage.hospitalReadmissionCheckbox.click();
        AppointmentPage.selectMedicaid.click();
        AppointmentPage.dateInput.click();
        AppointmentPage.datePicker.contains(".day", "30").click();
        AppointmentPage.selectMedicaid.click();
        AppointmentPage.commentTextarea.type("CURA Healthcare Service");
        AppointmentPage.bookAppointmentButton.click();

        AppointmentSummaryPage.facility.should("contain.text", "Seoul CURA Healthcare Center");
        AppointmentSummaryPage.hospitalReadmission.should("contain.text", "Yes");
        AppointmentSummaryPage.program.should("contain.text", "Medicaid");
        AppointmentSummaryPage.visitDate.should("contain.text", "30");
        AppointmentSummaryPage.comment.should("contain.text", "CURA Healthcare Service");
    });

    it("Appointment history empty", () => {
      HomePage.appointmentButton.click();

      LoginPage.usernameInput.type("John Doe");
      LoginPage.passwordInput.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();

      AppointmentPage.burgerIcon.click();
      AppointmentPage.sidebar.should("contain.class", "active");
      AppointmentPage.sidebar.contains("li", "History").click();

      HistoryPage.historySection.should("contain.text", "No appointment.");
    });
  });
});