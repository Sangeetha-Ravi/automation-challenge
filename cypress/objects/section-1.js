const Section1 = {

    /**
  
     * A literal is considered static, stable strings (eg. titles, form labels, ...)
  
     */

    literals: {

        SAMPLE_LITERAL: 'This is a sample literal. You can safely delete it.',

        //looking for user roles.  

        USER: 'user',

        FULL_NAME: 'Sangeetha',

        AGE: '50',

        GENDER: 'female'

    },



    /**
  
     * An element is a selector for any DOM element (eg. [data-test="xxx"], #id, ...)
  
     */

    elements: {

        sampleElement: '[data-test=sample-element-to-be-safely-deleted]',

        //id for alaya-table

        alayaDataTable: '[id=alaya-table]',

        alayaForm: '[id=alaya-form]',

        alayaForm_Name: '[id=fullName]',

        alayaForm_Age: '[id=age]',

        alayaForm_Gender: '[id=gender]',

        alayaForm_Nurse_Checkbox: '[id=nurse]'

    },



    /**
  
     * An action should be pretty self explanatory! It consists of all the method performing
  
     * a particular action from clicking a simple button to doing complex assertions.
  
     */

    actions: {

        /**
    
         * Example of action.
    
         * In this example, we are grabbing a sample element, clicking on it and asserting the api answer.
    
         *
    
         * This is only used as an example and can be safely deleted.
    
         */

        assertSampleApiResponse() {

            cy.server()

            cy.wait('/endpoint').as('endpoint')



            cy.get(Section1.elements.sampleElement).click()

            // ... An api call to "/endpoint" performed on the app.

            cy.wait('@endpoint').should((request) => {

                expect(request.status).to.eq(200)

            })

        },



        enterName() {  //user enter Name in the form

            cy.get(Section1.elements.alayaForm_Name).type(Section1.literals.FULL_NAME);

        },



        enterAge() {

            //user enter Age in the form

            cy.get(Section1.elements.alayaForm_Age).type(Section1.literals.AGE);

        },



        selectGender() {

            //Click Gender Dropdown

            cy.get(Section1.elements.alayaForm_Gender).select(Section1.literals.GENDER);

        },



        nurseCheckbox() {

            //Tick nurse checkbox

            cy.get(Section1.elements.alayaForm_Nurse_Checkbox).check();

        },



        clickSubmitBtn() {

            //Click Submit Button

            cy.get('[id=submit]').click();

        },



        showAlayaDataTable() {

            //gets the table and clicks the button to show the table

            if (cy.get(Section1.elements.alayaDataTable).should('not.be.visible'))

                cy.get('#table-toggle-button').click();

        },



        showAlayaForm() {

            //gets the form and clicks the button to show the form

            if (cy.get(Section1.elements.alayaForm).should('not.be.visible'))

                cy.get('#form-toggle-button').click();

        },



        goToHomePage() {

            //Go to homepage

            cy.visit('http://localhost:8080');

        }



    },

}

module.exports = { Section1 }
