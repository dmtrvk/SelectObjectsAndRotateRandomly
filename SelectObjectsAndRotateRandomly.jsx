//SelectObjectsAndRotateRandomly.jsx
//An InDesign JavaScript by dmtrvk.ru
/*  
@@@BUILDINFO@@@ "SelectObjectsAndRotateRandomly.jsx" 3.0.0 3 June 2020 
*/
//This script randomly rotates selected objects.
//When you choose one of the imported graphic types, the script will select
//the frame containing the graphic (and not the graphic itself).
//
//
main();
function main(){
  rotateTheObjectArray ();
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function rotateTheObjectArray () {
  for (i=0; i<app.selection.length; i++){
    var pageItem = app.selection[i];
    //вариант 1
    pageItem.rotationAngle = getRndInteger(0, 360); ;
    //вариант 2
    //app.layoutWindows[0].transformReferencePoint = AnchorPoint.CENTER_ANCHOR;
    //pageItem.transform(CoordinateSpaces.pasteboardCoordinates, AnchorPoint.centerAnchor, tm);
  }
}
