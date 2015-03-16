sap.ui.jsview("sap.training.view.Main4", {

	getControllerName: function() {
		return "sap.training.view.Main";
	},

	createContent: function(oController) {
	    
	    

	
		var oXmlFrag1 = sap.ui.xmlfragment("MyFrag1", "sap.training.view.XmlFrag");
	var oXmlFrag2 = sap.ui.xmlfragment( "sap.training.view.XmlFrag");
	var oButton = new sap.ui.commons.Button({
		id: "id", // sap.ui.core.ID
		text: 'Test', // string
		enabled: true, // boolean
		visible: true, // boolean
		width: undefined, // sap.ui.core.CSSSize
		helpId: '', // string
		icon: '', // sap.ui.core.URI
		iconHovered: '', // sap.ui.core.URI
		iconSelected: '', // sap.ui.core.URI
		iconFirst: true, // boolean
		height: undefined, // sap.ui.core.CSSSize
		styled: true, // boolean
		lite: false, // boolean
		style: sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
		tooltip: undefined, // sap.ui.core.TooltipBase
		customData: [], // sap.ui.core.CustomData
		dependents: [], // sap.ui.core.Control, since 1.19
		ariaDescribedBy: [], // sap.ui.core.Control
		ariaLabelledBy: [], // sap.ui.core.Control
		press: oController.onButtonPress
	})
	

	var oLayout = new  sap.ui.commons.layout.HorizontalLayout({
		content: [oXmlFrag1, oXmlFrag2, oButton] // sap.ui.core.Control
	})
	

		return oLayout;
	}
});


