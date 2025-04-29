import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    static get usernameInput(){
        return cy.get('#txt-username');
    }

    static get passwordInput(){
        return cy.get('#txt-password');
    }
    
    static get loginButton(){
        return cy.get('#btn-login');
    }

}