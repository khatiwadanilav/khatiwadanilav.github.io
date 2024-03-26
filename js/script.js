function redirectToPage(destination) {
  window.location.href = destination;
}

function goToHome() {
  console.info("inside the function");
  window.history.back();
}

function goToHomePage() {
  window.location.href = "index.html";
}

function showPopup() {
  var popup = document.getElementById('popup');
  if (popup) {
    popup.classList.add('show-popup');
  }
}

function closePopup() {
  var popup = document.getElementById('popup');
  if (popup) {
    popup.classList.remove('show-popup');
  }

  const tableContainer = document.getElementById('eventsTable');
  if (tableContainer) {
    tableContainer.style.display = 'block'; // Show the table after closing the popup
  }
}

function generateCloseButton() {
  // Add button to popup
  const popupContent = document.createElement('div');
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.className = 'close-button';
  closeButton.onclick = closePopup;
  popupContent.appendChild(closeButton);
  return popupContent;
}

function generateTable(tableRowsData) {
  const tableContainer = document.getElementById('eventsTable');
  tableContainer.innerHTML = '';
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');
  const column1Header = document.createElement('th');
  const column2Header = document.createElement('th');
  const column3Header = document.createElement('th');

  // Set attributes and content for table headers
  column1Header.textContent = 'Events';
  column2Header.textContent = 'Attributes';
  column3Header.textContent = 'Values';

  // Append table headers to header row
  headerRow.appendChild(column1Header);
  headerRow.appendChild(column2Header);
  headerRow.appendChild(column3Header);

  thead.appendChild(headerRow);

  // Append table header to table
  table.appendChild(thead);

  // Loop through data and create table rows
  tableRowsData.forEach(item => {
    const event = item.column1;
    item.column2.forEach((attribute, index) => {
      const row = document.createElement('tr');
      const column1Cell = document.createElement('td');
      const column2Cell = document.createElement('td');
      const column3Cell = document.createElement('td');

      // For the first attribute of each event, set content for column 1 cell
      if (index === 0) {
        column1Cell.textContent = event;
        // Add class to the first cell in the first column
        column1Cell.classList.add('column1-first');
        // Set rowspan for column 1 cell
        column1Cell.rowSpan = item.column2.length;
        // Append column 1 cell to row
        row.appendChild(column1Cell);
      }

      // Create an unordered list for column 2 cell
      const attributeList = document.createElement('ul');

      // Loop through column 2 data and create list items
      const attributeListItem = document.createElement('li');
      attributeListItem.textContent = attribute;
      attributeList.appendChild(attributeListItem);

      // Append the unordered list to column 2 cell
      column2Cell.appendChild(attributeList);
      // Append column 2 cell to row
      row.appendChild(column2Cell);

      // Set content for column 3 cell (values)
      if (item.column3[index]) {
        const values = item.column3[index];
        const valuesList = document.createElement('ul');

        // Check if values is an array
        if (Array.isArray(values)) {
          values.forEach(value => {
            const valueListItem = document.createElement('li');
            valueListItem.textContent = value;
            valuesList.appendChild(valueListItem);
          });
        } else {
          const valueListItem = document.createElement('li');
          valueListItem.textContent = values;
          valuesList.appendChild(valueListItem);
        }

        column3Cell.appendChild(valuesList);
      }

      // Append column 3 cell to row
      row.appendChild(column3Cell);

      // Append row to table body
      tbody.appendChild(row);
    });
  });

  // Append table body to table
  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

function generatePopUpContents(dataType) {
  console.log("generatingPopContents");

  const popupContainer = document.getElementById('popup');
  console.log(popupContainer);

  // Create elements
  const popupContent = document.createElement('div');
  const tickImage = document.createElement('img');
  const title = document.createElement('h2');
  const message1 = document.createElement('p');

  // Set attributes
  tickImage.src = 'css/pic/tick.png';
  title.textContent = 'Awesome!!';
  message1.textContent = `${dataType} Parameters Successfully Generated.`;

  // Append elements
  popupContent.appendChild(tickImage);
  popupContent.appendChild(title);
  popupContent.appendChild(message1);

  // Generate Contents
  const message2 = document.createElement('p');
  message2.textContent = 'Check Google Analytics. Thanks!!!';


  // Add close button
  const closeButtonContent = generateCloseButton();

  // Add popup content to container
  popupContainer.appendChild(popupContent);
  popupContainer.appendChild(message2);
  popupContainer.appendChild(closeButtonContent);

}

// Function to apply alternating row colors
function applyAlternateRowColors() {
  const tableRows = document.querySelectorAll('#eventsTable tbody tr');
  let isColorRowIndex = false;
  let mainRowCount = 0;

  // Determine the number of main rows
  for (let i = 0; i < tableRows.length; i++) {
    if (tableRows[i].querySelector('.column1-first')) {
      mainRowCount++;
    }
  }


  // Apply alternating colors to all rows, including split rows
  for (let i = 0; i < tableRows.length; i++) {

    if (mainRowCount > 1 && i > 0 && tableRows[i].querySelector('.column1-first')) {
      isColorRowIndex = !isColorRowIndex; // Toggle index for main rows
    }

    // Apply background color based on whether it's an even or odd index
    if (!isColorRowIndex) {
      tableRows[i].style.backgroundColor = '#ffffff'; // Reset background color
    } else {
      tableRows[i].style.backgroundColor = "#A5D8DD";
    }

    // Skip split rows in the second column
    if (!tableRows[i].querySelector('.column1-first')) {
      continue;
    }
  }
}
