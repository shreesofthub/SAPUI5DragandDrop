sap.ui.define(
    ["sap/m/Button"],
    function(oButton){
        return oButton.extend("sapYard.sapyard13.controller.DeleteButton",{
            metadata:{
                dnd:{
                    droppable:true
                }
            },
            renderer:{}
        });
    }
);