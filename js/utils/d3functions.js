export function tabulate(data, columns) {
  let table = d3.select('#table-body');
  //add class to table
  table.attr('class', 'table table-striped table-bordered table-hover w-75 mx-auto');
  let thead = table.select('thead')
  let tbody = table.select('tbody');

  tbody.selectAll('tr').remove();
  thead.selectAll('tr').remove();
  thead.selectAll('th').remove();

  let header = thead.append('tr');
  columns.forEach(column => {
    header.append('th').text(column);
  });

  data.forEach(function (row) {
    let tr = tbody.append('tr');
    columns.forEach(function (column) {
      tr.append('td').text(row[column]);
    });
  });

  return table;
}

export function updateOptionsList(htmlElement, inputData) {
  let options = d3.select(htmlElement);
  options.selectAll('option').remove();
  inputData.forEach(function (row) {
    options.append('option').attr('value', row.id).text(row.title);
  });
  options.on("change", () => { });
}