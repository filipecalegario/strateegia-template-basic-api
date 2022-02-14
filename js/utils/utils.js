// Ref: https://stackoverflow.com/questions/15547198/export-html-table-to-csv-using-vanilla-javascript
function exportTableAsCsv(table_id, separator = ',') {
  // Select rows from table_id
  let rows = document.querySelectorAll('table#' + table_id + ' tr');
  // Construct csv
  let csv = [];
  for (let i = 0; i < rows.length; i++) {
    let row = [], cols = rows[i].querySelectorAll('td, th');
    for (let j = 0; j < cols.length; j++) {
      // Clean innertext to remove multiple spaces and jumpline (break csv)
      let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
      // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
      data = data.replace(/"/g, '""');
      // Push escaped string
      row.push('"' + data + '"');
    }
    csv.push(row.join(separator));
  }
  let csv_string = csv.join('\n');
  // Download it
  let filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
  let link = document.createElement('a');
  link.style.display = 'none';
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportSvg(svgId) {
  //get svg element.
  let svg = document.getElementById(svgId);

  //get svg source.
  let serializer = new XMLSerializer();
  let source = serializer.serializeToString(svg);

  //add name spaces.
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  //convert svg source to URI data scheme.
  let url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  //set url value to a element's href attribute.
  // let link_svg = document.getElementById("link_svg");
  let link = document.createElement('a');
  link.style.display = 'none';
  link.setAttribute('target', '_blank');
  // link_svg.href = url;
  link.setAttribute("href", url);
  link.setAttribute("download", "graph.svg");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  //you can download svg file by right click menu.
}

function exportJson(dataElement) {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataElement));
  let link = document.createElement('a');
  link.style.display = 'none';
  link.setAttribute('target', '_blank');
  // link_svg.href = url;
  link.setAttribute("href", dataStr);
  link.setAttribute("download", "data.json");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}