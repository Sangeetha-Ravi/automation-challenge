const { Section1 } = require('../objects/section-1')



describe('Alaya Automation Challenge', () => {

    it('Test: DOM: Tables', () => {

        Section1.actions.goToHomePage();

        cy.get('#navbar > ul > li:nth-child(2) > a').click();  //click on section 1 to go to the relevant page for testing

        cy.get(Section1.elements.alayaDataTable).should('not.be.visible'); //1. Assert that the table is not visible

        Section1.actions.showAlayaDataTable();

        cy.get(Section1.elements.alayaDataTable).should('be.visible'); //2.After clicking the "Show table" button, assert the table is visible

        cy.get(Section1.elements.alayaDataTable).get('tr:first').find('th').should('have.length', 5); //3.Assert that the table is 5 columns wide

        cy.get(Section1.elements.alayaDataTable).find('tr').should('have.length', 11); //4. Assert that the table is 10 rows long, excluding the first (header) row (Accounting for header row)

        cy.get(Section1.elements.alayaDataTable).get(`th:contains(${Section1.literals.USER})`).its('length').should('be.gte', 5); //5. Assert that at least 5 entries have the role "user"

        var refDateOfBirth = new Date(new Date().getTime() - 60 * 365.25 * 24 * 60 * 60 * 1000); //6. Assert there are exactly 3 people older than 60 years old



        console.log(refDateOfBirth)

    })



    it('Test: DOM: Forms', () => {

        Section1.actions.goToHomePage();

        cy.get('#navbar > ul > li:nth-child(2) > a').click();  //click on section 1 to go to the relevant page for testing

        cy.get(Section1.elements.alayaForm).should('not.be.visible'); //1. Assert that the form is not visible

        Section1.actions.showAlayaForm();

        cy.get(Section1.elements.alayaForm).should('be.visible'); //2.After clicking the "Show Form" button, assert the table is visible

        Section1.actions.enterAge();

        Section1.actions.enterName();

        cy.get(Section1.elements.alayaForm_Name).should('have.value', Section1.literals.FULL_NAME); //3.1 check for name field is filled

        cy.get(Section1.elements.alayaForm_Age).should('have.value', Section1.literals.AGE); //3.2 check for age field is filled

        Section1.actions.selectGender();

        cy.get(Section1.elements.alayaForm_Gender).should('have.value', Section1.literals.GENDER);//4 Check drop down value is female

        Section1.actions.nurseCheckbox();

        cy.get(Section1.elements.alayaForm_Nurse_Checkbox).should('be.enabled');

        Section1.actions.clickSubmitBtn();

        cy.on('window:alert', (str) => {

            expect(str).to.equal('Form submitted!');

        })
    })

})
