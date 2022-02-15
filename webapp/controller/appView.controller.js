sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    return Controller.extend("dragdrop.controller.appView", {
        onInit: function () {
            var data = {
                "Products": [
                    {
                        "name": "Nut and Bolts",
                        "category": "Mechanic",
                        "qty": "1280"
                    },
                    {
                        "name": "Tyres",
                        "category": "Automobile",
                        "qty": "1800"
                    },
                    {
                        "name": "bandages",
                        "category": "Hospital",
                        "qty": "180"
                    },
                    {
                        "name": "Injections",
                        "category": "Hospital",
                        "qty": "2080"
                    },
                    {
                        "name": "screws and spanners",
                        "category": "Mechanic",
                        "qty": "710"
                    },
                    {
                        "name": "wheels and Tubes",
                        "category": "Automobile",
                        "qty": "3099"
                    },
                    {
                        "name": "Buses and Autos",
                        "category": "Travel",
                        "qty": "120"
                    },
                    {
                        "name": "Vegitabels and Fruits",
                        "category": "Market",
                        "qty": "5280"
                    },
                    {
                        "name": "Tables and syrups",
                        "category": "Hospital",
                        "qty": "430"
                    },
                    {
                        "name": "Nut and Bolts",
                        "category": "Mechanic",
                        "qty": "1280"
                    },
                    {
                        "name": "Nut and Bolts",
                        "category": "Mechanic",
                        "qty": "1280"
                    }
                ]
            };
            var oModel = new sap.ui.model.json.JSONModel(data);
            sap.ui.getCore().setModel(oModel, "dragDropModel");
        }
    });
});
