sap.ui.controller("sap.training.view.Main", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.Main
	 */
	onInit: function() {

		var sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();

		var sText = "Current Language Code / Locale: " + sCurrentLocale;
		this.getView().byId("myTextView1").setText(sText);

		var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance();
		var sDate = oDateFormat.format(new Date());

		var oBundle = jQuery.sap.resources({
			url: "i18n/messageBundle.properties",
			locale: sCurrentLocale
		});
		var sDateText = oBundle.getText("mainTextDate", [sDate]);
		this.getView().byId("myTextView2").setText(sDateText);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf sap.training.view.Main
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf sap.training.view.Main
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf sap.training.view.Main
	 */
	//	onExit: function() {
	//
	//	}
	

});