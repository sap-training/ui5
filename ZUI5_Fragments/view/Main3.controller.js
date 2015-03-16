sap.ui.controller("sap.training.view.Main3", {
    
    oDialog : null,

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sap.training.view.Main3
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sap.training.view.Main3
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sap.training.view.Main3
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sap.training.view.Main3
*/
//	onExit: function() {
//
//	}

    openDialog: function(oEvent) {
        if (!this.oDialog) {
            this.oDialog = sap.ui.xmlfragment("myFrag","sap.training.view.Dialog", this);
        }
        this.oDialog.open();
    },
    
    closeDialog: function(oEvent) {
        
        oEvent.oSource.oParent.close(); 
        var oTextField = sap.ui.core.Fragment.byId("myFrag", "myField");
       // var oTextField = sap.ui.getCore().byId("myField");
        alert("Entered value: " + oTextField.getValue());
        oTextField.setValue("");
    }

});