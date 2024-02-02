var estados = {
  Mexico: ["Hidalgo", "Queretaro"],
  Argentina: ["BuenosAires", "Catamarca"]
};

var municipios = {
  Hidalgo: ["Tula", "Tepeji", "Mixquiahula"],
  Queretaro: ["Tequisquiapan", "Peñamiller"],
  BuenosAires: ["LaPlata", "Avellaneda"],
  Catamarca: ["SanFernando", "Belen"]
};

var localidades = {
  Tula: ["San Marcos", "El Llano", "San Miguel Vindho"],
  Tepeji: ["Atengo", "Miraflores Montecillo"],
  Mixquiahula: ["Colonia Teñhe", "Colonia Morelos"],
  Tequisquiapan: ["Adolfo Lopez Mateos", "Zona Sur"],
  Peñamiller: ["El Paraíso", "Vista Alegre II"],
  LaPlata: ["Abasto", "Arana"],
  Avellaneda: ["Avellaneda Centro", "Dock Sud"],
  SanFernando: ["Virreyes", "Victoria"],
  Belen: ["La Represa"]
};

function cargarEstados() {
  var paisSeleccionado = document.getElementById("pais").value;
  var estadosArray = estados[paisSeleccionado];

  var estadoSelect = document.getElementById("estado");
  estadoSelect.innerHTML = "";

  for (var i = 0; i < estadosArray.length; i++) {
    var option = document.createElement("option");
    option.value = estadosArray[i];
    option.text = estadosArray[i];
    estadoSelect.add(option);
  }

  cargarMunicipios();
}

function cargarMunicipios() {
  var estadoSeleccionado = document.getElementById("estado").value;
  var municipiosArray = municipios[estadoSeleccionado];

  var municipioSelect = document.getElementById("municipio");
  municipioSelect.innerHTML = "";

  for (var i = 0; i < municipiosArray.length; i++) {
    var option = document.createElement("option");
    option.value = municipiosArray[i];
    option.text = municipiosArray[i];
    municipioSelect.add(option);
  }

  cargarLocalidades();
}

function cargarLocalidades() {
  var municipioSeleccionado = document.getElementById("municipio").value;
  var localidadesArray = localidades[municipioSeleccionado];

  var localidadSelect = document.getElementById("localidad");
  localidadSelect.innerHTML = "";

  for (var i = 0; i < localidadesArray.length; i++) {
    var option = document.createElement("option");
    option.value = localidadesArray[i];
    option.text = localidadesArray[i];
    localidadSelect.add(option);
  }
}

function mostrarDatos() {
  var pais = document.getElementById("pais").value;
  var estado = document.getElementById("estado").value;
  var municipio = document.getElementById("municipio").value;
  var localidad = document.getElementById("localidad").value;

  var datosSeleccionadosDiv = document.getElementById("datosSeleccionados");
  datosSeleccionadosDiv.innerHTML = "<h4>Datos Seleccionados:</h4>" +
    "<p><strong>País:</strong> " + pais + "</p>" +
    "<p><strong>Estado:</strong> " + estado + "</p>" +
    "<p><strong>Municipio:</strong> " + municipio + "</p>" +
    "<p><strong>Localidad:</strong> " + localidad + "</p>";
}
