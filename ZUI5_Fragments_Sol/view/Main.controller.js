sap.ui.controller("sap.training.view.Main", {

	oDialog: null,

	openDialog: function() {
		if (!this.oDialog) {
			this.oDialog = sap.ui.xmlfragment("myFrag", "sap.training.view.Dialog", this);
		}
		this.oDialog.open();
	},

	closeDialog: function(oEvent) {

		this.oDialog.close();

		var oTextField =
			sap.ui.core.Fragment.byId("myFrag", "myField");

		alert("Entered value: " + oTextField.getValue());

		oTextField.setValue("");
	}

});