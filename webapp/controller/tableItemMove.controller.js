sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"],
    function (oController, oHistory) {
        return oController.extend("dragdrop.controller.tableItemMove", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oModel = sap.ui.getCore().getModel("dragDropModel");
                this.byId("idTable1").setModel(this.oModel);
                this.droppedItems = [];
                this.droppedModel = new sap.ui.model.json.JSONModel({
                    droppedProducts: []
                });
                this.byId("idTable2").setModel(this.droppedModel);
            },
            onDragStart: function (oEvent) {
                var sPath = oEvent.getParameters("dragSession").target.getBindingContext().sPath;
                var draggedItemIndex = parseInt(sPath.split("/")[2]);
                if (oEvent.getParameters("dragSession").target.sId.includes("idTable2") === true) {
                    var data = this.droppedModel.getData().droppedProducts;
                    this.droppedItem = data.splice(draggedItemIndex, 1);
                    this.droppedModel.setProperty("/droppedProducts", data);
                } else {
                    var data = this.oModel.getData().Products;
                    this.draggedItem = data.splice(draggedItemIndex, 1);
                    this.oModel.setProperty("/Products", data);
                }
            },
            onDropTable: function (oEvent) {
                if (oEvent.getParameters("dragSession").draggedControl.sId.includes("idTable2") === true) {
                    var remainingProducts = this.oModel.getProperty("/Products");
                    remainingProducts.push(this.droppedItem[0]);
                    this.oModel.setProperty("/Products", remainingProducts);
                } else {
                    this.droppedItems.push(this.draggedItem[0]);
                    this.droppedModel.setProperty("/droppedProducts", this.droppedItems);
                }
            },
            moveToTable2: function () {
                var selectedIndex = this.byId("idTable1").getSelectedIndex();
                if (selectedIndex >= 0) {
                    var table1Items = this.oModel.getProperty("/Products");
                    var selectedItem = table1Items[selectedIndex];
                    table1Items.splice(selectedIndex, 1);
                    this.oModel.setProperty("/Products", table1Items);
                    this.droppedItems.push(selectedItem);
                    this.droppedModel.setProperty("/droppedProducts", this.droppedItems);
                } else {
                    window.alert("select one record from Available Products");
                }
            },
            moveToTable1: function () {
                var selectedIndex = this.byId("idTable2").getSelectedIndex();
                if (selectedIndex >= 0) {
                    var table2Items = this.droppedModel.getProperty("/droppedProducts");
                    var selectedItem = table2Items[selectedIndex];
                    table2Items.splice(selectedIndex, 1);
                    this.droppedModel.setProperty("/droppedProducts", table2Items);
                    var availableItems = this.oModel.getProperty("/Products");
                    availableItems.push(selectedItem);
                    this.oModel.setProperty("/Products", availableItems);
                } else {
                    new sap.m.MessageToast.show("Select one Record from Selected Products");
                }
            },
            moveUp: function () {
                this.updown('Up');
            },
            moveDown: function () {
                this.updown('down');
            },
            updown: function (x) {
                var selectedIndex = this.byId("idTable2").getSelectedIndex();
                var table2Items = this.droppedModel.getProperty("/droppedProducts");
                var selectedItem = table2Items[selectedIndex];
                table2Items.splice(selectedIndex, 1);
                if (x === 'Up') {
                    table2Items.splice(selectedIndex - 1, 0, selectedItem);
                } else {
                    table2Items.splice(selectedIndex + 1, 0, selectedItem);
                }
                this.droppedModel.setProperty("/droppedProducts", table2Items);
                if (x === 'Up') {
                    this.byId("idTable2").setSelectedIndex(selectedIndex - 1);
                } else {
                    this.byId("idTable2").setSelectedIndex(selectedIndex + 1);
                }
            },
            onBack: function () {
                var oHInstance = oHistory.getInstance();
                var prevHash = oHInstance.getPreviousHash();
                if (prevHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.oRouter.navTo("default");
                }
            }
        });
    }
);