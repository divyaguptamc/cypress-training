describe('Open modus create website and verify components on it', () => {
   

    before (()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
            cy.log("Before hook")
          })
       
          cy.fixture('example.json').then(function(contactdata){
            this.contactdata = contactdata
         })    

          cy.visit('https://moduscreate.com/')

    })

    after(()=>{
      // executes once post all tests in it block
      cy.log("After hook")
    })
    beforeEach(()=>{
      // executes prior each test within it block
      cy.log("BeforeEach hook")
    })
    afterEach(()=>{
      // executes post each test within it block
      cy.log("AfterEac hook")
    })


    it('menu bar links should be clickable and should render correct page', () => {
      cy.get('#menu-main-nav-1').contains('Services').as('services-link')
      cy.get('@services-link').click()
      cy.url().should('include', '/services')
      // expect(cy.url()).to.include('/services')
      cy.get('#Modus-Create').click({force: true})
      cy.url().should('include', 'https://moduscreate.com/')
    })


    it('explain chaining example', () => {
      cy.url().should('include', 'https://moduscreate.com/')
        cy.contains('.fl-button-text', "Let's Talk").click().then(()=>{
          cy.url().should('include', '/contact')
        })
    })

    it.only('explain custom command',function(){
      cy.get('#menu-main-nav-1').contains('Contact').click()
      cy.fillContactForm(this.contactdata.fname,this.contactdata.lname,this.contactdata.email,this.contactdata.companyname,this.contactdata.whatcanwedo,this.contactdata.anythingelse)
      cy.contains('Thank you for contacting us')
      cy.screenshot('CompletePage')
    })

    it('explain hooks ', () => {
     // check above
    })

    it('explain fixtures ', () => {
     //check above
    })

    it('explain reports ', () => {
          //check above
    })

    it('explain screenshot ', () => {
          //check above
    })
    
  })