sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    return Controller.extend("dragdrop.controller.radioButton", {
        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onNext: function () {
            var oSelectedIndex = this.byId("idRbg1").getSelectedIndex();
            if (oSelectedIndex === 0) {
                this.oRouter.navTo("tableDelete");
            } else if (oSelectedIndex === 1) {
                this.oRouter.navTo("listSort");
            } else if (oSelectedIndex === 2) {
                this.oRouter.navTo("tableItemMove");
            }
        }
    });
});
