let reserved= "reserved"
let available= "available"


$(document).ready(() => {
    $newItemForm.show();
    $(`#showForm`).on(`click`, ".cell");
    console.log();

    $newItemForm.hide();
    $(`#hideForm`).hide(`click`, ".cell")

});














// $(document).ready(() => {
//         let next_cell;
//         $(document).on("click", ".cell", (event) => {
//             next_cell = "grey";
//         });
//         // $(document).on("click", ".cell", (event) => {
//         //     $(event.target)
//         //         .removeClass("")
//         //         .addClass(next_cell);
//         // });
//         // $(document).on("click", ".green-btn", (event) => {
//         //     next_cell = "green";
//         // });
//         // $(document).on("click", ".cell", (event) => {
//         //     $(event.target)
//         //         .removeClass("")
//         //         .addClass(next_cell);
//         // });
//         // $(document).on("click", ".blue-btn", (event) => {
//         //     next_cell = "blue";
//         // });
//         // $(document).on("click", ".cell", (event) => {
//         //     $(event.target)
//         //         .removeClass("")
//         //         .addClass(next_cell);
//         });
    
    