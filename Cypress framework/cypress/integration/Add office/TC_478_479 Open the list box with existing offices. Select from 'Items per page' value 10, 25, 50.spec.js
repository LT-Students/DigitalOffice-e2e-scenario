describe("TC_479", function(){
	it("Sing in", function(){
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('mat-select[role="combobox"]').eq(1).click ()
	// TC_478
		cy.get('mat-option[role="option"]').eq(0).click ()
		cy.get('mat-select[role="combobox"]').eq(1).click ()
		cy.get('mat-option[role="option"]').eq(1).click ()
		cy.get('mat-select[role="combobox"]').eq(1).click ()
		cy.get('mat-option[role="option"]').eq(2).click ()

		
	})
})