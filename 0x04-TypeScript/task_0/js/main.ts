interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent : Student = {
  firstName: "Davidson",
  lastName: "Ogaraku",
  age: 26,
  location: "Lagos"   
}

const secondStudent : Student = {
  firstName: "Philip",
  lastName: "Ukanwoke",
  age: 23,
  location: "Uyo"
}

const studentsList : Array<Student> = [firstStudent, secondStudent];

const table: HTMLTableElement  = document.createElement('table');
const thead: HTMLHeadElement = document.createElement('thead');
const tbody: HTMLTableSectionElement  = document.createElement('tbody');

const tr: HTMLTableRowElement  = document.createElement('tr');
const th1: HTMLTableCellElement  = document.createElement('th');
const th2: HTMLTableCellElement  = document.createElement('th');

th1.innerText= "First Name";
th2.innerText = "Location";
th1.style.border = '2px solid blue';
th2.style.border = '2px solid blue';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

tr.appendChild(th1);
tr.appendChild(th2);

thead.appendChild(tr);
table.appendChild(thead);

studentsList.forEach((student) => {
  const tr: HTMLTableRowElement  = document.createElement('tr');
  const td1:  HTMLTableCellElement  = document.createElement('td');
  const td2: HTMLTableCellElement  = document.createElement('td');

  td1.innerHTML = student.firstName;
  td2.innerHTML = student.location;

  td1.style.border = '1px solid gray';
  td2.style.border = '1px solid gray';
  td1.style.padding = '.5rem';
  td2.style.padding = '.5rem';


  tr.appendChild(td1);
  tr.appendChild(td2);

  tbody.appendChild(tr);
});

table.appendChild(tbody);

// center table
table.style.margin = 'auto';

document.body.appendChild(table);
