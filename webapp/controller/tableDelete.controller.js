sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("dragdrop.controller.tableDelete", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                var oModel = sap.ui.getCore().getModel("dragDropModel");
                this.byId("idTable1").setModel(oModel);
            },
            onBack: function () {
                this.oRouter.navTo("default");
            },
            onDrop: function (oEvent) {
                var sPath = oEvent.getParameters("dragSession").draggedControl.getBindingContextPath();
                var draggedIndex = parseInt(sPath.split("/")[2]);
                var model = sap.ui.getCore().getModel("dragDropModel");
                var items = model.getData().Products;
                items.splice(draggedIndex, 1);
                model.setProperty("/Products", items);

            }
        });
    }
);