import System.IO;

var fileName = "saveGame.data";

function OnTriggerEnter(col : Collider){
    var OurFile = File.CreateText(fileName);
    OurFile.WriteLine("savingthegame");
    OurFile.WriteLine("load10coins");
    OurFile.Close();
}