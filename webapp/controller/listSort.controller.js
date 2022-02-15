sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("dragdrop.controller.listSort", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                var oModel = sap.ui.getCore().getModel("dragDropModel");
                this.byId("idDDList1").setModel(oModel);
                var oList = this.getView().byId("idDDList1");
                var listId = oList.getId();
                var listUlId = listId + "-listUl";
                $.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-sortable');
                oList.onAfterRendering = function () {
                    if (sap.m.List.prototype.onAfterRendering) {
                        sap.m.List.prototype.onAfterRendering.apply(this);
                    }
                    $("#" + listUlId).addClass('ui-sortable');
                    $("#" + listUlId).sortable({
                        connectWith: ".ui-sortable"
                    }).disableSelection();
                }
            },
            onBack: function () {
                this.oRouter.navTo("default");
            }
        })
    }
)