function myFunctionLista() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var guiaPlan = planilha.getSheetByName(<Aba da Planilha>);

  guiaPlan.getRange("A5:B").clear();

  var pasta = DriveApp.getFolderById(<Id da pasta>);

  var lista = [];

  var arquivos = pasta.getFiles();

  while(arquivos.hasNext()){

    var arquivo = arquivos.next();

    var linha = [];

    linha.push(arquivo.getName(), arquivo.getUrl()); 

    lista.push(linha)
  }

  guiaPlan.getRange(5,1,lista.length, lista[0].length).setValues(lista);

  Browser.msgBox("finalizado")
}
